import { Card, CardDeck, Row } from "react-bootstrap";
import bird from "../images/bird.png";

function Gallery() {
  const data = [
    { name: "john", age: 28 },
    { name: "bobn", age: 38 },
    { name: "lohn", age: 28 },
    { name: "john", age: 28 },
    { name: "bobn", age: 38 },
    { name: "lohn", age: 28 },
    { name: "john", age: 28 },
    { name: "bobn", age: 38 },
    { name: "lohn", age: 28 },
  ];

  const gallery = data.map((x) => (
    <div className="col-4">
      <Card className="m-3">
        <Card.Img variant="top" src={bird} />
        <Card.Body>
          <Card.Title>{x.name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <Row>{gallery}</Row>;
}

export default Gallery;
