import './LoginPage.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { ChangeEvent, useState } from 'react';
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

  const handleSubmit = (): void => {
    console.log("login button tapped")
    auth.signInWithEmail(email, password)
  }

  const handleEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  }

  const handlePassword = (event: ChangeEvent<HTMLInputElement>): void  => {
    setPassword(event.target.value);
  }

  const navigate = useNavigate(); // Second create function

  const linkToSignUp = () => { // Third create function navigate
    navigate('/SignUp')
  }


  return (
    <MDBContainer fluid className='p-4 login-container' >

      <MDBRow style={{  }}>
        

        <MDBRow md='6' className='d-flex justify-content-center mb-10' style={{  }}>

        <div className='d-flex justify-content-center align-items-center' style={{  }}>
          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
            <MDBRow md='6' className='text-center text-md-start d-flex flex-column'>
                <h2 className="my-5 display-4 fw-bold ls-tight px-3" style={{ fontSize: '45px', padding: '5px' }}>The Next Chapter<br />
                </h2>
                <h1 className="login-slogan">
                <span className="text-light-brown" style={{ fontSize: '25px', padding: '30px', marginTop: '30px', font: '' }}>where stories find new beginnings</span>
                </h1>

              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' onChange={handleEmail} />
              <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' onChange={handlePassword}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' type="button" size='lg' onClick={() => {
                handleSubmit;
                linkToSignUp;
              }} style={{ backgroundColor: '#608362' }} >Log In</MDBBtn>
              <Link to="SignUp"><MDBBtn className='w-100 mb-4' size='lg' style={{ backgroundColor: '#608362' }} >Sign Up</MDBBtn>
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
