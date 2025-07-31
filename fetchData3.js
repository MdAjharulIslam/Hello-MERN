const axios = require('axios');
const { useEffect } = require('react');


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

import { useEffect, useState } from "react";
import axios from "axios";

const user1 = {
    name : "ajharul ",
    age : 23, 
    sex: "male"
}
 const token1 = "thisistoken"
 const [loading, setLoading] = useState(false)

const fetchData = async ()=>{
    try {
        setLoading(true)
        const {data} = await axios.post('https://jsonplaceholder.typicode.com/posts', user1)
        axios.defaults.headers.common['Authorization'] = `${token1}`
        if(data.success){
            console.log( "add data successfully", data)
            setLoading(false)
        }else{
            console.data(error.message);
        }
    } catch (error) {
        console.error(error.message)
    }
}

useEffect(()=>{
fetchData()

},[])