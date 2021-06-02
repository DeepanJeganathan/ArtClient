import { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Jumbotron,
  Button,
  Pagination,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetch_art } from "../reducer/Art/artActions";

function Main() {

  const [searchValue, setSearchValue]=useState("");
  const pageCount = useSelector(state => state.total)/20;
  function HandleChange(e){
    setSearchValue(e.target.value);
 
  }

  let pageSelected = 1;
  const dispatch= useDispatch();
  function GetPage(e){
  let pageNumber= e.target.innerText;
  dispatch(fetch_art(pageNumber));
  pageSelected=pageNumber;
      
  }


  function HandleSubmit(e){
    e.preventDefault();
    dispatch(fetch_art(1,searchValue));
    setSearchValue("");
  }
 let active;
  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
     
      <Pagination.Item className=" d-flex col-1 justify-content-center" onClick={GetPage} key={number} active={pageSelected===active}>
        {number}
      </Pagination.Item>,
    );
  }
  
  const paginationBasic = (
    <div >
     
      <Pagination className="row justify-content-center col-10 offset-1 " size="sm">{items.splice(0,items.length/2)}</Pagination>
    
      <Pagination  className="row justify-content-center col-10 offset-1 " size="sm">{items}</Pagination>
     
     
      <br />
  
    </div>
  );

  return (
    <>
      <Jumbotron fluid className=" d-flex align-items-center">
        <Container>
          <h1>Discover Toronto's Art</h1>
          <p>Browse through Toronto's Art scattered throughout the city</p>
          <Form  className="justify-content-center " onSubmit={HandleSubmit} inline>
            <FormControl   type="text" placeholder="Search" onChange={HandleChange} value={searchValue} className="col-10 " />
            <Button className="m-2"  type='submit' variant="outline-light">Search</Button>
          </Form>
        </Container>
      </Jumbotron>

     {paginationBasic}
    </>
  );
}

export default Main;
