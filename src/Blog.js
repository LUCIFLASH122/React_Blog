import "./styles.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import BlogPost from "./components/blog-post";

const blogList = [
  { text: "HOME", href: "/" },
  { text: "FOLLOW US!!", href: "#footer" },
  { text: "BLOGS", href: "/blog" },
];

export default function Blog() {
  return (
    <>
      <Nav items={blogList} />
      <BlogPost />
      <Footer />
    </>
  );
}
