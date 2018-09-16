//init github
const github = new GitHub;
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');
//search input event listener
searchUser.addEventListener('keyup', (e) => {
//Get input text
const userText = e.target.value;

if(userText !== ''){
  //make http call
  github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //show alert (ui.js)
      } else{
        //show profile (ui.js)
        ui.showProfile(data.profile);
      }
    });
} else {
  //clear profile (ui.js)
}
})