
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyCqTAqVBcnHdmhFxIIWjx-w02Hf2j4AITs",
      authDomain: "social-website-c-93.firebaseapp.com",
      databaseURL: "https://social-website-c-93-default-rtdb.firebaseio.com",
      projectId: "social-website-c-93",
      storageBucket: "social-website-c-93.appspot.com",
      messagingSenderId: "414523550770",
      appId: "1:414523550770:web:d6415872811608c8f8602b"
    };
    
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
User_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

  function addRoom(){
        room_name = docuemnt.getElementById("room_name").value;
        firebase.database().ref("/").child("room_name").update({
        purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
  } 
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " +  room_name); 
      row = "<div class='room_name'  id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      docuemnt.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}
function logout(){
localStorage.removeitem("user_name");
room_name.removeitem("room_name");

window.location = "index.html";
}