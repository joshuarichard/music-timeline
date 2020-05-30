import Airtable from "airtable";
import AlbumType from "../types/Album";
import * as config from "../config.json";

const MUSIC_TIMELINE_AIRTABLE_API_KEY = config.MUSIC_TIMELINE_AIRTABLE_API_KEY;
const MUSIC_TIMELINE_AIRTABLE_BASE_ID = config.MUSIC_TIMELINE_AIRTABLE_BASE_ID;

const base = new Airtable({
  apiKey: MUSIC_TIMELINE_AIRTABLE_API_KEY,
}).base(MUSIC_TIMELINE_AIRTABLE_BASE_ID || "");

const getAlbums = () => {
  return base("albums")
    .select({
      maxRecords: 200,
      view: "Grid view",
    })
    .all()
    .then((records) => {
      return records.map((r) => r.fields as AlbumType);
    });
};

export default getAlbums;
