let allUsers=[{                         
  'email':'robin@gmail.com',
  'password':'123',
  'dob':'19-07-1993'
},
{
    'email':'rohan@gmail.com',
    'password':'1234',
   'dob':'19-07-1994'
}]

// used the let keyword instead of var.
// declaring arrow function 
let checkLogin=(email,password,allUsers)=>{
    let isUserFound=false;
    let passwordCorrect=false;
for(currentUser of allUsers){                     // for of - is used instead of for in
    console.log(currentUser);
 if(currentUser.email==email){
     if(currentUser.password==password){
         isUserFound=true;
         passwordCorrect=true;
         break;
     }
     else{
         isUserFound=true;
         passwordCorrect=false;
         break;
     }
 }
 else{
     isUserFound=false;
 }
}
// using ternary operator to validate Login.
let finalAlert=((isUserFound==true && passwordCorrect==true)?'You are logged in':(isUserFound==true 
&& passwordCorrect==false)?'password incorrect':'no user found')
alert(finalAlert)
} //function ends.

let email= prompt('Enter email');
let password=prompt('Enter password');
checkLogin(email,password,allUsers); //calling the function.

