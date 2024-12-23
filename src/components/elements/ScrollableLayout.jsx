import Hero from './Hero';
import MdSidebar from './MdSidebar';

const ScrollableLayout = () => {
  return (
    <div className="grid grid-cols-[20%_80%] min-h-screen">
      {/* Sidebar */}
      <MdSidebar />
      {/* Hero */}
      <div className="grid grid-rows-1">
        <Hero />
      </div>
    </div>
  );
};

export default ScrollableLayout;
