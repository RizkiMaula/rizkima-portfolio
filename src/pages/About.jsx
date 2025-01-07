import AboutMe from '../components/elements/AboutMe';
import Education from '../components/elements/Education';
import ScrollableLayout from '../components/elements/ScrollableLayout';

const About = () => {
  return (
    <ScrollableLayout
      content={
        <>
          <AboutMe />
          <Education />
        </>
      }
    />
  );
};

export default About;
