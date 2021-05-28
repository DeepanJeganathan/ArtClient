import { useEffect, useState } from "react";
import { Card, Row, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import bird from "../images/bird.png";
import { fetch_art, fetch_count } from "../reducer/Art/artActions";
import Modal from './Modal'

function Gallery() {

  const results = useSelector(state => state);
  const dispatch = useDispatch();

  //execute on pageload
  useEffect(() => {
    console.log("use effect ran")
     fetch_data()
    fetch_total()
  }, [])

  const fetch_data = () => {
    dispatch(fetch_art());
  }

  const fetch_total = () => {
    dispatch(fetch_count());
  }

  function ShowModal(x) {

    const modalSelected = document.getElementById(`modal-${x.artModelId}`);
    const overlay = document.getElementById('overlay');
    modalSelected.classList.add('active')
    overlay.classList.add('active')
  }
  function CloseModal() {
    const modals = document.querySelectorAll('.artwork-modal');
    const overlay = document.getElementById('overlay');

    modals.forEach(x => x.classList.remove('active'))
    overlay.classList.remove('active')
  }
  function PreviewText(data) {
    if (data != null) {
      console.log(data.substring(0, 100) + "...")
      return data.substring(0, 50) + "..."
    }
  }

  //art work cards ui
  const gallery = results.data.map((x) => (
    <div className=" col-md-4 col-sm-6 col-xl-3 d-flex ">
      <Card className=" card-artwork m-2 imageCard ">
        <i className="fas fa-plus plusIcon" onClick={() => ShowModal(x)}></i>
        {/* modal begin */}
        <Modal x={x} />
        {/* modal end */}
        <Card.Img className="loading-spinner" variant="top" src={x.imageURL} />
        <Card.Body>
          <Card.Title>{x.title}</Card.Title>
          <Card.Text>
            Created by {x.artist} and installed on {x.yeaR_INSTALLED}.
           {PreviewText(x.description)}
            <div className="comments mt-2 d-flex justify-content-end">
              <text className="mr-2">Comments </text>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-quote" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
              </svg>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Located at {x.location} in {x.warD_FULLNAME}</small>
        </Card.Footer>
      </Card>
    </div>
  ));

  if (results.loading == false) {
    return <Row className="artwork">{gallery}<div id="overlay" onClick={CloseModal}></div></Row>;
  }
  else {
    return <Row><h2>Loading</h2></Row>;
  }
}

export default Gallery;
