import { Card } from "react-bootstrap";


function Comment(){

    return (<>
     <Card border="light" style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Light Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
</Card.Text>
      </Card.Body>
    </Card></>)
}

export default Comment;