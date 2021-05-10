import { useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import bird from "../images/bird.png";
import { fetch_art } from "../reducer/Art/artActions";

function Gallery() {

   const results= useSelector(state=>state);
  const dispatch = useDispatch();

  useEffect(()=>{ 
    console.log("use effect ran")
fetch_data() 
  },[])

  const fetch_data=()=>{
    dispatch(fetch_art());
  }



//  const gallery="hello";

  const gallery = results.data.map((x) => (
    <div className="col-md-4 col-sm-6">
      <Card className="m-3">
        <Card.Img variant="top" src={x.imageURL} />
        <Card.Body>
        
          <Card.Title>{x.title}</Card.Title>
          <Card.Text>
           Created by {x.artist} and installed  on {x.yeaR_INSTALLED}.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{x.location}</small>
        </Card.Footer>
      </Card>
    </div>
  ));
if (results.loading==false) {
    return <Row>{gallery}</Row>;
}

else{
    return <Row><h2>Loading</h2></Row>;
}

}

export default Gallery;
