import AboutMe from '../components/elements/AboutMe';
import Education from '../components/elements/Education';
import ScrollableLayout from '../components/elements/ScrollableLayout';

const About = () => {
  return (
    <ScrollableLayout
      content={
        <>
          <AboutMe />
          <div className="divider bg-base-200"></div>
          <Education />
        </>
      }
    />
  );
};

export default About;
