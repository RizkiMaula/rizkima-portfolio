import { faBars, faEnvelope, faHome, faInfoCircle, faList, faMoon, faQuestionCircle, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import useTheme from '../../hooks/useTheme';

const Hamburger = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="flex items-center justify-between px-4 bg-base-200 md:hidden">
      <h1 className="text-3xl text-bold">RM</h1>
      <button
        className="btn"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <dialog
        id="my_modal_3"
        className="modal"
      >
        <div className="modal-box">
          <form method="dialog">
            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
          </form>
          <h3 className="text-lg font-bold">Menu</h3>

          <ul className="w-full menu rounded-box ">
            <li className="py-2 text-left">
              <Link
                to="about-me"
                smooth
                duration={500}
              >
                <FontAwesomeIcon
                  className="w-5 h-5"
                  icon={faHome}
                />
                Home
              </Link>
            </li>
            <li className="py-2 text-left">
              <Link
                to="about-me"
                smooth
                duration={500}
              >
                <FontAwesomeIcon
                  className="w-5 h-5"
                  icon={faInfoCircle}
                />
                About
              </Link>
            </li>
            <li className="py-2 text-left">
              <Link
                to="do-content"
                smooth
                duration={500}
              >
                <FontAwesomeIcon
                  className="w-5 h-5"
                  icon={faQuestionCircle}
                />
                What Can I Do?
              </Link>
            </li>
            <li className="py-2 text-left">
              <Link
                to="portfolio"
                smooth
                duration={500}
              >
                <FontAwesomeIcon
                  className="w-5 h-5"
                  icon={faList}
                />
                Portfolio
              </Link>
            </li>
            <li className="py-2 text-left">
              <Link
                to="contact-me"
                smooth
                duration={500}
              >
                <FontAwesomeIcon
                  className="w-5 h-5"
                  icon={faEnvelope}
                />
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => toggleTheme()}
            className="btn btn-circle"
          >
            {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Hamburger;
