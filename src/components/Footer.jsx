import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h3`
  
`;

const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
  
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Plant House</Logo>

        <Description>Plant shop</Description>

        <SocialContainer>
          <SocialIcon color='3b5999'>
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon color='e4405f'>
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon color='55acee'>
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon color='e60023'>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Cacti</ListItem>
          <ListItem>Rubber Trees</ListItem>
          <ListItem>Monsteras</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem><RoomOutlinedIcon />New York, New York</ContactItem>
        <ContactItem><LocalPhoneOutlinedIcon />555 555 555</ContactItem>
        <ContactItem><EmailOutlinedIcon />contact@planthouse.com</ContactItem>

      </Right>

    </Container>
  )
}

export default Footer