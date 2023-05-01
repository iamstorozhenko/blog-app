import React from "react";
import "./Modal.css";

interface IShowModal {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  text: string;
  title: string;
}

const ModalCreatePost: React.FC<IShowModal> = ({
  active,
  setActive,
  setText,
  setTitle,
  text,
  title,
  handleSubmit,
}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default ModalCreatePost;
