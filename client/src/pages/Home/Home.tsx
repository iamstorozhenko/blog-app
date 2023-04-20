import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/app/store";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import "./Home.css";

interface IPostUser {
  _id: string;
  name: string;
}

interface IPost {
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

  return (
    <div>
      <Header name={user?.name} />
      <div className="wrapper">
        <div className="left"></div>
        <div className="middle">
          <div className="posts">
            {posts.map((post) => (
              <div key={post._id} className="card-wrapper">
                <div className="card-header-wrapper">
                  <h2>{post.user.name}</h2>
                  <div>
                    <button className="edit-btn">x</button>
                    <button className="delete-btn">-</button>
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
