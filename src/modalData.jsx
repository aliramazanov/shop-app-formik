const modalData = [
  {
    id: "modalOne",
    header: "Confirmation Message",
    text: "Do you confirm adding this item to the basket? You can later remove it from the Basket page.",
    renderButton: true,
    actions: (closeModal, handleContinueButtonClick) => (
      <div>
        <button className="modal-action-buttons" onClick={closeModal}>
          Cancel
        </button>
        <button
          id="continueModalOne"
          className="modal-action-buttons"
          onClick={handleContinueButtonClick}
        >
          Continue
        </button>
      </div>
    ),
  },
  //Add more Modal Data as needed with IDs to utilize them in necessary places
];

export default modalData;
