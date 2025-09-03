// const { useEffect } = require("react");

// const object = {
//   name: "ajharul",
//   age: 23,
// };

// const FetchData = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const res = await data.json();
//   res.map((dataa) => {
//     console.log(dataa.body);
//   });
// };

// FetchData();

// console.log(object?.name)
// 
//    const Data = async ()=>{
// useEffect(()=>{
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts",
//     {
//      method: "POST" ,
//      headers:{
//         "Content-Type": "application/json",
//         "Authorization": ${token}
//      },
//      body: JSON.stringify(object)
//     }

// )
// const store = await data.json();
// console.log(store)
// }

// Data();
// })



const axios = require("axios");
// const fetchData = async ()=>{
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     console.log(res.data)
//   } catch (error) {
//     console.error(error.message)
//   }
// }
// fetchData()


const object = {
  name: "ajharul",
  age: 23,
};

const postData = async ()=>{
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", object,{
      headers:{
        "Content-Type": "application/json"
      }
    })
   console.log(res.data)
  } catch (error) {
    console.error(error.message)
  }
}
postData()