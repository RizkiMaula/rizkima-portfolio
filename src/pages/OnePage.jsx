import { Element } from 'react-scroll';
import AboutMe from '../components/elements/AboutMe';
import Education from '../components/elements/Education';
import DoContent from '../components/elements/DoContent';
import PortfolioContent from '../components/elements/PortfolioContent';
import ContactMe from '../components/elements/ContactMe';
import ScrollableLayout from '../components/elements/ScrollableLayout';

const OnePage = () => {
  return (
    <ScrollableLayout
      content={
        <>
          <Element name="about-me">
            <AboutMe />
          </Element>

          <Element name="education">
            <Education />
          </Element>

          <Element name="do-content">
            <DoContent />
          </Element>

          <Element name="portfolio">
            <PortfolioContent />
          </Element>

          <Element name="contact-me">
            <ContactMe />
          </Element>
        </>
      }
    />
  );
};

export default OnePage;
