import Card from '../fragments/Card';
import port1 from '../../assets/gempor.jpg';

const PortfolioContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="p-4 text-2xl font-bold text-primary">Portfolio</h1>
      <div className="grid grid-cols-1 gap-[1rem]  p-4 ">
        <Card
          directLink="https://gempor-travel.vercel.app/"
          img={port1}
          title="Gempor Travel Website"
          description="This site is a travel website. Made by React.js, Tailwindcss, Material Tailwind Framework and with API from DibimbingAPI. The site is responsive and has a dark mode. The site is also responsive and has a dark mode."
        />
        <Card
          directLink="https://github.com/rizkimaula"
          img="https://robocuts.com/wp-content/uploads/2012/01/blog-im-1100x500.jpg"
        />
        <Card
          directLink="https://github.com/rizkimaula"
          img="https://robocuts.com/wp-content/uploads/2012/01/blog-im-1100x500.jpg"
        />
        <Card
          directLink="https://github.com/rizkimaula"
          img="https://robocuts.com/wp-content/uploads/2012/01/blog-im-1100x500.jpg"
        />
        <Card
          directLink="https://github.com/rizkimaula"
          img="https://robocuts.com/wp-content/uploads/2012/01/blog-im-1100x500.jpg"
        />
        <Card
          directLink="https://github.com/rizkimaula"
          img="https://robocuts.com/wp-content/uploads/2012/01/blog-im-1100x500.jpg"
        />
        <Card
          directLink="https://github.com/rizkimaula"
          img="https://robocuts.com/wp-content/uploads/2012/01/blog-im-1100x500.jpg"
        />
      </div>
    </div>
  );
};

export default PortfolioContent;
