import react from  'react'
import {createPortal} from 'react-dom'
import icon from '../images/mapIcon.png'


const modalElement= document.getElementById('modal-root');

function Modal({x}){

  let location=x.location.split(' ').join('+');
  console.log(location)
    function CloseModal(){
        const modalSelected = document.getElementById(`modal-${x.artModelId}`);
        const overlay = document.getElementById('overlay');
        modalSelected.classList.remove('active')
        overlay.classList.remove('active')
    }
    

    return createPortal(<>
     <div className="artwork-modal" id={`modal-${x.artModelId}`}>
          <div className="modal-header"> <button onClick={() => CloseModal(x)} class="close-button">&times;</button>
            <div className="modal-title"><h2>{x.title}</h2></div>
          </div>
          <div className="modal-image">
            <img src={x.imageURL} alt="artwork"></img>
          </div>
          <div className="modal-description">
            <h4>About</h4>
            <p>Created by {x.artist} and installed on {x.yeaR_INSTALLED}.
           {x.description}</p>
           <div className="modal-details">
           <dl class="row">
  <dt class="col-sm-3">Location:</dt>
  <dd class="col-sm-9">{x.location}</dd>
  <dt class="col-sm-3">Ward:</dt>
  <dd class="col-sm-9">
    {x.warD_FULLNAME}
  </dd>
  <dt class="col-sm-3">Status:</dt>
  <dd class="col-sm-9">
    {x.status}
  </dd>

  <dt class="col-sm-3">Commissioned By:</dt>
  <dd class="col-sm-9">{x.commissionedBy}</dd>
</dl>

           </div>
          </div>         
         <div className="modal-footer">
         <div className="map-icon">
         <a href={`https://www.google.com/maps/search/${location} `}>
           <img src={icon} alt="icon" width="50" height="50"></img>
           view on map
         </a>
         </div>
      </div>
        </div>
    </>,modalElement)
}
 export default Modal