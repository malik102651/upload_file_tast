import React from 'react'

export default function Login(props) {
    return (
        <div className='container-fluid'>
            <div className='container card mt-3 p-3 text-center' style={{width:'500px'}}>
                <form onSubmit={props.login}>
                <h1>Login</h1>
                <p className='text-danger text-center'>{props.message}</p> 
                
               <div > <button className='btn btn-primary mt-2' style={{width:'100%'}}>Login via Twitter</button></div>
               <div > <button className='btn btn-secondary mt-2' style={{width:'100%'}}>Login via Facebook</button></div>
               
               <div className='mt-3'>OR</div>

               <input type='email' name='email' placeholder='Email Address' className='form-control mt-3'></input>
               <input type='password' name='password' placeholder=' Password' className='form-control mt-2'></input>
               
               <div > <button className='btn btn-primary mt-2' style={{width:'100%'}}>Login</button></div>
               <p className='mt-5'><a href=" " onClick={props.switch}>Create</a> an account</p>
                </form>
            </div>
            
        </div>
    )
}
