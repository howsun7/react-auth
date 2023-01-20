import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HomePage = (props) => {
  return (
    <div>
      <Row>
        <Col><h1>Account Management HomePage</h1></Col>
      </Row>
      
      <div className='mt-3'>
        {
          props.token
          ? 
          <Link to="/dashboard">View your account</Link>
          :
          <Link to="/login">Login</Link>
        }      
      </div>
    
    </div>
  )
};

export default HomePage;