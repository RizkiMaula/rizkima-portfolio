import Hero from './Hero';
import MdSidebar from './MdSidebar';

// eslint-disable-next-line react/prop-types
const ScrollableLayout = ({ sidebar = <MdSidebar paddingY="py-5" />, content }) => {
  return (
    <div className="grid grid-cols-[20%_80%] min-h-screen">
      {/* Sidebar */}
      <div className="sticky top-0 h-screen px-4 py-3 text-white ">{sidebar}</div>

      {/* Hero */}
      <div className="grid grid-rows-1">{content}</div>
    </div>
  );
};

export default ScrollableLayout;
