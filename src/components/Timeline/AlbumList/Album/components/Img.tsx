import styled from 'styled-components';
import Contain from './Contain';

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
  text-align: center;
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

export {
  Img,
  ImgHref,
  ImgMeta,
};