import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faInfoCircle, faList, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

const MdSidebar = () => {
  return (
    // <div className="sticky top-0 h-screen px-4 py-3 bg-gray-800 text-white">
    <div className="md:flex flex-col justify-between min-h-screen px-4 py-3 text-primary hidden">
      <h1 className="text-3xl text-bold ">RM</h1>

      <ul className="w-full menu rounded-box  ">
        <li className="py-2 text-left">
          <a href="#">
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faHome}
            />
            Home
          </a>
        </li>
        <li className="py-2 text-left">
          <a>
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faInfoCircle}
            />
            About
          </a>
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
          <a>
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faEnvelope}
            />
            Contact Me
          </a>
        </li>
      </ul>
      <div>
        <div className="flex flex-col justify-center gap-4 w-5">
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
        <p className="text-center text-sm">
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
