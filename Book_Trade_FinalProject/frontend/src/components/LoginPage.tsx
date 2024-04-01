import './LoginPage.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { ChangeEvent, useState } from 'react';
import { 
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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

  return (
    <MDBContainer fluid className='p-4 login-container' >

      <MDBRow style={{  }}>
        

        <MDBRow md='6' className='d-flex justify-content-center mb-10' style={{  }}>

        <div className='d-flex justify-content-center align-items-center' style={{  }}>
          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' />
                </MDBCol>
              </MDBRow> */}

              <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' onChange={handleEmail} />
              <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' onChange={handlePassword}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='lg' style={{ backgroundColor: '#608362' }} >Log In</MDBBtn>
              <MDBBtn className='w-100 mb-4' size='lg' style={{ backgroundColor: '#608362' }} >Sign Up</MDBBtn>

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
