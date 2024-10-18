// ModalContainer.js

import Overlay from './Overlay'

const ModalContainer = ({ showForm }) => {
  return (
    <>
      {open && (
        <Overlay>
          {showForm}  
        </Overlay>  
      )}
    </>
  )
}

export default ModalContainer 