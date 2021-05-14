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
 

  

  function OpenModal(e){

 e.target.className==="text-primary"? e.target.className="text-success": e.target.className="text-primary";

  }

  // function ShowPlusIcon(e){
  //   document.getElementById(e).style.backgroundColor='gray';
    
  // }
  // function RemovePlusIcon(e){
  // document.getElementById(e).style.backgroundColor='';
   
  // }

  


//  const gallery="hello";

  const gallery = results.data.map((x) => (

    <div className=" col-md-4 col-sm-6">
      <Card   className="m-3 imageCard ">
      <i class="fas fa-plus plusIcon"></i>
        <Card.Img variant="top" src={x.imageURL} />
        <Card.Body>
        
          <Card.Title>{x.title}</Card.Title>
          <Card.Text>
           Created by {x.artist} and installed on {x.yeaR_INSTALLED}.
           {x.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Located at {x.location} in {x.warD_FULLNAME}</small>
        </Card.Footer>
      </Card>
    </div>
  ));
  
if (results.loading==false) {
    return <Row className="artwork">{gallery}</Row>;
}

else{
    return <Row><h2>Loading</h2></Row>;
}

}

export default Gallery;
