import { GoogleAuthProvider } from '@firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Register = () => {

    const {providerLogin,emailRegister } = useContext(AuthContext)

const googleProvider = new GoogleAuthProvider()



    const googleSignIn =()=>{
        providerLogin(googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))

    }

const handelRegister=(event)=>{

    event.preventDefault()
    const form = event.target;
    const email = form.email.value
    const password = form.password.value



    emailRegister(email,password)
    .then((result)=>{
        const user = result.user;
        console.log(user)
        form.reset()
    })
    .catch(error=>console.error(error))
}


    return (
        <div className=''>
         <section className="vh-100 " style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: '25px'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4"  onSubmit={handelRegister}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="name" name='name' id="form3Example1c" className="form-control" placeholder='Your Name' />
                     
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email"  name='email' id="form3Example3c" className="form-control" placeholder='Your Email'/>
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name='photoURL' id="form3Example3c" className="form-control" placeholder='Your Photo URL'/>
                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name='password' id="form3Example4c" className="form-control" placeholder='Your Password'/>
                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name='repeatPassword' id="form3Example4cd" className="form-control" placeholder='Repeat Your Password'/>
                     
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <Link to={'/'}>Terms of service</Link>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign up with:</p>
            <button onClick={googleSignIn} type="button" className="btn btn-secondary btn-floating mx-2   rounded-circle">
              <FaGoogle></FaGoogle>
            </button>

            <button type="button" className="btn btn-secondary btn-floating mx-2 rounded-circle">
              <FaGithub></FaGithub>
            </button>

            <button type="button" className="btn btn-secondary btn-floating mx-2 rounded-circle">
              <FaFacebook></FaFacebook>
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
            
          </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
<Image src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' className="img-fluid"></Image>
               

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Register;