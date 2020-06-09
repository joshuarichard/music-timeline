import React from 'react';
import { Contain, Column } from './components';
import AlbumList from './AlbumList';
import AlbumType from '../../types/Album';

type Props = {
  albums: AlbumType[]
};

class Timeline extends React.Component<Props, {}> {

  render() {
    const { albums } = this.props;

    return (
      <Contain>
        <Column>
          <AlbumList albums={albums}/>
        </Column>
      </Contain>
    );
  }
};

export default Timeline;