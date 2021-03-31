import React from 'react';
import { Contain } from './components';
import AlbumBlock from './AlbumBlock';
import { Album } from '../../../types';

type Props = {
  albums: Album[];
};

class AlbumList extends React.Component<Props, {}> {
  render() {
    const { albums } = this.props;

    /**
     * uniq(arr)
     * dedupe arrays
     *
     * @param arr: string[]
     * @returns arr: string[]
     */
    const uniq = (arr: string[]) => arr.filter((a, i) => arr.indexOf(a) === i);

    /**
     * Build an object of all albums grouped by year in the form:
     * {
     *   [year: string]: Album[];
     * }
     */
    // first, get all uniq years
    const years = uniq(albums.map((a) => a.year));

    // then, reduce those years into the object in question
    const albumsByYear = years.reduce((acc: { [key: string]: Album[] }, cur: string) => {
      acc[cur] = albums.filter((a) => a.year === cur);
      return acc;
    }, {});

    // finally, sort those years in descending order
    const yearsSorted = Object.keys(albumsByYear).sort((a, b) => parseInt(b) - parseInt(a));

    console.log(yearsSorted);

    return (
      <Contain>
        {yearsSorted.map((year, index) => (
          <AlbumBlock key={index} year={year} albums={albumsByYear[year]} />
        ))}
      </Contain>
    );
  }
}

export default AlbumList;
