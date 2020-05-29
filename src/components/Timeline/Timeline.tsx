import React from 'react';
import styled from 'styled-components';
import Line from './Line';
import AlbumList from './AlbumList';
import AlbumType from '../../types/Album';

type Props = {
  albums: AlbumType[]
};

class Timeline extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  async componentWillMount () {}

  render() {
    const Contain = styled.div`
      min-height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: stretch;
    `;

    const Left = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-grow: 1;
      overflow: hidden;
      list-style: none;
      background-color: black;
    `;

    const Right = styled.div`
      flex-grow: 5;
      width: 100%;
      padding: 0.8em 1.2em;
      overflow: hidden;
      list-style: none;
    `;

    const { albums } = this.props;

    return (
      <Contain>
        <Left/>
        <Right>
          <AlbumList albums={albums}/>
        </Right>
      </Contain>
    );
  }
};

export default Timeline;