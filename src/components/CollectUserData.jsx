const CollectUserData = () => {
  let userName = document.querySelector("#name").value;
  let userTag = document.querySelector("#usertag").value;
  let userEmail = document.querySelector("#email").value;
  let userPass = document.querySelector("#password").value;

  user.name = userName;
  user.usertag = userTag;
  user.email = userEmail;
  user.password = userPass;

  let postuser = JSON.stringify(user);
  NewUser(postuser);
};

export default CollectUserData;
