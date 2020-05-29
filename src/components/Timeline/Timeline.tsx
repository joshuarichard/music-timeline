import React from 'react';
import { Contain, Left, Right } from './components';
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
        <Left/>
        <Right>
          <AlbumList albums={albums}/>
        </Right>
      </Contain>
    );
  }
};

export default Timeline;