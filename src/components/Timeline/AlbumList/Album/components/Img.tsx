import styled from 'styled-components';

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

export { Img, ImgHref, ImgMeta };
