/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const followersArray = [
  'Eloy2',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

const cardComponent = (data) => {
  //card
  const card = document.createElement('div');
  card.classList.add('card');

  //img            APPENDED TO card
  const img = document.createElement('img');
  img.src = data.avatar_url;
  
  //card-info      APPENDED TO card
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  ///////////////////////////////////////////////// ALL BELOW APPENDED INTO card-info DIV
  //Real name 
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = data.name;

  //Username
  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = data.login;

  //Location
  const userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${data.location}`;

  //Profile
  const userProfile = document.createElement('p');
  userProfile.textContent = 'Profile:';
  //URL to github profile
  const githubUrl = document.createElement('a');
  githubUrl.href = data.html_url;
  githubUrl.textContent = data.html_url;
  //appended <a> tag to <p> tag
  userProfile.appendChild(githubUrl);

  //Followers
  const userFollowers = document.createElement('p');
  userFollowers.textContent = `Followers: ${data.followers}`;
  
  //Following
  const userFollowing = document.createElement('p');
  userFollowing.textContent = `Following: ${data.following}`;

  //Bio
  const userBio = document.createElement('p');
  userBio.textContent = `Bio: ${data.bio}`;
  /////////////////////////////////////////////////// ALL ABOVE APPENDED INTO card-info DIV

  //Appending all h3 and p tags to card-info div below
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  //Appending img to card
  card.appendChild(img);
  //Appending card-info to card
  card.appendChild(cardInfo); 

  return card;
}

//Selected the class cards
const cards = document.querySelector('.cards');

followersArray.forEach((item) => {
  //Get the api url for each name in the array
  const apiUrl = `https://api.github.com/users/${item}`;

  axios.get(apiUrl)
    .then((obj) => {
      //Selected the data object inside of info 
      data = obj.data;

      //Make card using cardComponent function
      const userCard = cardComponent(data);

      //Append cards to cards class on the page
      cards.appendChild(userCard);
    })
    .catch((err) => { console.log(err) })
})