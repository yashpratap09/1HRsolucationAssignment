
// import Pagination from "./components2/Pagination";
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit';
import {NavLink} from "react-router-dom"

const App = () => {
  
  return <div>
    <MDBContainer className="px-4">
      <MDBRow className="gx-5">
        <MDBCol>
          <div className="p-3"> <NavLink  to="/"><h3>List of Facts(Infinite scrolling)</h3></NavLink> </div>
        </MDBCol>
        <MDBCol>
          <div className="p-3"> <NavLink  to="/Pagination"><h3>List of Facts(Pagination with Searching)</h3></NavLink></div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
   
  </div>;
};

export default App;