import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import ModalEditPost from "../../components/modal/ModalEditPost";
import "./Home.css";

interface IPostUser {
  _id: string;
  name: string;
}

export interface IPost {
  _id: string;
  title: string;
  text: string;
  user: IPostUser;
  createdAt: string;
  updatedAt: string;
  __v: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [modalEditPostActive, setModalEditPostActive] =
    useState<boolean>(false);
  const [modalCreatePostActive, setModalCreatePostActive] =
    useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.auth.user);

  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3500/posts");
      const data = await response.json();
      console.log(data);
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(isAuthenticated);
    fetchPosts();

    if (!isAuthenticated) {
      navigate("/login");
    } else {
      fetchPosts();
    }
  }, [isAuthenticated]);

  const handleDeletePost = async (postId: string) => {
    try {
      const response = await fetch(`http://localhost:3500/posts/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // Remove the deleted post from the posts array
        setPosts(posts.filter((post) => post._id !== postId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPost = async (postId: string) => {
    const postToEdit = posts.find((post) => post._id === postId);

    if (user?._id === postToEdit?.user._id) {
      setModalEditPostActive(true);
      setText(postToEdit?.text || "");
    } else {
      alert("You can only edit posts that you created.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3500/posts/${posts[0]._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ text }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setPosts((prevPosts) => {
          return prevPosts.map((post) => {
            if (post._id === posts[0]._id) {
              return {
                ...post,
                text: text || "",
              };
            } else {
              return post;
            }
          });
        });

        setModalEditPostActive(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ModalEditPost
        active={modalEditPostActive}
        setActive={setModalEditPostActive}
        handleSubmit={handleSubmit}
        text={text}
        setText={setText}
      />

      <Header
        name={user?.name}
        active={modalCreatePostActive}
        setActive={setModalCreatePostActive}
        posts={posts}
        setPosts={setPosts}
      />
      <div className="wrapper">
        <div className="left"></div>
        <div className="middle">
          <div className="posts">
            {posts.map((post) => (
              <div key={post._id} className="card-wrapper">
                <div className="card-header-wrapper">
                  <h2>{post.user.name}</h2>
                  <div>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditPost(post._id)}
                    >
                      x
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeletePost(post._id)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="text-container">
                  <h3>{post.text}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Home;
