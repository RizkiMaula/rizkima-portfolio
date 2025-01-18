import Card from '../fragments/Card';
import port1 from '../../assets/gempor.jpg';
import port2 from '../../assets/foodie.jpg';
import port3 from '../../assets/soto.jpg';

const PortfolioContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="p-4 text-2xl font-bold text-primary">Portfolio</h1>
      <div className="grid grid-cols-1 gap-[1rem]  p-4 ">
        <Card
          directLink="https://gempor-travel.vercel.app/"
          img={port1}
          title="Gempor Travel Website"
          description="This site is a travel website. Made by React.js, Tailwindcss, Material Tailwind Framework and with API from DibimbingAPI. The site is responsive and has a dark mode. This site is My Final Project for the Front-End Web Developer Bootcamp at Dibimbing.id and get score 80."
          stacks={
            <div className="flex gap-2">
              <div className="badge badge-neutral">React.js</div>
              <div className="badge badge-neutral">TailwindCSS</div>
              <div className="badge badge-neutral">Axios</div>
              <div className="badge badge-neutral">Redux</div>
            </div>
          }
        />
        <Card
          directLink="https://foodie-doodie.vercel.app/"
          img={port2}
          title="Foodie Doodie"
          description="This site is a food list from DibimbingAPI. This site is one of my assignments for the Front-End Web Developer Bootcamp at Dibimbing.id. The site made by Next.js and it has two ways rendering, Client Side Rendering (CSR) and Server Side Rendering (SSR) for comparison."
          stacks={
            <div className="flex gap-2">
              <div className="badge badge-neutral">Next.js</div>
              <div className="badge badge-neutral">TailwindCSS</div>
              <div className="badge badge-neutral">Axios</div>
            </div>
          }
        />
        <Card
          directLink="https://bu-karti-soto-ayam.vercel.app/"
          img={port3}
          title="Soto Ayam Bu Karti"
          description="This site is a restaurant website. This site is one of my assignments for the Front-End Web Developer Bootcamp at Dibimbing.id. This site is my first project using TailwindCSS."
          stacks={
            <div className="flex gap-2">
              <div className="badge badge-neutral">HTML</div>
              <div className="badge badge-neutral">CSS</div>
              <div className="badge badge-neutral">TailwindCSS</div>
              <div className="badge badge-neutral">Javascript</div>
            </div>
          }
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
