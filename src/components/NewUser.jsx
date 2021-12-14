const NewUser = async (user) => {
  const BASE_URL = "https://six-foobar.herokuapp.com";

  const res = await fetch(BASE_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: user,
  }).then((response) => response.json());
};

export default NewUser;
