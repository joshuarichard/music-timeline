import React from 'react';
import styled from 'styled-components';
import Album from '../Album';
import { Album as AlbumType, Artist as ArtistType } from '../../../../types';

type Props = {
  year: string;
  albums: AlbumType[];
  artists: ArtistType[];
};

const Contain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding-top: 1rem;
`;

const Year = styled.div`
  width: 10rem;
  flex-shrink: 0;
  margin: 1rem 0 3em 0;
  padding: 0;
  align-items: center;
  justify-content: center;
`;

const AlbumContain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

class AlbumBlock extends React.Component<Props, {}> {

  render() {
    const { year, albums, artists } = this.props;

    return (
      <Contain>
        <Year>{year}</Year>
        <AlbumContain>
          {albums.map((a, i) => <Album key={i} album={a} artists={artists}/>)}
        </AlbumContain>
      </Contain>
    );
  }

};

export default AlbumBlock;