import React from "react";
import {
  MDBCard,
  MDBCardBody,
  
  MDBCardText,
  MDBCardHeader,
  
} from 'mdb-react-ui-kit';

const FactsCard = ({ data }) => {
  const { fact ,id} = data;
  // console.log(data)
  

  return (
    <MDBCard style={{backgroundColor:"ButtonShadow" ,border:"black solid",borderRadius:"50px"  }} alignment='center m-5'>
      <MDBCardHeader>{<h1>{id+1}</h1>}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardText>{fact}</MDBCardText>
      </MDBCardBody>
    
    </MDBCard>
  );
};

export default FactsCard;