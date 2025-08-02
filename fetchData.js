


// fetch data using fetch 
// get 

const { useEffect, useState } = require("react");

fetch("https://jsonplaceholder.typicode.com/todos/1", {
   method: "GET", 

})
.then(response => response.json())
.then(data => {
    console.log(response.data)
})



// post 


const data = {
    name:"ajharul",
    age:22
}
fetch("https://jsonplaceholder.typicode.com/todos/1",
    {
        method: "POST",
        body: JSON.stringify(data),
       headers:{
        'Authorization': `${token}`,
        'Content-type': 'application/json'
       }
    }
)
.then(res => res.json())
.then(data =>{
    console.log(data)
})
.catch(error => {
  console.error(error.message);
});


// fetch data using axios
// get 

const[user, setUser] = useState(null)
useEffect(()=>{
const {name} = axios.get("https://jsonplaceholder.typicode.com/todos/1",)
if(data.success){
    setUser(name.data)
}

}, [])

// post 


try {
const[user2, setUser2] = useState(null)
const [token, setToken] = useState(null)
    const getUser = async ()=> {
    useEffect(()=>{
 const { data } =  await  axios.post("https://jsonplaceholder.typicode.com/todos/1", user2)
    if(data.success){
        setToken(data.token)
        axios.defaults.headers.common['Authorization'] = `${token}`
    setUser(null)
}

getUser()
}, [])
    
}

} catch (error) {
    console.error(success:false, message:"error")
}

    
