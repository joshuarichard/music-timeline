import React from 'react';
import { Contain } from './components';
import utils from '../../../utils';
import AlbumBlock from './AlbumBlock';
import { Album, Artist } from '../../../types';

const { uniq } = utils.array;

type Props = {
  albums: Album[];
  artists: Artist[];
};

class AlbumList extends React.Component<Props, {}> {

  render() {
    const { albums, artists } = this.props;

    /**
     * Build an object of all albums grouped by year in the form:
     * {
     *   [year: string]: AlbumType[];
     * }
     */
    // first, get all uniq years
    const years = uniq(albums.map(a => a.year));

    // then, reduce those years into the object in question
    const albumsByYear = years.reduce((acc: {
      [key: string]: Album[];
    }, cur: string) => {
      acc[cur] = albums.filter(a => a.year === cur);
      return acc;
    }, {});

    // finally, sort those years in descending order
    const yearsSorted = Object.keys(albumsByYear).sort((a, b) => (parseInt(b) - parseInt(a)));

    return (
      <Contain>
        {
          yearsSorted.map((year, index) => (
            <AlbumBlock
              key={index}
              year={year}
              artists={artists}
              albums={albumsByYear[year]}
            />
          ))
        }
      </Contain>
    );
  }

};

export default AlbumList;