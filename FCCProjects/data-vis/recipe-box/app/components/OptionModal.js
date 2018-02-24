import React from 'react';
import Modal from 'react-modal';
import styles from '../styles/modal.scss';

const OptionModal = (props) => {
  // console.log("hit from modal: ", props);
  return (
    <Modal
      isOpen={!!props.modal}
      onRequestClose={props.handleClearSelectedOption}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal-title">{props.selectedRecipe.title}</h3>
      {props.selectedRecipe && <ul className="modal-body">{props.selectedRecipe.ingredients.map((ingredient, index) => {
        return (
          <li key={index}>{ingredient}</li>
        )
      })}</ul>}
      <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
  );
}

export default OptionModal;