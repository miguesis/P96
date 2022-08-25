const firebaseConfig = {
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
  //ADICIONE SEUS LINKS FIREBASE
  
  userName = localStorage.getItem("userName");
  
  document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";
  
  function addRoom() {
    roomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomName).update({
      purpose: "adicionar Sala"
    });
    localStorage.setItem("roomName", roomName);
    window.location = "kwitterPage.html";
  }
  function getData()
   { 
    firebase.database().ref("/").on('value', function (snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) { childKey = childSnapshot.key;
       roomNames = childKey;
        console.log("Nome da Sala - " + roomNames);
         row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>"; 
         document.getElementById("output").innerHTML += row;
         });
         });
         }
  
  
  getData();
  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
  }
  
  function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
  }