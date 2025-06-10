import Airtable from 'airtable';
import { Artist } from '../types/Artist';
import * as config from '../config.json';

const { MUSIC_TIMELINE_AIRTABLE_PERSONAL_ACCESS_TOKEN, MUSIC_TIMELINE_AIRTABLE_BASE_ID } = config;

const base = new Airtable({
  apiKey: MUSIC_TIMELINE_AIRTABLE_PERSONAL_ACCESS_TOKEN,
}).base(MUSIC_TIMELINE_AIRTABLE_BASE_ID || '');

const getArtists = () => {
  return base('artists')
    .select({
      maxRecords: 1000,
      view: 'Grid view',
    })
    .all()
    .then((records) =>
      records.map(
        (r) =>
          ({
            id: r.id,
            ...r.fields,
          } as Artist),
      ),
    );
};

export default getArtists;
