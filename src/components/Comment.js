import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function Comment({ artId }) {

  const comments = useSelector(state => state.comments);

  const ShowComments = comments.map(x => <Card.Body  key={x.commentId}>
    <Card.Title className="px-2 text-white bg-dark d-flex justify-content-between "><div>{x.name}</div> <div> {x.date.slice(0, 10)}</div></Card.Title>
    <Card.Text>
      {x.post}
    </Card.Text>
    <hr></hr>
  </Card.Body>)

  return (<>
    <Card  border="light" >
      {ShowComments}
    </Card></>)
}

export default Comment;