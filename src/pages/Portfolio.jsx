import ScrollableLayout from '../components/elements/ScrollableLayout';
import PortfolioContent from '../components/elements/PortfolioContent';
const Portfolio = () => {
  return (
    <div>
      <ScrollableLayout
        content={
          <>
            <PortfolioContent />
          </>
        }
      />
    </div>
  );
};

export default Portfolio;
