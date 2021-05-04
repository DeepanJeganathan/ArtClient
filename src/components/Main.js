import { Container, Jumbotron } from "react-bootstrap";

function Main() {
  return (
    <>
      <Jumbotron fluid className="bg-light">
        <Container>
          <h1>Discover Toronto's Art</h1>
          <p>
            Browse through catalog of Toronto Art scattered throughout the city
          </p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Main;
