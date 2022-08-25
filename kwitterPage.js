var firebaseConfig = {
    apiKey: "AIzaSyCVzCgzCgpTKp9Z02l-zhP-Wp0E-Sho-IA",
    authDomain: "vamosconversar-28294.firebaseapp.com",
    databaseURL: "https://vamosconversar-28294-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-28294",
    storageBucket: "vamosconversar-28294.appspot.com",
    messagingSenderId: "821181850185",
    appId: "1:821181850185:web:e31c4dfa7c7d2d008e1598"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  userName=localStorage.getItem("userName");
  roomName=localStorage.getItem("roomName");

  function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name:userName,mensagem:msg,
        like:0
        
    });
    document.getElementById("msg").value ="";

  }
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
//Início do código

//Fim do código
 } });  }); }
getData();