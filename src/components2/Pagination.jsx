import App from "../App";

function Pagination({ currentItems }) {
    
    // console.log(currentItems)


    return (
      <div >
         <div>
    {<App/>}
   </div >
   <div  style={{  display: "flex" , flexDirection:"column" ,alignItems:"center" }}>
       {currentItems &&
        currentItems.map((item,id) => (
          <div style={{ margin:"15px",padding:"2px", width:"35rem", height:"14rem" ,backgroundColor:"ButtonShadow",textAlign:"center",border:"black solid",borderRadius:"50px"}}  key={id}>
            <img style={{height:"50%"}} src={item.image}/>
            <h3>{item.name}</h3>
          </div>
        ))}
        </div>
      </div>
  );


}

export default Pagination;