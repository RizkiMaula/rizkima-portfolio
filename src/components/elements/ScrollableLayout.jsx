import useTheme from '../../hooks/useTheme';
import MdSidebar from './MdSidebar';

// eslint-disable-next-line react/prop-types
const ScrollableLayout = ({ sidebar = <MdSidebar />, content }) => {
  const [theme] = useTheme();
  return (
    <div
      data-theme={theme}
      className="grid grid-cols-[20%_80%] min-h-screen"
    >
      {/* Sidebar */}
      <div className="sticky top-0 h-screen text-white ">{sidebar}</div>

      {/* Hero */}
      <div className="grid grid-rows-1">{content}</div>
    </div>
  );
};

export default ScrollableLayout;
