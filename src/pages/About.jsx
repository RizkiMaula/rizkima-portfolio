import AboutMe from '../components/elements/AboutMe';
import Education from '../components/elements/Education';
import Hero from '../components/elements/Hero';
import ScrollableLayout from '../components/elements/ScrollableLayout';

const About = () => {
  return (
    <ScrollableLayout
      content={
        <div>
          <AboutMe />
          <Education />
          <Hero />
          <Hero />
        </div>
      }
    />
  );
};

export default About;
