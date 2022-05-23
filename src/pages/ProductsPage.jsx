import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div`
`;

const Title = styled.h1`
  margin: 20px;
` ;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 5px 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductsPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Cacti</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>All Plants</Option>
            <Option>Monstera</Option>
            <Option>Cactus</Option>
            <Option>Rubber Tree</Option>
            <Option>Other</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option>Name</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductsPage;