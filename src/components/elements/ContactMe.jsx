import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center gap-2 p-8 bg-base-200">
      <h1 className="text-2xl font-bold text-primary">Contact Me</h1>
      <p>For any inquiries, please don&apos;t hesitate to contact me using the link below.</p>
      <div className="flex gap-2 border-2 border-black">
        <Link
          target="_blank"
          onClick={() => window.open('mailto:rmaulana12321@gmail.com')}
          className="btn btn-primary hover:bg-secondary hover:text-white"
        >
          <FontAwesomeIcon icon={faEnvelope} /> Mail Me
        </Link>
        <Link
          target="_blank"
          to="https://instagram.com"
          className="btn btn-primary hover:bg-secondary hover:text-white"
        >
          <FontAwesomeIcon icon={faEnvelope} /> Contact Me
        </Link>
        <Link
          target="_blank"
          to="https://instagram.com"
          className="btn btn-primary hover:bg-secondary hover:text-white"
        >
          <FontAwesomeIcon icon={faEnvelope} /> Contact Me
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
