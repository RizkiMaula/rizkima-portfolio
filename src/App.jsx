import useTheme from './hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faQuestionCircle, faHome, faList, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router';
import Hero from './components/Hero';
import MdSidebar from './components/MdSidebar';

const App = () => {
  const [theme] = useTheme();

  return (
    <div
      data-theme={theme}
      className="grid grid-cols-[20%_80%] min-h-screen "
    >
      {/* Sidebar */}
      <MdSidebar />
      {/* Hero */}
      {/* <div className="grid  grid-rows-1"> */}
      <Hero />
      {/* </div> */}
    </div>
  );
};

export default App;

{
  /* <div className="py-2 text-left flex items-center  border-2 border-black">
{' '}
<label className="swap swap-rotate ">
  <input
    type="checkbox"
    className="theme-controller"
    value={theme}
    checked={theme === 'light'}
    onChange={toggleTheme}
  />

  <FontAwesomeIcon
    className="w-5 h-5 text-left fill-current swap-off"
    icon={faSun}
  />

  <FontAwesomeIcon
    className="w-5 h-5 text-left fill-current swap-on"
    icon={faMoon}
  />
</label>
<span>{theme}</span>
</div> */
}

{
  /* <div className="py-2 text-left flex items-center  border-2 border-black">
{' '}
<label className="swap swap-rotate ">
  <input
    type="checkbox"
    className="theme-controller"
    value={theme}
    checked={theme === 'light'}
    onChange={toggleTheme}
  />

  <FontAwesomeIcon
    className="w-5 h-5 text-left fill-current swap-off"
    icon={faSun}
  />

  <FontAwesomeIcon
    className="w-5 h-5 text-left fill-current swap-on"
    icon={faMoon}
  />
</label>
<span>{theme}</span>
</div> */
}
