import Hero from '../components/elements/Hero';
import ScrollableLayout from '../components/elements/ScrollableLayout';

const Testing = () => {
  return (
    <ScrollableLayout
      content={
        <div>
          <Hero />
          <Hero />
          <Hero />
          <Hero />
        </div>
      }
    />
  );
};

export default Testing;
