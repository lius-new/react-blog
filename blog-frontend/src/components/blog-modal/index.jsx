import style from "./blogModal.module.scss";
import ReactModal from "react-modal";

ReactModal.setAppElement(document.getElementById("root"));

export default ({ show, setShow, children }) => {
  return (
    <ReactModal
      isOpen={show || false}
      contentLabel="blog content"
      className={style["modal"]}
      overlayClassName={style["overlay"]}
    >
      {children}
      <div className={style["close-wrapper"]}>
        <button className={style["close-btn"]} onClick={() => setShow(false)}>
          阅读完毕
        </button>
      </div>
    </ReactModal>
  );
};
