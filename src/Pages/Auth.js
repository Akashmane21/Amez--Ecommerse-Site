import React ,{useState } from 'react'
// import {NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import firebase from '../Shopie_DB/Config'

function Auth() {
    let history = useHistory();

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

        function Submit(){
            console.log(username);
          
           

            let r = (Math.random() + 1).toString(36).substring(7);
            const name = username+"_"+r
            console.log(name);

            // const user = firebase.database().ref(`Users/${name}`);
            firebase.database().ref(`Users/${name}/Auth`)
            .set({
            Name :username,
            Password:password
             }).then(res => {
                localStorage.setItem('Username',username);
                localStorage.setItem('Userid',name);

                history.push('/')
                console.log("Account Created");
                window.location.reload(false);

                 })



   
      

        }


    return (
        <div>
            <h1>Auth Checking</h1>
            <h2>Name</h2>
            <input onChange={name => setusername(name.target.value)} />
            Password
            <input onChange={pass => setpassword(pass.target.value)} />

            <button onClick={Submit}>Continue</button>
        </div>
    )
}

export default Auth
