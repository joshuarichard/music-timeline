import React from 'react';
import { Contain, Column } from './components';
import AlbumList from './AlbumList';
import { Album, Artist } from '../../types';

type Props = {
  albums: Album[]
  artists: Artist[]
};

class Timeline extends React.Component<Props, {}> {

  render() {
    const { albums, artists } = this.props;

    return (
      <Contain>
        <Column>
          <AlbumList albums={albums} artists={artists}/>
        </Column>
      </Contain>
    );
  }
};

export default Timeline;