import Card from '../fragments/Card';

const PortfolioContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold p-4 text-primary">Portfolio</h1>
      <div className="grid grid-cols-1 col-end-1 gap-[1rem] lg:grid-cols-3 md:grid-cols-2 p-4 ">
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
        <Card
          directLink="https://github.com/rizkimaula"
          img="https://robocuts.com/wp-content/uploads/2012/01/blog-im-1100x500.jpg"
        />
      </div>
    </div>
  );
};

export default PortfolioContent;
