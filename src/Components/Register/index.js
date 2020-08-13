import React,{useState} from 'react';
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display:form;
  flex-direction: column;

`


const Input = styled.input`
width:82%;
margin:5px; auto;
height:40px;
margin-left:13%;
`
const Button = styled.button`
width:83.5%;
background-color:#062944;
height:30px;
margin-left:13%;
color:white;

font-size:1em;
outline:none;
`
const Text = styled.div`
  margin-left: 13%;
  text-transform:uppercase;
`
const Account = styled.div`
  color:#062944;
  font-size:1.5em;
  letter-spacing:2px;
  border-bottom: 1px solid #062944;
  width: 50%;
  margin:0 auto;
  text-align:center;
  padding:5px;
  margin-bottom:10px;
`




const Register =()=>{
  const [formState,setFormState] = useState({firstN:'',lastN:'',email:'',password:''})

  const handleChange =(e)=>{
    const {name,value} = e.target
    setFormState({...formState,[name]:value})
    console.log(formState)
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('submitted')
  }
  return(
    <Container>
      <form onSubmit={(e)=> handleSubmit(e)} style={{width:'100%'}}>
      <Account>Register Account</Account>
        <div>
          <label>
            <Text>First name</Text>
            <Input type="text" name="firstN" value={formState.firstN} onChange={(e)=>handleChange(e)}/>
          </label>
        </div>

        <div>
          <label>
            <Text>Last name</Text>
            <Input type="text" name="lastN" value={formState.lastN} onChange={(e)=>handleChange(e)}/>
          </label>
        </div>

        <div>
          <label>
            <Text>Email</Text>
            <Input type="email" name='email' value={formState.email} onChange={(e)=>handleChange(e)}/>
          </label>
        </div>

        <div>
          <label>
            <Text>Password</Text>
            <Input type="password" name='password' value={formState.password} onChange={(e)=>handleChange(e)}/>
          </label>
        </div>
        <Button type="Submit" >Register</Button>
      </form>
    </Container>
  )
}

export default Register
