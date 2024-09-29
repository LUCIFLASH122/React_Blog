import React from "react";

export default function Nav({ items }) {
  return (
    <nav>
      <div className="nav-wrapper">
        <img
          className="top_img"
          src="https://ik.imagekit.io/07om3f7hz/WhatsApp%20Image%202024-08-25%20at%2011.54.10_b5e7d54d.jpg?updatedAt=1724568218766"
          alt="Top"
        />
        <ul className="right_nav">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={item.text === "HOME" ? "active" : ""}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
