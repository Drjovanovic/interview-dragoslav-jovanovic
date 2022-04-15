import "./BackdropModal.css";

function BackdropModal(props) {
  return <div className="backdropModal" onClick={props.onCancel} />;
}
export default BackdropModal;
