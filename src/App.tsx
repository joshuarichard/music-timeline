import React from 'react';
import styled from 'styled-components';
import { Timeline } from './components';
import { Album } from './types';
import { getAlbums } from './data';
import getArtists from './data/getArtists';

type Props = {};

type State = {
  albums: Album[];
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  async componentWillMount() {
    const artists = await getArtists();
    const albums = (await getAlbums()).map((album) => ({
      ...album,
      // eslint-disable-next-line
      artist: artists.find((a) => a.id == album.artist)?.name,
    }));
    this.setState({ albums });
  }

  render() {
    const Contain = styled.div`
      background-color: white;
      min-height: 100%;
      display: flex;
      margin-left: 6em;
      margin-right: 6em;
      flex-direction: column;
      font-size: calc(10px + 2vmin);
      color: black;
    `;

    const { albums } = this.state;

    return (
      <Contain>
        <Timeline albums={albums} />
      </Contain>
    );
  }
}

export default App;
