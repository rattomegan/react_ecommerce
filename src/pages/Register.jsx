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
  width: 40%;
  padding: 20px;
  background-color: white;
`
const Title = styled.h1 `
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form `
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input `
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px; 
`
const Agreement = styled.span `
  font-size: 12px;
  margin: 20px 0px;
  text-transform: uppercase;
`
const Button = styled.button `
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  return (
  <Container>
    <Wrapper>
      <Title>Create An Account</Title>
      <Form>
        <Input placeholder="name" />
        <Input placeholder="last name" />
        <Input placeholder="email" />
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Input placeholder="confirm password" />
        <Agreement>
          By creating an account, I consent to the processing of my personal data in accordance with the <b>privacy policy</b>
        </Agreement>
        <Button>Create</Button>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Register