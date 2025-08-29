//  const person2 = {
//     name:"ajharul",
//     age:21

//  }


//  function person (name, age){
//     this.name = name;
//     this.age = age;
//  }

//  const person1= new person("kamrul", 17)
//  console.log(person1)
//  console.log(person2.name);


//  const arr = [1,2,3,4,5];
// const dubble = arr.reduce((arr)=>{
//     return arr+=2;
// }
// )
// console.log(arr)
// console.log(dubble)

// const name = {
//     name: "ajharul",
//     age:21
// }

// const obj = Object.keys(name);
// const obj2 = Object.values(name)

// console.log(obj)
// console.log(obj2)


//  const  fetchData = async ()=>{
// try {
//     const fdata = await fetch('https://www.google.com');

//     const data = await  fdata.json();

//     console.log( "data:" ,data);
// } catch (error) {
//     console.error(error)
// }

//  }

//  localStorage.setItem('name' , 'ajharul')
//    localStorage.setItem('name', 'kamrul')
//  localStorage.setItem('name' , 'ajharul')
//  localStorage.setItem('name', 'kamrul')
//  const output = localStorage.getItem(name);
//  console.log(output)


// const a="a";
// const div = "ajhgarul"

// console.log(typeof (div ))





int factorial(int n) {
      if (n == 0 || n == 1)  
        return 1;
    else
        return n * factorial(n - 1);  
}

