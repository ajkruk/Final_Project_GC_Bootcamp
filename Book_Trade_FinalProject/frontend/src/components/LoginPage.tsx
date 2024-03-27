import './LoginPage.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
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


type LoginPageProps = {
  onLogin: () => void;
};

function LoginPage({ onLogin }: LoginPageProps) {
  const handleLogin = () => {
    // We have to put our code in here for the login logic.
    onLogin();
  };

  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column'>
          <h1 className="my-5 display-4 fw-bold ls-tight px-3">
            The Next Chapter, <br />
            <span className="text-light-brown">where books keep turning pages</span>
          </h1>
          <img src="./src/images/books.jpg" className="img-fluid" alt="books image" style={{ borderRadius: '45px', paddingTop: '20px' }} />

        </MDBCol>

        <MDBCol md='6' className='d-flex justify-content-center mb-10' style={{ height: '100vh' }}>

        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' />
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='lg' style={{ backgroundColor: '#543F32' }} onClick={handleLogin}>Sign In</MDBBtn>

              <MDBBtn className='w-100 mb-4' size='lg' style={{ backgroundColor: '#543F32' }} onClick={handleLogin}>Create Account</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>


                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }} onClick={() => { /* your function logic */ }}>
                  <img src="./src/images/google-logo.jpg" alt="Google Logo" style={{ width: '24px', height: '24px' }} />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <img src="./src/images/github-logo.jpg" alt="Github Logo" style={{ width: '24px', height: '24px' }} />
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginPage;
