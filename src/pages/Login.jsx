import styled from 'styled-components'

const Container = styled.div `
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(225, 225, 225, 0.5), rgba(225,225,225, 0.5)), url('https://images.unsplash.com/photo-1508013861974-9f6347163ebe?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176');
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;

  align-items: center;
  justify-content: center; 
`
const Wrapper = styled.div `
  width: 25%;
  padding: 20px;
  background-color: white;
`
const Title = styled.h1 `
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form `
  display: flex;
  flex-direction: column;
`

const Input = styled.input `
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px; 
`
const Button = styled.button `
  width: 40%;
  border: none;
  margin: 10px 0px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  color: #333;
  text-transform: uppercase;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>Sign In</Title>
      <Form>
        <Input placeholder="username" />
        <Input placeholder="password" />
      
        <Button>Login</Button>
        <Link>Forgot your password?</Link>
        <Link>Create a new account</Link>
      </Form>
    </Wrapper>
  </Container>
    
  )
}

export default Login