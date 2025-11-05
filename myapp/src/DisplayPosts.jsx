import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./redux/postSlice";
import { useNavigate } from "react-router-dom";
const DisplayPosts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const [expandedBodyId, setExpandedBodyId] = useState(null);
  const [expandTitleId, setExpandTitleId] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const toggleBody = (id) => {
    setExpandedBodyId(expandedBodyId === id ? null : id);
  };
  const toggleTitle = (id) => {
    setExpandTitleId(expandTitleId === id ? null : id);
  };
  function goToPost(id){
    navigate(`/singlepost/${id}`)

  }
  if(loading){
    return <div className="loader"></div>
  }
  if(error){
    return <p>{error}</p>
  }
  return (
    <div>
      <div className="post-container">
        {posts &&
          posts.map((item) => (
            <div className="post-card" onClick={()=>goToPost(item.id)}>
              <img src={`https://picsum.photos/200?random=${item.id}`} />
              <p>
                <b>User ID:</b>
                {item.userId}
              </p>
              <div className="read-container" onClick={(e)=>e.stopPropagation()}>
                <p>
                  <b>Title : </b>{" "}
                  {expandTitleId === item.id
                    ? item.title
                    : item.title.slice(0, 20) + "..."}
                </p>
                <button
                  className="read-btn"
                  onClick={() => toggleTitle(item.id)}
                >
                  {expandTitleId === item.id ? "Read Less" : "Read More"}
                </button>
              </div>
              <div className="read-container" onClick={(e)=>e.stopPropagation()}>
                <p>
                  <b>Body :</b>{" "}
                  {expandedBodyId === item.id
                    ? item.body
                    : item.body.slice(0, 30) + "..."}
                </p>

                <button
                  className="read-btn"
                  onClick={() => toggleBody(item.id)}
                >
                  {expandedBodyId === item.id ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayPosts;
