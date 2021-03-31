import React from 'react';
import { Contain, Column } from './components';
import AlbumList from './AlbumList';
import { Album } from '../../types';

type Props = {
  albums: Album[];
};

class Timeline extends React.Component<Props, {}> {
  render() {
    const { albums } = this.props;

    return (
      <Contain>
        <Column>
          <AlbumList albums={albums} />
        </Column>
      </Contain>
    );
  }
}

export default Timeline;
