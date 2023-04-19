import Pagination from "./Pagination";
import { useEffect,useState} from 'react';
import axios from "axios";
import ReactPaginate from 'react-paginate';


function PaginatedItems({ itemsPerPage }) {

  const [items, setitems] = useState([] );
  const [query,setquery] = useState("")

    useEffect(() => {
        const fetchData = async () => {

            try {
                if(query.length==0){
                    const {data} = await axios.get(`https://2isz0zc3qk.execute-api.eu-central-1.amazonaws.com/staging/search?term=All`)
                  // console.log(data)
                    setitems(data.items)
                }else{
                    const {data} = await axios.get(`https://2isz0zc3qk.execute-api.eu-central-1.amazonaws.com/staging/search?term=${query}`)
                
                    setitems(data.items)
                }
                
                
            
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [query]);
    
    const [itemOffset, setItemOffset] = useState(0);
  
    
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
     
      setItemOffset(newOffset);
    };
  
    return (
      <>

      <div>
      <div className="search">
              <input type="text"
                     placeholder={"Search product..."}
                     className={"input"}
                     onChange={event => setquery(event.target.value)}
                     value={query}
              />
          </div>
      </div>

  


        <Pagination  currentItems={currentItems} />

       
        
        <ReactPaginate  className="page"
          breakLabel="......." 
          nextLabel=">>>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<<<"
          renderOnZeroPageCount={null}
          
        />
      
        
      </>
    );
  }

  export default PaginatedItems;