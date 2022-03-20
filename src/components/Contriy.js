import React from 'react';
import './Contriy.css'
const Countryis = (props) => {
    const {area , region ,population, name , flags} = props.country
    return (
        <div className='country'>

            {console.log(props)}
            <h1> country name:{name.common} </h1>
             <img src={flags.png} alt="" />
            <h4><small> population : {population}</small></h4>
            <h5><small>  Region: {region}</small></h5>
            <h6><small>  area: {area}</small></h6>

            {/* <h1> country name:{props.country.name.common} </h1>
            <h1><small> population : {props.country.population}</small></h1>
            <h1><small>  Region: {props.country.region}</small></h1>
            <h1><small>  area: {props.country.area}</small></h1> */}
            
        </div>
    );
};

export default Countryis;