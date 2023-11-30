import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            
As a digital enthusiast, I'm passionate about communicating IT intricacies across disciplines. My strong foundation in computer science, emphasizing web technologies, cybersecurity, and large data, complements my enjoyment of working in multi-disciplinary teams. I thrive in the dynamic energy of collaborating with skilled professionals, fostering an environment where innovative solutions flourish.
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