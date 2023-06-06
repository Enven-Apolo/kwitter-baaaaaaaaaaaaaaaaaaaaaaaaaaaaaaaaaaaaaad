//Inicialize o firebase 
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
firebase.initializeApp(firebaseConfig);
  function send()
  {
    //Coloque o nome da variável que guarda as mensagens. Ela se chama 'msg'
    msg = document.getElementById("msg").value;
    //Utilize o código 'firebase.database().ref(room_name).push({ 'para que seja enviado ao firebase
    // o nome do usuário, a mensagem e quantidade de likes
    firebase.database().ref(room_name).push({ 
      name:username,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }
  room_name = localStorage.getItem("room_name");
  username = localStorage.getItem("username")
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  
           console.log(firebase_message_id);
             console.log(message_data);
             name = message_data['name'];
             message = message_data['message'];
           like = message_data['like'];
           name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
           message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
           span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
  
          row = name_with_tag + message_with_tag +like_button + span_with_tag;       
          document.getElementById("output").innerHTML += row;

        } });  }); }
  getData();
  
  function updateLike(message_id)
  {
    
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      //Utilize o código 'Number(likes) + 1;' para adicionar +1 like
      updated_likes = Number(likes) + 1
      firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes  
       });
  
  }
  
// Repita a função logout
function logout() {
  // Utilize o código 'removeItem' para remove o usuário e sala
localStorage.removeItem("username");
localStorage.removeItem("room_name");
//Utilize o código que troca de tela
  window.location = "index.html";
}
