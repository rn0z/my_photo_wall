import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyATIt53h_YhOjVRULXnFOoeGXwTeYW6mhc",
  authDomain: "photowall-b9d8e.firebaseapp.com",
  databaseURL: "https://photowall-b9d8e.firebaseio.com",
  projectId: "photowall-b9d8e",
  storageBucket: "photowall-b9d8e.appspot.com",
  messagingSenderId: "648988199146",
  appId: "1:648988199146:web:61ec1e87e7d576953eef93",
  measurementId: "G-Z6TKGMF223"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}