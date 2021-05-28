import { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Jumbotron,
  Button,
  Row,
  ListGroup,
  Nav,
  Pagination,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetch_art } from "../reducer/Art/artActions";

function Main() {

  const [searchValue, setSearchValue]=useState("");
  const pageCount = useSelector(state => state.total)/20;
  function HandleChange(e){
    setSearchValue(e.target.value);
    console.log(searchValue)
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
      <Pagination.Item onClick={GetPage} key={number} active={pageSelected===active}>
        {number}
      </Pagination.Item>,
    );
  }
  
  const paginationBasic = (
    <div>
      <Pagination size="lg">{items}</Pagination>
      <br />
  
    </div>
  );

  return (
    <>
      <Jumbotron fluid className=" d-flex align-items-center">
        <Container>
          <h1>Discover Toronto's Art</h1>
          <p>Browse through Toronto's Art scattered throughout the city</p>
          <Form className="justify-content-center" onSubmit={HandleSubmit} inline>
            <FormControl type="text" placeholder="Search" onChange={HandleChange} value={searchValue} className="col-10 " />
            <Button  type='submit' variant="outline-light">Search</Button>
          </Form>
        </Container>
      </Jumbotron>

     {paginationBasic}
    </>
  );
}

export default Main;
