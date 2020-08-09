import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width:80%;
    margin:0 auto;
    position:relative;
`



const Input = styled.input`

  width:100%;
  padding:10px;
  border:1px solid #e0e2e8;
  border-radius:3px;
  margin:1em;
  outline:none;
  font-size:1em;
  box-shadow: ${props=> props.state ? '0px 1px 5px rgba(0,0,0,0.2)': '0'};

`
const Button = styled.button`
  position:absolute;
  border:none;
  background-color:white;
  font-size:1.6em;
  top:25%;
  left:-8%;
  outline:none;
`




const SearchForm = ()=>{
  const [searchState,setSearchState] = useState({search:''})
  const [state,setState] = useState(false)
  const node = useRef();

  const handleChange = (e)=>{
    const {name,value} = e.target
    setSearchState({[name]:value})

  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('submitted')
  }
  const handleClick =(e)=>{
    if(node.current.contains(e.target)){
      setState(true)
    }else{
      setState(false)
    }
  }

  useEffect(()=>{
    document.addEventListener("mousedown",handleClick);

    return()=>{
      document.removeEventListener("mousedown", handleClick)
    }
  },[])

  return(
    <Container>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label>
          <Input type='text' state={state} ref={node} name='search' value={searchState.search} placeholder="SEARCH"  onChange={(e)=>{handleChange(e)}}></Input>
        </label>

        <Button type='submit'><i className="fa fa-search"></i></Button>
      </form>
    </Container>
  )
}

export default SearchForm
