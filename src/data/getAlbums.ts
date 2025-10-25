import Airtable from 'airtable';

import { Album } from '../types/Album';
import * as config from '../config.json';

const { MUSIC_TIMELINE_AIRTABLE_PERSONAL_ACCESS_TOKEN, MUSIC_TIMELINE_AIRTABLE_BASE_ID } = config;

const base = new Airtable({
  apiKey: MUSIC_TIMELINE_AIRTABLE_PERSONAL_ACCESS_TOKEN,
}).base(MUSIC_TIMELINE_AIRTABLE_BASE_ID || '');

const getAlbums = () => {
  return base('albums')
    .select({
      maxRecords: 1000,
      view: 'Grid view',
    })
    .all()
    .then((records) => {
      return records.map((r) => r.fields as Album);
    });
};

export default getAlbums;
