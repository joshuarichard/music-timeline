import styled from 'styled-components';

// background-color: ${parseInt(this.props.year) % 2 === 0 ? 'red' : 'blue'}
const Contain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding-top: 1rem;
`;

export default Contain;