# scrAPI
REST API implementation for scraping and returning Lyrics and Octave Notes for the queried song from https://www.pianodaddy.com using Express and Node.js!

Endpoint: https://ly8api.herokuapp.com/{song-name}  
    > Returns a JSON object {filteredLyrics, noteChangePoints, seperatedNotes, success, notes}\
        > filteredLyrics: Type = Array\
            Each element is a single lyric line of that queried song. If the request fails, returns an
            empty array [].\
        > noteChangePoints: Type = Array\
            '/' in a string indicates occurence of a syllable. To be used in future for a special feauture on Lyctave. If the request fails, returns an empty array [].\
        > seperatedNotes: Type = Array\
            Each element in the array is a single octave note (You can say it is a stripped down version of 'notes' array). If the request fails, returns an empty array [].\
        > success: Type = Number\
            Is equal to 0 if the request fails and 1 for vice versa.\
        > notes: Type = Array\
            Each element is a string of Octave notes and each string corresponds to its lyric line.\


