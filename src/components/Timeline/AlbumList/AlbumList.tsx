import React from 'react';
import styled from 'styled-components';
import AlbumBlock from './AlbumBlock';
import AlbumType from '../../../types/Album';

type Props = {
  albums: AlbumType[]
};

class AlbumList extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const Contain = styled.div`
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    `;

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
     *   [year: string]: AlbumType[];
     * }
     */
    const years = uniq(albums.map(a => a.year));
    const albumsByYear = years.reduce((acc: {
      [key: string]: AlbumType[];
    }, cur: string) => {
      acc[cur] = albums.filter(a => a.year === cur);
      return acc;
    }, {});

    const yearsSorted = Object.keys(albumsByYear).sort((a, b) => (parseInt(b) - parseInt(a)));

    return (
      <Contain>
        {
          yearsSorted.map((year, index) => (
            <AlbumBlock
              key={index}
              year={year}
              albums={albumsByYear[year]}
            />
          ))
        }
      </Contain>
    );
  }

};

export default AlbumList;