import "./Modal.scss";

export default function Modal({
  details,
  closeModal,
  handleContinueButtonClick,
}) {
  if (!details) {
    return null;
  }

  const { header, text, actions, renderButton } = details;

  return (
    <div className="modal-part" onClick={closeModal}>
      <div
        className="modal-wrapper"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="header-part-modal">
          <div className="header-of-modal">{header}</div>
          <div className="header-close-button">
            {renderButton && (
              <button className="modal-close-button" onClick={closeModal}>
                X
              </button>
            )}
          </div>
        </div>
        <div className="modal-content">
          <div className="text-of-modal">{text}</div>
          <div className="actions-of-modal">
            <div className="actions-of-modal">
              {actions(closeModal, handleContinueButtonClick)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
