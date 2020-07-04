const express = require('express')
const rita = require('rita')
const puppeteer = require('puppeteer')
const cors = require('cors')
const app = express();
const url = "https://www.pianodaddy.com";
const regex = new RegExp(/[A-Z][a-z]?(\W\W)?\W?/g)
app.use(cors())

let port = process.env.PORT || 5000;  

app.get('/', (req, res) => {
  res.send("HELLO WORLD")
})
app.get('/:query', async function(req, res, next) {
    res.send(await scrapeLyrics(url, req.params.query));
})

async function scrapeLyrics(u, song){
    try {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(url);
      await page.type('#cse-search-box > div:nth-child(1) > input:nth-child(3)', song)
      await page.click('#cse-search-box > div:nth-child(1) > input:nth-child(4)')
      await page.waitForNavigation().catch(err => void 0)
      const links = await page.$$eval('a', links => links.map(link => link.href));
      await page.goto(links[1])
      const notes = await page.$$eval('#tablist1-panel1 > span', el => el.map(e => e.textContent)).catch(err => void 0);   
      const lyrics = await page.$eval('#tablist1-panel1', el => el.innerText.split("\n").filter(l => (l !== "")));
      const filteredLyrics = await lyrics.filter(g => !notes.includes(g))
      const r = await filteredLyrics.map(line => {
        let l = rita.RiTa.stripPunctuation(line)
        return rita.RiTa.getSyllables(l)
      })
      const seperatedNotes = await notes.map(noteline => noteline.match(regex))
      browser.close()
      return await {filteredLyrics, r, seperatedNotes, success: 1, notes}
    } 
    catch (error) {
      return await {filteredLyrics:[], r:[], seperatedNotes:[], success: 0, notes:[]}
    }
}


app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
})