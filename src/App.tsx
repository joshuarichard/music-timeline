import React from 'react';
import styled from 'styled-components';
import { Timeline } from './components';
import AlbumType from './types/Album';
import { getAlbums } from './data';

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
        <Timeline albums={albums}/>
      </Contain>
    );
  }
}

export default App;
