# Music Timeline
A timeline of all the music I've loved over the years. Data persistence is had in the form of an Airtable.

Available [live on the internets](http://music-timeline.s3.amazonaws.com/index.html).

## Installation
This should do the trick:
```
$ npm i
```

## Running
Make sure there's a configuration file located at `src/config.json`. It should have two keys in it:
```
{
  "MUSIC_TIMELINE_AIRTABLE_API_KEY": <api_key_here>,
  "MUSIC_TIMELINE_AIRTABLE_BASE_ID": <base_id_here>
}
```
Then run it:
```
$ npm start
```