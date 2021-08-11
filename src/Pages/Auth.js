import React ,{useState } from 'react'
// import {NavLink} from 'react-router-dom'
// import { useHistory } from "react-router-dom";
import firebase from '../Shopie_DB/Config'
import '../CSS/Auth.scss'


function Auth() {
    // let history = useHistory();

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

        function Submit(){
            console.log(username);
          
           

            // let r = (Math.random() + 1).toString(36).substring(11);
            const name = username+password
            console.log(name);

            // const user = firebase.database().ref(`Users/${name}`);

            // firebase.database().ref.child("Users").equalTo(name).once("value",snapshot => {
            //     if (snapshot.exists()){
            //       const userData = snapshot.val();
            //       console.log("exists!", userData);
            //     }
            // });
            firebase.database().ref(`Users/${name}/`).once("value", snapshot => {
                if (snapshot.exists()){
                  
                   const email = snapshot.val();
                   console.log("exists!" , email);
                }
             });

            // firebase.database().ref(`Users/${name}/Auth`)
            // .set({
            // Name :username,
            // Password:password
            //  }).then(res => {
            //     localStorage.setItem("Auth" , "True")
            //     localStorage.setItem('Userid',name);
            //     localStorage.setItem('UserName',username);

            //     // history.push('/')
            //     console.log("Account Created");
            //     window.location.reload(false);

            //      })



   
      

        }


        function Login(){
            console.log("Clicked");
        }

    return (

        <div className="Auth_page">
        {/* <h1>Welcome to Shoppie</h1> */}
        <div className="Auth">

            <div className="Lottie">

            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_yr6zz3wv.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>

            </div>

                <div className="form">

                    <h3 onClick={Login}>Welcome to Shoppie
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg> */}
                    </h3>
                        <h2>Name : </h2>
                        <input placeholder="Enter Name" onChange={name => setusername(name.target.value)} />
                        <h2>Phone Number :</h2>
                        <input placeholder="Enter Phone Number :" onChange={name => setusername(name.target.value)} />
                       
                       <h2>Password : </h2> 
                        <input placeholder="Enter Password" onChange={pass => setpassword(pass.target.value)} />
                            <br />
                            <hr />
                        <button onClick={Submit} className="register">Register</button>
                        <hr />
                       <h6>Already Have a Account ? <span onClick={Login}>Login</span></h6>
                        {/* <button onClick={Submit} className="login">Login</button> */}

                </div>
          
        </div>

        </div>
    )
}

export default Auth
