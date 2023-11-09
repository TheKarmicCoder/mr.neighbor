// Import necessary dependencies
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa';
import "../css/about.css";
const About = () => {
  return (
    <section className="about">
      <h2 className="about-title">About Us</h2>
      <p>Learn about our landscaping company and the technologies we use.</p>

      {/* Technologies Section */}
      <div className="technologies">
        <h3>Technologies We Use</h3>

        {/* Single Technology Item */}
        <div className="technology-item">
          <FaHtml5 />
          <p>HTML</p>
        </div>

        <div className="technology-item">
          <FaCss3Alt />
          <p>CSS</p>
        </div>

        <div className="technology-item">
          <FaJs />
          <p>JavaScript</p>
        </div>

        <div className="technology-item">
          <FaReact />
          <p>React</p>
        </div>

        <div className="technology-item">
          <FaNode />
          <p>Node.js</p>
        </div>

        <div className="technology-item">
          <FaDatabase />
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default About;
