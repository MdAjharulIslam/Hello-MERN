const { useEffect } = require("react");

const object = {
  name: "ajharul",
  age: 23,
};

const FetchData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await data.json();
  res.map((dataa) => {
    console.log(dataa.body);
  });
};

FetchData();

// console.log(object?.name)
// useEffect(()=>{
//    const Data = async ()=>{
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts",
//     {
//      method: "POST" ,
//      headers:{
//         "Content-Type": "application/json",
//      },
//      body: JSON.stringify(object)
//     }

// )
// const store = await data.json();
// console.log(store)
// }

// Data();
// })
