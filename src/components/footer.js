export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/trendles_iiitk/?hl=en">
        <button className="icon">
          <i className="fa-brands fa-instagram"></i>
        </button>
      </a>

      <a href="mailto:trendles@iiitkottayam.ac.in">
        <button className="icon">
          <i className="fab fa-telegram-plane"></i>
        </button>
      </a>
      <a href="https://www.linkedin.com/company/trendles/">
        <button className="icon">
          <i className="fab fa-linkedin"></i>
        </button>
      </a>
      <br />
      <br />
      <br />
      <p>Copyright ©2024 All rights reserved</p>
      <p>
        <a className="hyper" href="">
          Terms & Conditions&nbsp;
        </a>
        |
        <a className="hyper" href="">
          Privacy Policy&nbsp;
        </a>
        |
        <a className="hyper" href="">
          DMCA
        </a>
      </p>
    </div>
  );
}
