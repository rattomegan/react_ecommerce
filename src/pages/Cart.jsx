import styled from 'styled-components';
import Announcements from '../components/Announcements';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300px;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopTexts = styled.div``;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600px;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? '#333' : 'transparent'};
  color: ${props => props.type === 'filled' && '#fff'};
`;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText >Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail></ProductDetail>
              <PriceDetail></PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart