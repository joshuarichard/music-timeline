import React from 'react';
import styled from 'styled-components';
import { Timeline } from './components';
import { Artist, Album } from './types';
import { getAlbumsAndArtists } from './data';
import RobotoThin from './fonts/Roboto/Roboto-Thin.ttf';
import RobotoRegular from './fonts/Roboto/Roboto-Regular.ttf';

type Props = {};

type State = {
  albums: Album[],
  artists: Artist[],
};

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { albums: [], artists: [] };
  }

  async componentWillMount() {
    const data = await getAlbumsAndArtists();
    this.setState({
      albums: data.albums,
      artists: data.artists,
    });
  }

  render() {
    const Contain = styled.div`
      min-height: 100%;
      display: flex;
      margin-left: 1em;
      margin-right: 1em;
      flex-direction: column;
      font-size: calc(10px + 2vmin);
      color: black;

      @font-face {
        font-family: RobotoThin;
        src: url(${RobotoThin});
      }

      @font-face {
        font-family: RobotoRegular;
        src: url(${RobotoRegular});
      }

      font-family: RobotoThin;
    `;

    const Footer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1em;
    `;

    const FooterFooter = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1em;
      font-size: small;
    `;

    const Link = styled.a`
      color: black;

      :link, :visited, :active, :visited:hover {
        color: black !important;
        text-decoration: none;
      }

      :hover {
        text-decoration: overline;
      }
    `;

    const { albums, artists } = this.state;

    return (
      <Contain>
        <Timeline albums={albums} artists={artists}/>
        <Footer>
          <Link href="http://joshuarichard.co">joshuarichard.co</Link>
          <FooterFooter>
            the data lives
            <Link href="https://airtable.com/shrw9SwbhTeqzBi4T">
              &nbsp;here&nbsp;
            </Link>
            and the source code lives
            <Link href="https://github.com/joshuarichard/music-timeline">
              &nbsp;here.
            </Link>
          </FooterFooter>
        </Footer>
      </Contain>
    );
  }
}

export default App;
