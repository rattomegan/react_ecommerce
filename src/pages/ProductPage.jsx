import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;

`;

const Img = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
 font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-size: 32px;
`;

const AddContainer = styled.div`
  margin-top: 20px;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
`;
const Amount = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 15px 30px;
  border: 1px solid tan;
  border-radius: 2px;
  background-color: tan;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;


const ProductPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />

      <Wrapper>
        <ImgContainer>
          <Img src='https://images.unsplash.com/photo-1557090495-fc9312e77b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
        </ImgContainer>

        <InfoContainer>
          <Title>Rubber Tree</Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores vitae, sequi id earum, nisi iure dicta tenetur cupiditate totam, voluptas ut minima illum! Maiores corporis unde temporibus, eos a harum.</Description>
          <Price>$10</Price>

          <AddContainer>
            <AmountContainer>

              <RemoveOutlinedIcon />
              <Amount>1</Amount>
              <AddOutlinedIcon />

            </AmountContainer>

            <Button>Add to Cart</Button>

          </AddContainer>
        </InfoContainer>


      </Wrapper>
      <Footer />
    </Container>
  )
}

export default ProductPage
