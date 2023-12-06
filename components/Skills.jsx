const Skills = () => {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
          <div className="skill-card html">
            <i className="fa-solid fa-cash-register"></i>
            <p>e-Commerce</p>
          </div>
          <div className="skill-card css">
            <i className="fa-solid fa-gauge"></i>
            <p>PowerBI</p>
          </div>
          <div className="skill-card js">
            <i className="fas fa-briefcase"></i>
            <p>Agile P.M.</p>
          </div>
          <div className="skill-card react">
            <i className="fa-solid fa-shield-halved"></i>
            <p>Cyber Security</p>
          </div>
          <div className="skill-card html">
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>NextJS</p>
          </div>
          <div className="skill-card css">
            <i className="fa-brands fa-python python-icon"></i>
            <p>Python</p>
          </div>
          <div className="skill-card js">
            <i className="fa-solid fa-database"></i>
            <p>SQL</p>
          </div>
          <div className="skill-card react">
            <i className="fa-solid fa-magnifying-glass-chart"></i>
            <p>Business Analysis</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;