// // import $ from 'jquery';
// // import Foundation from 'foundation-sites';
// // import whatInput from 'what-input';
// $(document).ready(function() {
//   // window.$ = $;

//   // If you want to pick and choose which modules to include, comment out the above and uncomment
//   // the line below
//   //import './lib/foundation-explicit-pieces';

//   //    $(document).foundation();

//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAtvF_Uag4Qbvxp1r2BNkvuKQ0jkTrdyeE",
//     authDomain: "vinequest-35c5f.firebaseapp.com",
//     databaseURL: "https://vinequest-35c5f.firebaseio.com",
//     projectId: "vinequest-35c5f",
//     storageBucket: "vinequest-35c5f.appspot.com",
//     messagingSenderId: "457258807730"
//   };
//   firebase.initializeApp(config);

//   var database = firebase.database();

//   // // -------------------------------------------------------------- (CRITICAL - BLOCK) --------------------------- //
//   // // connectionsRef references a specific location in our database.
//   // // All of our connections will be stored in this directory.
//   // var connectionsRef = database.ref("/connections");

//   // // '.info/connected' is a special location provided by Firebase that is updated every time
//   // // the client's connection state changes.
//   // // '.info/connected' is a boolean value, true if the client is connected and false if they are not.
//   // var connectedRef = database.ref(".info/connected");

//   // // When the client's connection state changes...
//   // connectedRef.on("value", function(snap) {

//   //     // If they are connected..
//   //     if (snap.val()) {

//   //         // Add user to the connections list.
//   //         var con = connectionsRef.push(true);

//   //         // Remove user from the connection list when they disconnect.
//   //         con.onDisconnect().remove();
//   //     }
//   // });

//   // // When first loaded or when the connections list changes...
//   // connectionsRef.on("value", function(snap) {

//   //     // Display the viewer count in the html.
//   //     // The number of online users is the number of children in the connections list.
//   //     $("#viewers").text(snap.numChildren());
//   // });

//   // //-----------------------------CRITICAL BLOCK--------------------------------------//

//   // Initial Values

//   //   var name = "";

//   var email = "";

//   var password = "";

//   //   var vineyard = "";

//   //   var vineyardAddr = "";

//   //   var zipcode = "";

//   //   var comment = "";

//   // For the Contact Page
//   // Capture user information and add to the 'users' database
//   $("#signup").on("click", function(event) {
//     console.log("here");
//     event.preventDefault();

//     // Collecting inputs.
//     // name = $("#name-input").val();
//     email = $("#signup-email").val();
//     password = $("#signup-password").val();
//     // vineyard = $("#vineyard-input").val();
//     // vineyardAddr = $("#vineyardAddr-input").val();
//     // zipcode = $("#zipcode-input").val();
//     // comment = $("#comment-input").val();

//     // console.log(name);
//     console.log(email);
//     console.log(password);
//     // console.log(vineyard);
//     // console.log(vineyardAddr);
//     // console.log(comment);

//     // taking the inputs and pushing into the 'users' database
//     database.ref("users").push({
//       //   name: name,
//       email: email,
//       password: password
//       //   vineyard: vineyard,
//       //   vineyardAddr: vineyardAddr,
//       // zipcode: zipcode,
//       //   comment: comment,
//     });
//   });

//   var like = [];

//   //   $(".heart").on("click", function() {
//   //     event.preventDefault();
//   //     console.log("you liked an image!");
//   //   });
//   // database.ref().push({
//   //   like: results[searchResults].id
//   // });
// });

// // Firebase watcher + initial loader HINT: .on("value")

// // database.ref().on("child_added", function(snapshot) {

// //     // Log everything that's coming out of snapshot

// //     console.log(snapshot.val());

// //     console.log(snapshot.val().name);

// //     console.log(snapshot.val().email);

// //     console.log(snapshot.val().password);

// //     console.log(snapshot.val().vineyard);

// //     console.log(snapshot.val().vineyardAddr);

// //     // console.log(snapshot.val().zipcode);

// //     console.log(snapshot.val().comment);

// //     // Change the HTML to reflect

// //     $("#name-display").text(snapshot.val().name);

// //     $("#email-display").text(snapshot.val().email);

// //     $("#password-display").text(snapshot.val().password);

// //     $("#vineyard-display").text(snapshot.val().vineyard);

// //     $("#vineyardAddr-display").text(snapshot.val().vineyardAddr);

// //     // $("#zipcode-display").text(snapshot.val().zipcode);

// //     $("#comment-display").text(snapshot.val().comment);

// //     // Handle the errors

// // }, function(errorObject) {

// //     console.log("Errors handled: " + errorObject.code);

// // });

// //------------------------------------------------------------------
