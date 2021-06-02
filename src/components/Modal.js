import { createPortal } from 'react-dom'
import icon from '../images/mapIcon.png'
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'
import { Card } from 'react-bootstrap';

const modalElement = document.getElementById('modal-root');

function Modal({ x }) {

  function ShowCommentForm(id) {
    let form = document.querySelector(`.comment-form-${id} >form`);
    let addComment = document.querySelector(`.comment-form-${id} `).firstChild;
    if (form.style.display === 'block') {
      form.style.display = 'none';
    }
    else {
      form.style.display = 'block';
    }
  }

  let location = x.location.split(' ').join('+');

  function CloseModal() {
    const modalSelected = document.getElementById(`modal-${x.artModelId}`);
    const overlay = document.getElementById('overlay');
    modalSelected.classList.remove('active')
    overlay.classList.remove('active')
  }


  return createPortal(<>
    <div className="artwork-modal" id={`modal-${x.artModelId}`}>
      <div className="modal-header mb-3"> <button onClick={() => CloseModal(x)} className="close-button">&times;</button>
        <div className=" modal-title "><h2 className="display-4">{x.title}</h2></div>
      </div>
      <div className="modal-image ">
        <img src={x.imageURL} alt="artwork"></img>
      </div>
      <div className="modal-description">
        <Card className="modal-card mb-3">
          <Card.Body>
            <h4 >About</h4>
            <p>Created by {x.artist} and installed on {x.yeaR_INSTALLED}.{x.description}</p>
            <div className="modal-details">
              <dl className="row">
                <dt className="col-sm-3">Location: </dt>
                <dd className="col-sm-9 col-xs-12 d-flex justify-content-start">{x.location}
                  <div className="map-icon ml-4">
                    <a href={`https://www.google.com/maps/search/${location} `}>
                      <img src={icon} alt="icon" width="50" height="50"></img> Map</a>
                  </div>
                </dd>
                <dt className="col-sm-3 ">Ward:</dt>
                <dd className="col-sm-9">
                  {x.warD_FULLNAME}
                </dd>
                <dt className="col-sm-3">Status:</dt>
                <dd className="col-sm-9">
                  {x.status}
                </dd>

                <dt className="col-sm-3">Commissioned By:</dt>
                <dd className="col-sm-9">{x.commissionedBy}</dd>
              </dl>

            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="modal-footer d-flex justify-content-start">
        <div className="comment col-md-8">
          <div className="comment-title mb-3 text-secondary align-items-center d-flex justify-content-between">
            <h4>Comments</h4>
            <i onClick={() => ShowCommentForm(x.artModelId)} className="ml-2 text-primary fas fa-plus">Add Comment</i>
          </div>
          <div className={`comment-form-${x.artModelId}`}>
            <CommentForm id={x.artModelId} />
          </div>
          <Comment artId={x.artModelId} />
        </div>
      </div>
    </div>
  </>, modalElement)
}
export default Modal