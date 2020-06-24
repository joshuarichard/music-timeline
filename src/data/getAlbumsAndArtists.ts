import Airtable from "airtable";
import { Artist, Album } from "../types";
import * as config from "../config.json";

const MUSIC_TIMELINE_AIRTABLE_API_KEY = config.MUSIC_TIMELINE_AIRTABLE_API_KEY;
const MUSIC_TIMELINE_AIRTABLE_BASE_ID = config.MUSIC_TIMELINE_AIRTABLE_BASE_ID;

const base = new Airtable({
  apiKey: MUSIC_TIMELINE_AIRTABLE_API_KEY,
}).base(MUSIC_TIMELINE_AIRTABLE_BASE_ID || "");

const getAlbumsAndArtists = async () => {
  const albums = await base("albums")
    .select({
      maxRecords: 200,
      view: "Grid view",
    })
    .all()
    .then((records) => {
      return records.map((r) => ({
        id: r.id,
        ...r.fields,
      }) as Album);
    });

  const artists = await base("artists")
    .select({
      maxRecords: 200,
      view: "Grid view",
    })
    .all()
    .then((records) => {
      return records.map((r) => ({
        id: r.id,
        ...r.fields,
      }) as Artist);
    });

  return {
    albums,
    artists,
  };
};

export default getAlbumsAndArtists;
