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
import AlbumType from '../../../../types/Album';

class Album extends React.Component<{album: AlbumType}> {
  
  render() {
    const { album } = this.props;

    return (
      <Contain>
        <ImgHref href={album.url}>
          <Img src={album.img} alt={album.name}/>
          <ImgMeta>
            <AlbumOverlay>{album.name}</AlbumOverlay>
            <ArtistOverlay>{album.artist}</ArtistOverlay>
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