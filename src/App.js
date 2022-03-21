
import './App.css';
import Country from './components/Countries/Country';



import Hedar from './components/Hedar/Hedar';
import Parson from './components/Parson/Parson';


function App() {
  return (
    <div className="App">
      <Hedar> </Hedar>
<Country> </Country>
<Parson> </Parson>

 
    </div>
  );
}

                                                                      









// pratace Old way 

// function LoadCountris(){
//   const [countries, setCountries ] = useState([]);
//  useEffect( () => {
//    fetch('https://restcountries.com/v3.1/all')
//    .then(rest => rest.json())
//    .then(data => setCountries(data));

//  },[])

//   return (
//     <div>
//  <h1> rest countres </h1> 
//  {console.log(countries)}

//  <h3> Avalilable countres: {countries.length} </h3>

// {
  
//   countries.map(country => <Country name = {country.name.common} population = {country.population}> </Country> )
// }

//     </div>
//   )
// }
// function Country(props){
//   return (
//     <div>

//       <h2>Name: {props.name} </h2>
//       <h2>population: {props.population} </h2>
//     </div>
//   )
// }


export default App;
