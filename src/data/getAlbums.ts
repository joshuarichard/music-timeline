import Airtable from 'airtable';
import AlbumType from '../types/Album';

const {
  MUSIC_TIMELINE_AIRTABLE_API_KEY,
  MUSIC_TIMELINE_AIRTABLE_BASE_ID,
} = process.env;

console.log(process.env);

const base = new Airtable({
  apiKey: MUSIC_TIMELINE_AIRTABLE_API_KEY
}).base(MUSIC_TIMELINE_AIRTABLE_BASE_ID || '');

const getAlbums = () => {
  return base('albums').select({
    maxRecords: 50,
    view: "Grid view"
  }).all().then(records => {
    return records.map(r => r.fields as AlbumType);
  });
}

export default getAlbums;