import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const Title = styled.h2`
  font-size: 36px;
  color: white;
  margin: 20px 0;
  text-transform: uppercase;
`

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Img src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>

    </Container>
  )
}

export default CategoryItem