<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="scrapi">scrAPI</h1>
<p>REST API implementation for scraping and returning Lyrics and Octave Notes for the queried song from <a href="https://www.pianodaddy.com">https://www.pianodaddy.com</a> using Express and Node.js!</p>
<hr>
<p><em>Endpoint: <a href="https://ly8api.herokuapp.com/%7Bsong-name%7D">https://ly8api.herokuapp.com/{song-name}</a></em></p>
<blockquote>
<p>Returns a JSON object {filteredLyrics, noteChangePoints, seperatedNotes, success, notes}</p>
</blockquote>
<ul>
<li>
<p>filteredLyrics: Type = Array<br>
Each element is a single lyric line of that queried song. If the request fails, returns an empty array [].</p>
</li>
<li>
<p>noteChangePoints: Type = Array<br>
‘/’ in a string indicates occurence of a syllable. To be used in future for a special feauture on Lyctave. If the request fails, returns an empty array [].</p>
</li>
<li>
<p>seperatedNotes: Type = Array<br>
Each element in the array is a single octave note (You can say it is a stripped down version of ‘notes’ array). If the request fails, returns an empty array [].</p>
</li>
<li>
<p>success: Type = Number<br>
Is equal to 0 if the request fails and 1 for vice versa.</p>
</li>
<li>
<p>notes: Type = Array<br>
Each element is a string of Octave notes and each string corresponds to its lyric line.</p>
</li>
</ul>
</div>
</body>

</html>
