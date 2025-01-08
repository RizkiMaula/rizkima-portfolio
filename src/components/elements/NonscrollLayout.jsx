import Hamburger from '../fragments/Hamburger';
import MdSidebar from './MdSidebar';

// eslint-disable-next-line react/prop-types
const NonsrollableLayout = ({ sidebar = <MdSidebar />, content }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[20%_80%] min-h-screen ">
      {sidebar}
      <Hamburger className="md:hidden" />
      {content}
    </div>
  );
};

export default NonsrollableLayout;
