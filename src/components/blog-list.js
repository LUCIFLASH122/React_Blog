import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate instead of useHistory

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://jobpost.up.railway.app/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleClick = (title) => {
    navigate(`/blog/${title}`);
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul className="blog-list">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <li
              key={blog.id}
              className="blog-item"
              onClick={() => handleClick(blog.title)}
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
    </div>
  );
}

export default BlogList;
