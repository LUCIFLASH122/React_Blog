import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams(); // Get the blog id from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`https://jobpost.up.railway.app/blog`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const data = await response.json();

        // Find the blog with the matching id
        const foundBlog = data.blogs.find((blog) => blog.id === parseInt(id)); // Ensure id is an integer
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          throw new Error("Blog not found");
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="blog-details">
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>Batch: {blog.batch}</p>
          <div>{blog.body}</div>
        </div>
      ) : (
        <p>No blog found</p>
      )}
    </div>
  );
}

export default BlogDetails;
