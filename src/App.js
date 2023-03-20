import logo from './logo.svg';
import './App.css';


const number = 5555;
const singers = [
  { name: 'Dr.Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'sopno' },
  { name: 'Shuvro', job: 'pathor' }
];


const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'

}

function App() {
  const nayoks = ['Rubel','BappaRaz','Kuber','jasim','Salman Shah','Riaz','Razzak','Anawar'];
  const naikas = ['sabnur','alia','sabana','saila','sabi','moushumi','purnima'];
  return (
    <div className="App">
     {
      nayoks.map(nayok=><li>Name: {nayok}</li>)
     }
      {/* {
        nayoks.map(nayok=><Person name={nayok}></Person>)
        
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      
      {/* <Person name={nayoks[0]} nayika='Moushumi'></Person>
      <Person name={nayoks[1]} nayika = 'chekka'></Person>
      <Person nayika='Kopila'name={nayoks[2]}></Person>
       */}
      <h5>New Component.YAY !!</h5>
      <p>Rock Mama ..React Mama</p>
      <Friend phone='01777'name='Ajay Devgon'></Friend>
      <Friend name=" amin khan"phone='01999'></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  
  return (
    <div className='person'>
    <h1>Name: {props.name}</h1>
    <p>Nayika: {props.nayika}</p>
  </div>

  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className='container'>
      <h3>Name:{props.name}</h3>
      <p>Phone: {props.phone}</p>
    </div>
    
    )
}

export default App;
