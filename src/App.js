import React,{useState, useEffect}from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const person =['naym','hridoy','yubar','mamun']
  const pjob = ['desiner','developer', 'fucker']
  const pfood = ['chicken', 'mutton']
  const products= [{name: 'photoshop', price: '$90.99'},
                  {name: "illustrator",price:'$6.99'},
                  {name: 'PDF Reader', price: '$5.99'},
                  {name: 'Premire El', price: '$249.99'}
]
  //const productsNames= products.map(product => product.name)
  //console.log(productsNames);
  //const personNames = person.map(person => person);
  //
  //console.log(personNames)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>My firsr React APP</h3>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            products.map(product=><li>{product.name}</li>)
          }
          {
            person.map(Person => <li>{Person}</li>)
          }
          <li>{person[0]}</li>
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Person name="Anik" food="Ammar hater Ranna" job="Full stack web developer"></Person>
        <Person name="Shakawat" food="mutton" job="Font-End Developer"></Person>
        <Person name="Sifat" food="Chicken" job="Desiner"></Person>
        <Person name={person[0]} food={pfood[0]} job={pjob[2]}></Person>
        <p>I am React Person</p>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount]= useState(10);
  const handleIncrease = () => setCount(count+1);
  // const handleIncrease = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return(
    <div>
      <h1>count: {count}</h1>
     
      <button onClick={handleIncrease}>Increase</button> <br/>
      <button onClick={() =>setCount(count-1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    //console.log("calling Effact")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data=>setUsers(data));

  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}, {user.phone}, {user.email}</li>)
        }
      </ul>

    </div>
  )

}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:"300px",
    width:"200px",
    float:'left'
  }

  const  {name, price} =props.product;
  console.log(name,price)
  
  return(
    <div style={productStyle}>
        <h3>{name}</h3>
      <h2>{price}</h2>
        <button>Buy now</button>
    </div>
  )
}
function Person(props){
 
  console.log(props)
  return (
  <div style={{border:"2px solid gold", width:'400px', margin:"10px", padding:"5px"}}>
    <h1>Name: {props.name}</h1>
  <h3>Job: {props.job}</h3>
  <h3>food:{props.food}</h3>
  </div>
  )
}
export default App;
