import useTheme from '../../hooks/useTheme';

// eslint-disable-next-line react/prop-types
const NonsrollableLayout = ({ content }) => {
  const [theme] = useTheme();
  return (
    <div
      data-theme={theme}
      className="grid grid-cols-[20%_80%] min-h-screen "
    >
      {content}
      {/* Sidebar */}
      {/* <MdSidebar /> */}
      {/* Hero */}
      {/* <div className="grid grid-rows-1"> */}
      {/* <Hero /> */}
      {/* </div> */}
    </div>
  );
};

export default NonsrollableLayout;
