import React from 'react';

// let msgClasses=['text-center'];

export default function Registration(props) {
    // if(props.type){
    //     msgClasses.push('text-success')
    // }else{
    //     msgClasses.push('text-danger')
    // }
    return (
        <div className='container-fluid'>
            <div className='container card mt-3 p-3 text-center' style={{width:'500px'}}>
                <form onSubmit={props.register}>
                <h1>Create Account</h1>
                <h4>Get started with your free account</h4>
                <p className='text-danger text-center'>{props.message}</p> 
                {/* {msgClasses.join()}                                                             */}
               <div > <button className='btn btn-primary mt-2' style={{width:'100%'}}>SignUp via Google</button></div>
               <div > <button className='btn btn-secondary mt-2' style={{width:'100%'}}>SignUp via Facebook</button></div>
               
               <div className='mt-3'>OR</div>

               <input type='email' name='email' placeholder='Email Address' className='form-control mt-3'></input>
               <input type='password' name='password' placeholder='Create Password' className='form-control mt-2'></input>
               <input type='password' name='confirmPassword' placeholder='Repeat Password' className='form-control mt-2'></input>
               <div > <button type='submit' className='btn btn-primary mt-2' style={{width:'100%'}}>Create Account</button></div>
               <p className='mt-5'>Have an account<a href=" " onClick={props.switch}>Login</a></p>
                </form>
            </div>
            
        </div>
    )
}
