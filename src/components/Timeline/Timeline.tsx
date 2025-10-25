import React from 'react';
import styled from 'styled-components';

import AlbumList from './AlbumList';
import { Album } from '../../types';

type Props = {
  albums: Album[];
};

const Contain = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex-grow: 5;
  width: 100%;
  padding: 0.8em 1.2em;
  overflow: hidden;
  list-style: none;
`;

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
