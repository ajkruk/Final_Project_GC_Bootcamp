import './LoginPage.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useState } from 'react';
import { 
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";// First Add useNavigate



function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate(); // Second create function

  const handleSubmit = (): void => {
    console.log("login button tapped");
    auth.signInWithEmail(email, password); // this already navigates to the main page after login
  }
  
  return (
    <MDBContainer fluid className='p-4 login-container'>
      <MDBRow>
        <MDBRow md='6' className='d-flex justify-content-center mb-10'>
          <div className='d-flex justify-content-center align-items-center'>
            <MDBCard className='my-5'>
            <MDBCardBody className='p-5 off-white'>
            <MDBRow md='6' className='text-center text-md-start d-flex flex-column'>
                <h2 className="my-5 display-4 ls-tight" style={{ fontSize: '45px', padding: '5px', textAlign: 'center' }}>
                  The Next Chapter<br />
                </h2>
                <h1 className="login-slogan">
                  <span className="slogan" style={{ fontSize: '25px', font: '' }}>
                    where old stories find new beginnings
                  </span>
                </h1>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' onChange={(event) => setEmail(event.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' onChange={(event) => {setPassword(event.target.value)}}/>
              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>
              <MDBBtn className='w-100 mb-4' type="button" size='lg' onClick={handleSubmit} style={{ backgroundColor: '#608362' }} >
                Log In
              </MDBBtn>
              <Link to="SignUp">
                <MDBBtn className='w-100 mb-4' size='lg' onClick={() => navigate("/NewUserForm")} style={{ backgroundColor: '#608362' }} >
                  Sign Up
                </MDBBtn>
              </Link>
              <div className="text-center">
              <p>or sign up with:</p>
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }} onClick={auth.signInWithGoogle}>
                <img src="./src/images/google-logo.jpg" alt="Google Logo" style={{ width: '24px', height: '24px' }} />
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <img src="./src/images/github-logo.jpg" alt="Github Logo" style={{ width: '24px', height: '24px' }} />
              </MDBBtn>
              </div>
            </MDBCardBody>
            </MDBCard>
          </div>
        </MDBRow>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;
