import React from "react";
import FactsCard from "./FactsCard";
import App from "../App";


const FactsComponent = ({ Facts }) => {
  
    // console.log(Facts)
  return (

    
    
  <div>
     
   <div>
    {<App/>}
   </div>

{Facts.map((curVal, id) => {
  curVal.id = id
  return <FactsCard key={id} data={curVal} />;
})}
  </div>
 
   
  );
};

export default FactsComponent;