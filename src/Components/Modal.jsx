import './Modal.css';

function Modal({ message }) {
  return (
    <>
  <div className="modal">
    <p className="modal__title">{message}</p>
    <div className="modal__buttons">
      <button onClick={() => console.log('Cancel clicked')} className="btn btn__cancel">Cancel</button>
      <button onClick={() => console.log('Confirm clicked') } className="btn">Confirm</button>
    </div>
  </div>
  <div className="backdrop" />
</>
  );
}

export default Modal;