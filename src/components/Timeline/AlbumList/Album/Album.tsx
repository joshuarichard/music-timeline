import React from 'react';
import {
  Contain,
  Img,
  ImgHref,
  ImgMeta,
  AlbumOverlay,
  ArtistOverlay,
  YearOverlay,
} from './components';
import { Album as AlbumType, Artist } from '../../../../types';

type Props = {
  album: AlbumType;
  artists: Artist[];
};

class Album extends React.Component<Props> {
  
  render() {
    const { album, artists } = this.props;
    const artistId = album.artist[0];

    return (
      <Contain>
        <ImgHref href={album.url}>
          <Img src={album.img} alt={album.name}/>
          <ImgMeta>
            <AlbumOverlay>{album.name}</AlbumOverlay>
            <ArtistOverlay>
              {
                artists.find((artist) => artist.id === artistId)?.name
              }
            </ArtistOverlay>
            {
              (album.year !== album.year_released)
                ? <YearOverlay>Released {album.year_released}</YearOverlay>
                : null
            }
          </ImgMeta>
        </ImgHref>
      </Contain>
    );
  }
};

export default Album;