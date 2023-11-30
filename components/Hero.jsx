import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/cute.jpg' className="profile-img" width={300} height={300} alt="Cas's personal headshot" />
      <div className="hero-text">
        <h1>Hi, I'm Cas <span className="waving-emoji">👋</span></h1>
        <p>
          I'm a digital enthusiast based in Leiden, The Netherlands. I specialize in business analysis, agile portfolio management, big data, cyber security and more! 
        </p>
        <p>

        Wait ... do all those things count as a specialization? I guess I am a generalist at heart.
        </p>
        <div className="social-icons">
          <a
            href="mailto:casbeems@live.nl"
            aria-label="Outlook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/casbeems/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div class="scroll-down-dude"></div>
      </div>
    </div>
  )
}
<script src="script.js"></script>
export default Hero;