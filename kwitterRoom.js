
  // Inicialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyD7EJ6om46ftYPjqLfBLoPmYRDACkT_h-I",
    authDomain: "twitter-falsificado-da-shopee.firebaseapp.com",
    databaseURL: "https://twitter-falsificado-da-shopee-default-rtdb.firebaseio.com",
    projectId: "twitter-falsificado-da-shopee",
    storageBucket: "twitter-falsificado-da-shopee.appspot.com",
    messagingSenderId: "54058616397",
    appId: "1:54058616397:web:cb48a9e0dbe978d7533e04",
    measurementId: "G-Y1PZTW5KK8"
  };
   //Utilize o código 'getItem' para pegar um item dentro do localStorage
  username = localStorage.getItem("username");
  firebase.initializeApp(firebaseConfig);
  //Utilize o código 'innerHTML' para mudar o conteúdo HTML
  //Utilize a variável que guarda o nome do usuário
  document.getElementById("username").innerHTML = "Bem-vindo(a) " + username + "!";
  
  function NewRoom()
  {
    room_name = document.getElementById("room_name").value;
  //Coloque o nome da variável que guardará o nome da sala
    firebase.database().ref("/").child(room_name).update({
      purpose : "adicionar sala"
    });
  
      localStorage.setItem("room_name", room_name);
      //Código que muda de tela
      window.location = "kwitter_page.html";
  }
  
  //Função para obter dados do firebase
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {

    localStorage.setItem("room_name", room_name);
    //Código que troca de tela
    window.location = "kwitter_page.html";
  }
  
  function logout() {
    // Utilize o código 'removeItem' para remove o usuário e sala
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  //Utilize o código que troca de tela
    window.location = "index.html";
  }
  
