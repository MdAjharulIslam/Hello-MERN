const axios = require('axios');


axios.get("https://jsonplaceholder.typicode.com/posts")
.then(res =>{
    console.log(res.data)
})
.catch(error => {
    console.error(error);
}
)



// post 
 const token = "thisistoken"

const user = {
    name : "ajharul ",
    age : 23, 
    sex: "male"
}

axios.post("https://jsonplaceholder.typicode.com/posts", user,{
    headers:{
        'Authorization':`${token}`
    }
})
.then(res =>{
    console.log(res.data)
})