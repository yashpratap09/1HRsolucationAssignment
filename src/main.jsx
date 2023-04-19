import React from 'react'
import ReactDOM from 'react-dom/client'

import PaginatedItems from "./components2/PaginatedItems";
import { BrowserRouter, Routes, Route ,HashRouter} from "react-router-dom";
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  
  <Routes>

    <Route path='/' element={ <Home />}/>
    {/* <Route path='/blogs' element={ <GetAllBlogs />}/>
    <Route path='/authors' element={ <Authorsregistration />}/> */}
    <Route path='/Pagination' element={ <PaginatedItems itemsPerPage={4}/>}/>

  </Routes>
  
  
  
  </BrowserRouter>
)
