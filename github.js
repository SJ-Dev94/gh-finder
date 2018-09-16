 class GitHub {
   constructor(){
     this.client_id = "c5f07fb2a10168ff8456";
     this.client_secret = "41ecbe36d9c2e465a763cf543fbaa7d16c143042";
     this.repos_count = 5;
     this.repos_sort = 'created: asc';
   }

   async getUser(user){
     const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
     const repoRespoonse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const profile = await profileResponse.json();
     const repos = await reposResponse.json();

     return{
       profile,
       repos
     }
   }
 }