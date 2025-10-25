import React from 'react';
import styled from 'styled-components';

import { Album as AlbumType } from '../../../../types';

const Contain = styled.div`
  position: relative;
  transition: 0.5s all ease-in;
  height: 10rem;
  width: 10rem;
  margin-right: 1rem;
  margin-top: 1rem;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const ImgHref = styled.a`
  color: white;
`;

const ImgMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  color: rgba(0, 0, 0, 0);
  transition: 0.25s;

  a:hover & {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const AlbumOverlay = styled.div`
  font-weight: bold;
  font-size: small;
  margin-left: 0.2em;
  margin-right: 0.2em;
`;

const ArtistOverlay = styled.div`
  font-size: small;
  margin-left: 0.2em;
  margin-right: 0.2em;
`;

const YearOverlay = styled.div`
  font-size: small;
`;

class Album extends React.Component<{ album: AlbumType }> {
  render() {
    const { album } = this.props;

    return (
      <Contain>
        <ImgHref href={album.url}>
          <Img src={album.img} alt={album.name} />
          <ImgMeta>
            <AlbumOverlay>{album.name}</AlbumOverlay>
            <ArtistOverlay>{album.artist}</ArtistOverlay>
            {album.year !== album.year_released ? (
              <YearOverlay>Released {album.year_released}</YearOverlay>
            ) : null}
          </ImgMeta>
        </ImgHref>
      </Contain>
    );
  }
}

export default Album;
