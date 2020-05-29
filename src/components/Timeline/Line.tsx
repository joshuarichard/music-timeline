import React from 'react';
import styled from 'styled-components';

const Contain = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-right: 2px solid white;
`;

const Line = () => {
  return (
    <Contain/>
  );
};

export default Line;