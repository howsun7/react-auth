import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const LoginPage = ({token, setToken}) => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = event => {
    const targetName = event.target.name;
    const targetVal = event.target.value;
    setInputs(values => ({...values, [targetName]: targetVal}));
  };

  const handleSubmit = event => {
    // post login to server
    event.preventDefault();
    console.log(setToken);
    console.log(token);
    axios
      .post('http://localhost:3050/api/login', inputs)
      .then(res => {        
        setToken(res.data.jwtToken);
      })
      .catch(err => {
        console.log(err);
      });

  };

  if (token) {
    navigate("/dashboard");    
  }

  return (
    <div className='mt-3'>
      <h1 className='text-center'>Login</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter email" name="username" value={inputs.username || ''} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={inputs.password || ''} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default LoginPage;