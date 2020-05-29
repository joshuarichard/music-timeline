import React from 'react';
import styled from 'styled-components';
import AlbumType from '../../../types/Album';

class Album extends React.Component<{album: AlbumType}> {
  
  render() {

    const { album } = this.props;

    const Contain = styled.div`
      position: relative;
      transition: .5s all ease-in;
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
      display: none;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: rgba(0, 0, 0, .3);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      flex-direction: column;

      ${Contain}:hover & {
        display: flex !important;
      }
    `;

    const Album = styled.div`
      font-weight: bold;
      font-size: small;
    `;

    const Artist = styled.div`
      font-size: small;
    `;
    
    const Year = styled.div`
      font-size: small;
    `;

    return (
      <Contain>
        <ImgHref href={album.url}>
          <Img src={album.img} alt={album.name}/>
          <ImgMeta>
            <Album>{album.name}</Album>
            <Artist>{album.artist}</Artist>
            {(album.year !== album.year_released) ? <Year>Released {album.year_released}</Year> : null}
          </ImgMeta>
        </ImgHref>
      </Contain>
    );
  }
};

export default Album;