import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;

`
const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftIcon />
      </Arrow>
      <Arrow>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  )
}

export default Slider