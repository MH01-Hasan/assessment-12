
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,
    onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
  
  import { useEffect } from "react";
  import { useState } from "react";
  import initialize from "../Firebase/firevaseInt";
  
  initialize()
  
  const useFirebase = () => {
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const [lodding,setLodding] = useState(true)
     const [user, setUser] =useState({}); 
     let [erroe, setErroe]=useState('')

     //////////////email and password creat register from ///////////////////////////////////

  const regester = (email,password) =>{
    setLodding(true);
   createUserWithEmailAndPassword (auth,email, password)
    .then((userCredential) => {   
      const user = userCredential.user;
      setUser(user)
      setErroe('');
      
    })
    .catch((error) => { 
      setErroe = error.message;
     
    })
    .finally(() => setLodding(false));
  
  }
     ///email and password creat register from ///////////////////////////////////
  //loginuser//
  
  const loginuser = (email ,password ,location,history)=>{
    setLodding(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const redairect = location.state?.from || '/home'
      history.push(redairect);

      const user = userCredential.user;
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    .finally(() => setLodding(false));
  

  }
  //loginuser//
    
      
  //1------------------- singin google  start------------------------------//
      const singingoogle = () => {
        setLodding(true);
        
        return  signInWithPopup(auth, googleprovider)
          
            .finally(()=>setLodding(false));
            
      };
  //1------------------- singingoogle  end------------------------------//
  
  
  
  
  //2---------------observe user state-chage use start----------------------------------//
      useEffect( ()=>{
         const unsubscribe = onAuthStateChanged(auth, (user) => {
              if (user) {
                  setUser(user)
              }
  
               else {
                setUser({})
              }
              setLodding(false)
            });
            return () => unsubscribe;
      },[])
  //2---------------observe user state-chage use end----------------------------------//
  
  
  
  
  
  
  //3---------------logout start----------------------------------//
      const logout = ()=>{
          signOut(auth)
          .then(() => {
            setUser({})
            })
            .finally(()=>setLodding(false));
      }
   //3---------------logout end----------------------------------//
  
   ////
   
   ///
  
  
  
   
  
      return{
          user,
          lodding,
          regester,
          loginuser,
          singingoogle,
          logout,
          erroe,
  
      }
  }
  
  
  export default useFirebase ;