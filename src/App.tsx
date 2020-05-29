import React from 'react';
import styled from 'styled-components';
import './App.css';

import { Timeline } from './components';
import AlbumType from './types/Album';

import getAlbums from './data/getAlbums';

type Props = {};

type State = {
  albums: AlbumType[]
};

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { albums: [] };
  }

  async componentWillMount() {
    const albums = await getAlbums();
    this.setState({ albums });
  }

  render() {
    const Contain = styled.div`
      background-color: #2c2c2e;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      font-size: calc(10px + 2vmin);
      color: white;
    `;

    const { albums } = this.state;

    return (
      <Contain>
        <Timeline albums={albums}/>
      </Contain>
    );
  }
}

export default App;
