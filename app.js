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
        ui.showAlert('User not found', 'alert alert-danger');
      } else{
        //show profile (ui.js)
        ui.showProfile(data.profile);
        ui.showRepos(data.repos)
      }
    });
} else {
  //clear profile (ui.js)
  ui.clearProfile();
}
})