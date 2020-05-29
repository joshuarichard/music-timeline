import React from 'react';
import { Contain, AlbumContain, Year } from './components';
import Album from '../Album';
import AlbumType from '../../../../types/Album';

type Props = {
  year: string;
  albums: AlbumType[];
};

class AlbumBlock extends React.Component<Props, {}> {

  render() {
    const { year, albums } = this.props;

    return (
      <Contain>
        <Year>{year}</Year>
        <AlbumContain>
          {albums.map((a, i) => <Album key={i} album={a}/>)}
        </AlbumContain>
      </Contain>
    );
  }

};

export default AlbumBlock;