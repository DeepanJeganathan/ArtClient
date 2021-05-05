import {
  Container,
  Form,
  FormControl,
  Jumbotron,
  Button,
} from "react-bootstrap";

function Main() {
  return (
    <>
      <Jumbotron fluid className=" d-flex align-items-center">
        <Container>
          <h1>Discover Toronto's Art</h1>
          <p>
            Browse through catalog of Toronto Art scattered throughout the city
          </p>
          <Form className="justify-content-center" inline>
            <FormControl type="text" placeholder="Search" className="col-10 " />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Main;
