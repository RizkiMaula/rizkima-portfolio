import MdSidebar from './MdSidebar';
import Hamburger from '../fragments/Hamburger';

// eslint-disable-next-line react/prop-types
const ScrollableLayout = ({ sidebar = <MdSidebar />, content }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[20%_80%] min-h-screen">
      <Hamburger className="md:hidden" />
      <div className="sticky top-0 hidden h-screen text-white md:grid">{sidebar}</div> {/* Sidebar harus h-screen biar gak ngikut ke  */}
      <div className="grid grid-rows-1">{content}</div>
    </div>
  );
};

export default ScrollableLayout;
