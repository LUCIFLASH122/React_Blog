import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BlogPost() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("https://jobpost.up.railway.app/blog"); // Replace with actual URL if needed
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setBlogData(data.blogs || []);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  const handleClick = (id) => {
    navigate(`/blog/${id}`); // Navigate using blog id
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="blog-list">
      {blogData.length > 0 ? (
        blogData.map((blog) => (
          <li
            key={blog.id}
            className="blog-item"
            onClick={() => handleClick(blog.id)} // Pass blog id here
            style={{ cursor: "pointer" }}
          >
            <div className="blog-title">{blog.title}</div>
            <div className="blog-batch">{blog.batch}</div>
            <div className="blog-body">{blog.body}</div>
          </li>
        ))
      ) : (
        <li>No blogs available</li>
      )}
    </ul>
  );
}

export default BlogPost;
