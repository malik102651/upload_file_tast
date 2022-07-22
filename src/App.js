import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header'
import About from './components/About';
import Contact from './components/Contact';
import UploadFile from './components/React_Dropzone/UploadFile';

 class App extends Component {
  render() {
    return (
      <>
      <UploadFile/>
      
      </>
      // <Router>
      //   <Header/>
      //   <Switch>
      //     <Route path='/About'>
      //       <About/>
      //     </Route>
      //     <Route path='/'>
      //   <Home title='this is  home page'/>
        
      //   </Route>
      //   </Switch>
      //   <Contact/>
      // </Router>
    );
  }
}

export default App;

// import React, { Component } from 'react'
// import Registration from './components/Registration'
// import Login from './components/Login'
// //import { db } from './fire'
// import {initializeApp} from 'firebase/app';
// import { getFirestore } from "firebase/firestore"
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
// //import Home from './components/Home';
// const firebaseConfig = {
//   apiKey: "AIzaSyDEv1OCTVY6PBMlNvbvsE426_PnTn-osqI",
//   authDomain: "login-e7ae4.firebaseapp.com",
//   projectId: "login-e7ae4",
//   storageBucket: "login-e7ae4.appspot.com",
//   messagingSenderId: "926158723937",
//   appId: "1:926158723937:web:1196e3c208d39b88a00320"
// };

//  initializeApp(firebaseConfig);
//  const auth = getAuth();
// //  const db = getFirestore();


// //import { getFirestore } from "firebase/firestore";
// //import { collection, addDoc } from "firebase/firestore";




// export class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        //page 0=login and 1= register
//        page: 1,
//        message:"",
//       //  type: 1   //1= success and 0=error
//     }
//   }
//   pageSwitchHandler=(event)=>{
//     this.setState({page: !this.state.page , message:''})
//     event.preventDefault();
//   }
  // registrationHandler=(event)=>{
  //   event.preventDefault();
  //   const email=event.target.email.value;
  //   const password=event.target.password.value;
  //   const confirmPassword=event.target.confirmPassword.value;
    
  //   if( password.length< 6){
  //     this.setState({message:"password must be 6 character"});   
  //     return;
  //   }
  //   if(password!==confirmPassword ){
  //     this.setState({message:"password does not match "});   //, type: 0
  //     return;
  //   }
    
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((data) => {this.setState({message:'Registered Successfully'},()=>
//     {
//       event.target.email.value='';
//       event.target.password.value='';
//       event.target.confirmPassword.value=''; 

//     })})
//     .catch((error) => {
//       this.setState({message: error.message});
      
//     });
    

//   }
//   loginHandler=(event)=>{
//     event.preventDefault();
//     const email=event.target.email.value;
//     const password=event.target.password.value;

    
//     signInWithEmailAndPassword(auth, email, password)
//     .then((data) => {
//       if(data.user.emailVerified===true)
//       this.setState({message:'Login Successfully'});
//       else this.setState({message:'Your email is not verified'});
    
//     })
//   .catch((error) => {
//     console.log(error);
//     this.setState({message: error.message});
    
//   });

//   }
  
//   render() {
//     return (

//       // <div>
//       //   {this.state.page ? (
//       //   <Registration
//       //    //type={this.state.type}
//       //    message={this.state.message}
//       //    switch={this.pageSwitchHandler} 
//       //    register={this.registrationHandler}>

//       //   </Registration> 
//       //  ) : ( 
//       //   <Login 
//       //   message={this.state.message}
//       //   switch={this.pageSwitchHandler}
//       //   login={this.loginHandler}
//       //   >

//       //   </Login>
//       //   )
//       // }
       
        
//       // </div>
//     )
//   }
// }

// export default App;

