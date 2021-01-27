import firebase from "firebase";  
  
var firebaseConfig = {
    //add firebase config files
  };
  
// Initialize Firebase  
var fireDb = firebase.initializeApp(firebaseConfig);  
  
export default fireDb.database().ref();