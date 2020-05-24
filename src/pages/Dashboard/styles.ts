import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  background: #28262e;
  padding: 32px 0;
`;

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1120px;

  > img {
    height: 80px;
  }

  button {
    background: transparent;
    border: 0;
    margin-left: auto;

    svg {
      color: #999591;
      height: 20px;
      width: 20px;
    }
  }
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
  margin-left: 80px;

  img {
    border-radius: 50%;
    height: 56px;
    width: 56px;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    margin-left: 16px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`;
