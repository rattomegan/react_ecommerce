import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: beige;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcements = () => {
  return (
    <Container>Free Shipping on orders over $50!</Container>
  )
}

export default Announcements