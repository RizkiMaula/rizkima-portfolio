import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faInfoCircle, faList, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

// eslint-disable-next-line react/prop-types
const MdSidebar = ({ paddingY = 'py-3' }) => {
  return (
    // <div className="sticky top-0 h-screen px-4 py-3 text-white bg-gray-800">
    <div className={`flex-col justify-between hidden min-h-screen px-4 ${paddingY} md:flex text-primary`}>
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
          <a>
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faQuestionCircle}
            />
            What Can I Do?
          </a>
        </li>
        <li className="py-2 text-left">
          <a>
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faList}
            />
            Portfolio
          </a>
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
        <div className="flex flex-col justify-center w-5 gap-4">
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
      {/* </div> */}
    </div>
  );
};

export default MdSidebar;
