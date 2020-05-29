import React from 'react';
import styled from 'styled-components';
import Album from './Album';
import AlbumType from '../../../types/Album';

type Props = {
  year: string;
  albums: AlbumType[];
};

class AlbumBlock extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const Contain = styled.div`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
      padding-top: 1rem;
      /* background-color: ${parseInt(this.props.year) % 2 === 0 ? 'red' : 'blue'} */
    `;

    const AlbumContain = styled.div`
      display: flex;
      flex-grow: 2;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
    `;

    const Year = styled.div`
      width: 10rem;
      margin: 0 0 3em 0;
      padding: 0;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    `;

    const { year, albums } = this.props;

    return (
      <Contain>
        <Year>{year}</Year>
        <AlbumContain>
          {albums.map((a, i) => <Album key={i} album={a}/>)}
        </AlbumContain>
      </Contain>
    );
  }

};

export default AlbumBlock;