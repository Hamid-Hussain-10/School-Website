import "./Footer.css";

function Footer() {
  const socialLinks = [
    { platform: "facebook", url: "https://facebook.com/yourprofile", iconClass: "fab fa-facebook-f" },
    { platform: "twitter", url: "https://twitter.com/yourprofile", iconClass: "fab fa-twitter" },
    { platform: "instagram", url: "https://instagram.com/yourprofile", iconClass: "fab fa-instagram" },
    { platform: "linkedin", url: "https://linkedin.com/yourprofile", iconClass: "fab fa-linkedin-in" },
  ];

  return (
    <div className="bgc">
      <div className="footer">
        <h3>The Education Place</h3>
        <div className="footer-image">
          <img src="./images/footer-img.png" alt="footer" />
        </div>
        <div className="footer-content">
          <h4>Get In Touch</h4>
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="para">&copy; 2024 AQMPS. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
