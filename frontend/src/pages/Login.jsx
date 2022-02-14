import React from 'react'
import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',

  })

  const {email, password} = formData
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()


  }

  return (
    <>
       <section className="heading">
          <h1>
          <FaSignInAlt /> Log in
          </h1>
          <p>Please log in to get support</p>
       </section>

       <section className="form">
         <form onSubmit={onSubmit}>
           <div className="form-group">
             <input 
             type="email" 
             className="form-control" 
             name='email'
             id='email'  
             value={email} // value goes to state
             onChange={onChange} 
             placeholder='Enter your email' 
             required
             />
           </div>
           <div className="form-group">
             <input 
             type="password" 
             className="form-control" 
             name='password'
             id='password'  
             value={password} // value goes to state
             onChange={onChange} 
             placeholder='Enter password' 
             required
             />
           </div>
           <div className="form-group">
             <button className='btn btn-block'>
               Submit
             </button>
           </div>
         </form>
       </section>
    </>
  )
}

export default Login