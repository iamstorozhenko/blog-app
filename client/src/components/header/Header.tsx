import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  logout,
  selectIsAuthenticated,
  selectUserId,
} from "../../features/auth/authSlice";
import { useAppDispatch } from "../../features/hooks/hooks";
import "./Header.css";
import ModalCreatePost from "../modal/ModalCreatePost";
import { IPost } from "../../pages/Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  name?: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

const Header: React.FC<HeaderProps> = ({
  name,
  active,
  setActive,
  setPosts,
}) => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userId = useSelector(selectUserId);
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleClick = () => {
    setActive(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3500/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: title,
        text: text,
        userId,
      }),
    });

    if (!response.ok) {
      console.log("Failed to create post");
      return;
    }

    const post = await response.json();
    console.log(post);

    setActive(false);
    setTitle("");
    setText("");

    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <header>
      <ModalCreatePost
        active={active}
        setActive={setActive}
        handleSubmit={handleSubmit}
        setTitle={setTitle}
        setText={setText}
        text={text}
        title={title}
      />
      <nav>
        <div className="logo">
          <a href="/">Blogster</a>
        </div>
        <div className="nav-links">
          <p>Hello, {name}</p>
          <ul>
            <li>
              <button onClick={handleClick} className="create-btn">
                Create Post
              </button>
            </li>
            {isAuthenticated && (
              <li>
                <button onClick={handleLogout} className="exit-btn">
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
