import React ,{useState } from 'react'
// import {NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import firebase from '../Shopie_DB/Config'
import '../CSS/Auth.scss'
import Fade from 'react-reveal/Fade';


function SellerAuth() {
    let history = useHistory();

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [Phone, setPhone] = useState(' ')
    const [isLogin, setisLogin] = useState(true)
    const [isuser, setisuser] = useState(false)
    const [Sname, setSname] = useState(' ')



        function Login(){
            setisLogin(true)
        }
        function Register(){
            setisLogin(false)
        }




        function Signup(){
            const name = username+"_"+password

            firebase.database().ref(`Sellers/${name}/`).once("value", snapshot => {
                if (snapshot.exists()){
                  
                   const email = snapshot.val();
                   console.log("exists!" , email);
                }
                else{
                    console.log("The User is Not exists");
                         firebase.database().ref(`Sellers/${name}/Auth`)
                            .set({
                            Name :username,
                            Password:password,
                            Phone:Phone,
                            Sname : Sname
                            }).then(res => {
                                localStorage.setItem("authentication" , "True")
                                localStorage.setItem('Userid',name);
                                localStorage.setItem('UserName',username);
                                localStorage.setItem('Sname',Sname);
                                history.push('/Dashboard')
                                console.log("Account Created");
                                window.location.reload();

                                })


                }
             });

        }

        function Signin(){

            const name = username+"_"+password

            firebase.database().ref(`Sellers/${name}/`).once("value", snapshot => {
                if (snapshot.exists()){
               
                       localStorage.setItem("authentication" , "True")
                       localStorage.setItem('Userid',name);
                       localStorage.setItem('UserName',username);

                       history.push('/Dashboard')
                       console.log("Account Created");
                       window.location.reload();


                }
                else{
                    console.log("The User is Not exists");
                    setisuser(true)
                    
                }
             });
            
        }

    return (

        <div className="Auth_page">
        <div className="Auth">
        <Fade left>

            <div className="Lottie">

            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_yr6zz3wv.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>

            </div>
</Fade>

<Fade right>

                <div className="form">

                    <h3 onClick={Login}>Welcome to Shoppie
                    </h3>
                    {isLogin ? ( 
                        <center> <h2>-- Sign in --</h2></center>
                    ) : ( 
                        <center> <h2>- -Sign up --</h2></center>
                    )}
                   
                        <h2>Name : </h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                         <input placeholder="Enter Name" onChange={name => setusername(name.target.value)} required/>
                       
                         {isLogin ? (

                  ""
                          ) : ( 
                              <>
                            <h2>Phone Number :</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <input placeholder="Enter Phone Number :" onChange={number => setPhone(number.target.value)} required />
                      
                        <h2>Store Name : </h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                         <input placeholder="Enter Store Name" onChange={name => setSname(name.target.value)} required/>
                        
                       </>
                          ) }
                      
                       <h2>Password : </h2> 
                       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <input password={true} placeholder="Enter Password" onChange={pass => setpassword(pass.target.value)} required />
                            <br />
                            <hr />
                            {isuser ? ( 
                                <h4>User Not Found , Check Name or Password Again </h4>
                            ) : (  " " )}

                            {isLogin ? ( 
                                <button onClick={Signin} type="submit" className="register">Login</button>

                            ) : ( 

                        <button onClick={Signup} type="submit" className="register">Register</button>
                             )}

                        <hr />

                        {isLogin ? ( 
                            <h6>Don't Have a Account ? <span onClick={Register}>Register</span></h6>

                         ) : ( 

                       <h6>Already Have a Account ? <span onClick={Login}>Login</span></h6>
                        ) }

                </div>
          </Fade>
        </div>

        </div>
    )
}

export default SellerAuth
