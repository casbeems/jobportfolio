import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a business analyst, I have always been passionate about being the communicational bridge between people. 
            I have a strong foundation in the broad aspects on computer science, with a focus on web
            technologies, cyber security and large data. I especially enjoy working in multi-disciplinary teams as I get really energized from working with skilled enthusiastic people. 
          </p>
          <p>Throughout my (relatively short) career, I have worked on a various projects, from simple static websites to
            complex enterprise-level e-commerce applications. I am always eager
            to learn and explore new technologies, and I am constantly seeking out opportunities to improve
            my skills and knowledge.</p>

            <p>In my free time I enjoy making music 🎸, working out ⚽ or hanging with my friends 🍺.</p>
        </div>
        <div className="about-img">
          <Image src='/images/uke.jpg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;