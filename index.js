// console.log("errr")

// function one(init){
//     return(init + 1)
// }
// function two(init){
//     return(init + 2)
// }
// function three(init){
//     return(init + 3)
// }

// function result(){
//     let
//     sol = 0
//     sol =one(sol)
//     sol =two(sol)
//     sol =three(sol)

//     console.log(`result: ${sol}`)

// }

// result()

// function doStep1(init, callback) {
//     const result = init + 1;
//     callback(result);
//   }

//   function doStep2(init, callback) {
//     const result = init + 2;
//     callback(result);
//   }

//   function doStep3(init, callback) {
//     const result = init + 3;
//     callback(result);
//   }

//   function doOperation() {
//     doStep1(0, (result1) => {
//       doStep2(result1, (result2) => {
//         doStep3(result2, (result3) => {
//           console.log(`result: ${result3}`);
//         });
//       });
//     });
//   }

//   doOperation();

// setTimeout(()=>{
//     for( let i =0; i<30; i++){
//         const name= 'VIIBII'
//         console.log(`my name is ${name}` )
//     }
// },100 )

// console.log("Its done")

// const call =(name, greeting) => {console.log(` ${greeting} My name ${name}`)
// }

// call("VIIBII", "Good Afternoon")

// const x ={
//     name: "Vishal",
//     age: "18",
//     occ:" web developer for a reason",

//     show: function()
//     {setTimeout(() => {
//         console.log(`My name is ${this.name}` )
//     },2000)

// }
// }

// x.show()
// // console.log(`${x.name}  ${x.occ}`)

// function sum(){
//     return(
//         console.log()
//     )
// }

// const sum= add =>console.log()

// const num = (x,y) => x*y

// const res =(x) => num(x,x)

// const rag =(a,b,c)=> {
//   if(res(a) + res(b) === res(c)){
//     return(
//     console.log("yes it is")
//   )}else{
//     console.log('you fucked up!!')
//   }
// }

// rag(2,4,5)

// setTimeout(() =>{
//     console.log("here is the data from the server")
// },3000)

// console.log("heellppp pabloo")

// const request = fakePromise('vishalbirla.com')

// request
// .then(() => {
//     console.log("It worked")
// })
// .catch(() => {
//     console.log("damnn!")
// })

// fakePromise('vishalbirla.com')
// .then(() => {
//     console.log("It worked")
//     return fakePromise(vishalbirla/2)
// })
// .then(() => {
//     console.log("It worked")
//     return fakePromise(vishalbirla/3)
// })
// .then(() => {
//     console.log("It worked")
// })
// .catch(() => {
//     console.log("damnn!")
// })

// const fakePromise =(url) =>{
//     return (
//         new Promise ((resolve, reject) =>{
//             const rand = Math.random()
//             setTimeout(() =>{
//                 if(rand < 0.7){
//                     resolve('hey there')
//                 }else{
//                     reject('damn')
//                 }
//             },1000)

//         })
//     )
// }

// fakePromise('/cat/2')
// .then((data) =>{
//     console.log("lets go", data)
// })
// .catch((err) => {
//     console.log("loserr", err)
// })

// const colorChange = (color, time)=>{
//     return new Promise ((resolve,reject) =>{
//         setTimeout(() => {
//             document.body.style.backgroundColor =color
//             resolve()
//         }, time)
//     })
// }

// colorChange('red', 1000)
// .then (() => colorChange('orange', 1000))
// .then (() => colorChange('blue', 1000))
// .then (() => colorChange('indigo', 1000))

// const sing =async () => {
//     return 'La La La '
// }

// sing()
// .then ((data) => console.log("data: ", data))

// const login = (async(username,password) => {
//     if(!username || !password) throw 'Missing credentials'
//     if(password === 'azsxdcfvgb')  return 'WELCOME'
//     throw 'What The Fuck'
// })

// login ('vishal', 'azsxdcfvgb' )
// .then ((data) => {
//     console.log("Logged In ")
//     console.log(data)
// })
// .catch ((err) => {
//     console.log("ERROR")
//     console.log(err)
// })

// const colorChange = (color, time)=>{
//     return new Promise ((resolve,reject) =>{
//         setTimeout(() => {
//             document.body.style.backgroundColor =color
//             resolve()
//         }, time)
//     })
// }

// colorChange('red', 1000)
// .then (() => colorChange('orange', 1000))
// .then (() => colorChange('blue', 1000))
// .then (() => colorChange('indigo', 1000))

// async function rainbow(){
//   await colorChange("red", 1000)
//   await colorChange("blue", 1000)
//   await colorChange("orange", 1000)
//   await colorChange("red", 1000)
//   await colorChange("white", 1000)
// }

// async function done(){
//      rainbow()
//     console.log("done")
// }

// done()

// rainbow()
// you can do it without even using then thats the whole point//

// fetch("https://swapi.dev/api/people/1")

// .then (res => {
//     console.log("data stored", res)
//     return res.json()
// })
// .then(data => {
//     console.log(data)

// return fetch("https://swapi.dev/api/people/2")
// })
// .then(res => {
//     console.log("second API resolved", res)
//     return res.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch(e => {
//     console.log('error', e)
// })

// const starWarsData = async() => {
// try {
//     const res = await fetch("https://swapi.dev/api/people/1")
//     const data =await res.json();
//     console.log(data)
//     const res2 =await fetch("https://swapi.dev/api/people/2")
//     const data2 = await res2.json()
//     console.log(data2)
// } catch (e) {
//     console.log('error')
// }}

starWarsData();

axios
  .get("https://swap.dev/api/people/1")
  .then((res) => {
    console.log("response", res);
  })
  .catch((e) => {
    console.log("error", e);
  });

const gameData = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (e) {
    console.log("err", e);
  }
};
gameData(15);

const dadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get(" https://icanhazdadjoke.com/", config);
  console.log(res.data);
};

dadJoke();

const momJoke = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1");
    const product = await res.json();
    console.log(product);
  } catch (e) {
    console.log("ERROR!!", e);
  }
};
momJoke();

const play = {
  title: "VIIBII",
  pause() {
    console.log(this);
  },
};
play.pause();

function Font() {
  console.log(this);
}

Font();
