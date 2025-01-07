import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faInfoCircle, faList, faMoon, faQuestionCircle, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import useTheme from '../../hooks/useTheme';

// eslint-disable-next-line react/prop-types
const MdSidebar = ({ paddingY = 'py-3' }) => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`flex-col justify-between hidden min-h-screen px-4 ${paddingY} md:flex text-primary bg-base-300`}>
      <h1 className="text-3xl text-bold ">RM</h1>

      <ul className="w-full menu rounded-box ">
        <li className="py-2 text-left">
          <Link to={'/'}>
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faHome}
            />
            Home
          </Link>
        </li>
        <li className="py-2 text-left">
          <Link to={'/about'}>
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faInfoCircle}
            />
            About
          </Link>
        </li>
        <li className="py-2 text-left">
          <Link to={'/what-can-i-do'}>
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faQuestionCircle}
            />
            What Can I Do?
          </Link>
        </li>
        <li className="py-2 text-left">
          <Link to={'/portfolio'}>
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faList}
            />
            Portfolio
          </Link>
        </li>
        <li className="py-2 text-left">
          <Link to={'/contact'}>
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faEnvelope}
            />
            Contact Me
          </Link>
        </li>
      </ul>
      <div>
        <div className="flex justify-center w-full gap-4">
          <div
            className="tooltip"
            data-tip="X"
          >
            <button
              onClick={() => {
                window.open('https://twitter.com/rizkima666', '_blank');
              }}
              className="btn btn-circle"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </button>
          </div>
          <div
            className="tooltip"
            data-tip="LinkedIn"
          >
            <button
              onClick={() => {
                window.open('https://www.linkedin.com/in/rizkimaulana892/', '_blank');
              }}
              className="btn btn-circle"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </div>
          <div
            className="tooltip"
            data-tip="Github"
          >
            <button
              onClick={() => window.open('https://github.com/rizkimaula', '_blank')}
              className="btn btn-circle"
            >
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => toggleTheme()}
            className="btn btn-circle"
          >
            {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
          </button>
          <button
            onClick={() => window.open('https://github.com/rizkimaula', '_blank')}
            className="btn btn-circle"
          >
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
        <div className="divider"></div>
        <p className="text-sm text-center">
          Made with ❤️ by{' '}
          <Link
            to="https://daisyui.com/"
            target="_blank"
            className="link link-hover"
          >
            Rizki Maulana
          </Link>{' '}
          with{' '}
          <Link
            to="https://daisyui.com/"
            target="_blank"
            className="link link-hover"
          >
            Daisy UI
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MdSidebar;
