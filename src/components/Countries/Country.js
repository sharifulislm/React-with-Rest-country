import React, { useEffect, useState } from 'react';
import Countryis from '../Contriy';
import './Country.css'

const Country = () => {
    
      const [countries, setCountries ] = useState([]);
 useEffect( () => {
   fetch('https://restcountries.com/v3.1/all')
   .then(rest => rest.json())
   .then(data => setCountries(data));

 },[])
 return (
     <div >
<h1> Hello from countries:  {countries.length} </h1>


<div className='countries-container'>
{  

countries.map(country => <Countryis
     country = {country}
     key={country.cca3}
     // name={country.name.common}
     //  population={country.population}
     //  area={country.area}
     //  region={country.region}
      ></Countryis>)


}

</div>


{
     countries.map(country => console.log(<country name={country.common}> </country>))
}


     </div>
 )
};



export default Country;