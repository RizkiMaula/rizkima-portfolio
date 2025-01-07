import MdSidebar from './MdSidebar';

// eslint-disable-next-line react/prop-types
const ScrollableLayout = ({ sidebar = <MdSidebar />, content }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[20%_80%] min-h-screen">
      <div className="sticky hidden md:grid top-0 h-screen text-white">{sidebar}</div> {/* Sidebar harus h-screen biar gak ngikut ke  */}
      <div className="grid grid-rows-1">{content}</div>
    </div>
  );
};

export default ScrollableLayout;
