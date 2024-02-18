import "./Footer.css";
import gitHubImage from "../../images/github.svg";
import facebookImage from "../../images/iconmonstr-facebook-6.svg";
import linkedInImage from "../../images/linkedIn.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        © 2024 Developed by Dominick Harper
      </div>
      <div className="footer__links">
        <a
          href="https://www.TripleTen.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>TripleTen</div>
        </a>
        <div>
          <div className="footer__link-images">
            <a
              href="https://www.linkedin.com/in/dominick-harper-44bb82259/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__image-github"
                src={linkedInImage}
                alt="LinkedIn logo"
              />
            </a>{" "}
            <a
              href="https://www.github.com/DominickDJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__image-github"
                src={gitHubImage}
                alt="Github logo"
              />
            </a>
            <a
              href="https://www.facebook.com/DaddieDJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__image-facebook"
                src={facebookImage}
                alt="Facebook logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
