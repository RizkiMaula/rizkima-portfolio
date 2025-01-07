import useTheme from '../../hooks/useTheme';
import MdSidebar from './MdSidebar';

// eslint-disable-next-line react/prop-types
const NonsrollableLayout = ({ sidebar = <MdSidebar />, content }) => {
  const [theme, setTheme] = useTheme();

  console.log(`dari layout: ${theme}`);

  return (
    <div
      data-theme={theme}
      className="grid grid-cols-[20%_80%] min-h-screen "
    >
      {/* {content} */}
      {/* Sidebar */}
      {sidebar}
      {/* Hero */}
      {/* <div className="grid grid-rows-1"> */}
      {content}
      {/* </div> */}
    </div>
  );
};

export default NonsrollableLayout;
