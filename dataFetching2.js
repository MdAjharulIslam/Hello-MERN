// simple fetch data
// get
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((responce) => responce.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

// post

const token = "thisisthetoken";

const user = {
  name: "ajharul ",
  age: 23,
  sex: "male",
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    Authorization: `${token}`,
    "content-type": "application/json",
  },
  body: JSON.stringify(user),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

// with async/await

async function createPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: ` ${token}`,
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    console.log("Response:", data);
  } catch (err) {
    console.error("Request failed:", err);
  }
}

createPost();
