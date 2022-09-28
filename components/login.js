import React, { useState, } from 'react';
import { Text, View, StyleSheet,TextInput,Button ,TouchableOpacity } from 'react-native'
import {firebase} from '../firebase';




   function Login({navigation}){
    
   const [email,setEmail] = useState("");
   const [password,setSurname] =useState("");
   const [name,setName] =useState("");
  
   const Reg =()=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  

  return (
    <View style={styles.container}>
     <Text>signup</Text>
    <label for="exampleInputName1" style={styles.name}>Name</label>
         <input onChange={(event)=>setPassword(event.target.value)} type="name" class="form-control" id="exampleInputPassword1"style={styles.name}/>
      <label for="exampleInputPassword1"style={styles.name}>Surname</label>
         <input onChange={(event)=>setPassword(event.target.value)} type="surname" class="form-control" id="exampleInputSurname1"/>
        
          <label for ="exampleInputEmail1"style={styles.name}> Email address </label>
           <input onChange={(event)=>setEmail(event.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
         <Button onClick={Login} type="submit" class="btn btn-primary">submit</Button>
    

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('camera')}>go to home page </TouchableOpacity>
      
      
    </View>
  );
}}

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    margin:90
    
  
  },
  name:{
    color:'pink',
    
  }
  
});

 

