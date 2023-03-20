import logo from './logo.svg';
import './App.css';


const number = 5555;
const singer = { name: 'Dr.Mahfuz', job: 'Singer' };
const singer2 = { name: 'Eva Rahman', job: 'Singer2' };

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'

}

function App() {
  return (
    <div className="App">
      <Person name='Rubel'nayika='Moushumi'></Person>
      <Person name="BappaRaz"nayika = 'chekka'></Person>
      <Person nayika='Kopila'name='Kuber'></Person>
      <Person></Person>
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
