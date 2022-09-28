
import { Text, View, StyleSheet,TextInput, Button } from 'react-native';
import React, { useState, } from 'react';
import {firebase} from '../firebase';


function SignUP({navigation}){
 
   const [email,setEmail] = useState("");
   const [password,setPassword] =useState("");
   const [name,setName] = useState("")
   const [surname ,setSurname] =useState("")


   

   const SignUP =()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  })
    

}
    return(
 
    <View>

    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(event)=>setEmail(event.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   We'll never share your email with anyone else<br/>

    <label for="exampleInputPassword1">Name</label>
    <input onChange={(event)=>setName(event.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
    <label for="exampleInputPassword1">Surname</label>
    <input onChange={(event)=>setSurname(event.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(event)=>setPassword(event.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
 
 

  <Button  onPress={() => navigation.navigate('login')} type="submit" class="btn btn-primary">Sign UP</Button>
   

    </View>
)

}

export default SignUP;

