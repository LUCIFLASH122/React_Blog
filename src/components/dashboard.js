import React, { useState } from "react";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [batch, setBatch] = useState("");
  const [body, setBody] = useState("");
  const [applyLink, setApplyLink] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [payRange, setPayRange] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      body,
      batch,
      applyLink,
      jobType,
      location,
      payRange,
    };

    const token = "YOUR_AUTaH_TOKEN";

    try {
      const response = await fetch("https://jobpost.up.railway.app/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newBlog),
      });

      const contentType = response.headers.get("content-type");
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${errorText}`);
      }

      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        setStatus("Blog post added successfully!");
        setTitle("");
        setBody("");
        setBatch("");
        setApplyLink("");
        setJobType("");
        setLocation("");
        setPayRange("");
        setError(null);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Add New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="batch">Batch:</label>
          <input
            type="text"
            id="batch"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="applyLink">Apply Link:</label>
          <input
            type="text"
            id="applyLink"
            value={applyLink}
            onChange={(e) => setApplyLink(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobType">Job Type:</label>
          <input
            type="text"
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="payRange">Pay Range:</label>
          <input
            type="text"
            id="payRange"
            value={payRange}
            onChange={(e) => setPayRange(e.target.value)}
          />
        </div>
        <button type="submit">Add Blog Post</button>
        {status && <p className="success-message">{status}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default Dashboard;
