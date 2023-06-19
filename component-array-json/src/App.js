import React, { useState } from "react";
import People from "./People";

// Create pattern or card
const PersonCard=(person)=>{  
    return(
        <>      
        {/* attribute 1. See the curly braces     */}
        <h1>{person.name}</h1> 
        {/* attribute 2. See the curly braces */}
        <h1>{person.age}</h1>    
        </>
       );
}

const Main=()=>{
    // define the State of variable searchTerm
    const [searchTerm, setsearchTerm]=useState('');  
   
    return(
    //Necessary if we have more that one element
    <>       
    <h1>
        {/* Import component exported from the json file and print name */}
        {People[0].name}   
        {/* Map each of the people in the json file and map with card       */}
        {People.map(PersonCard)}  

    </h1>
    <div>
    {/* Insert an input of the class text */}
    <input                       
    placeholder="Search"
    value={searchTerm}
    // It is stored in value all the info that we insert into the text
    onChange={(e)=>setsearchTerm(e.target.value)}   
    />
    <button onClick={()=>setsearchTerm(searchTerm)}> 
        {searchTerm}       
    </button>
    </div>
    
    </>);


}

export default Main;

