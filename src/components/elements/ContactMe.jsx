import { faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center gap-2 p-8 bg-base-200 text-center">
      <h1 className="text-2xl font-bold text-primary">Contact Me</h1>
      <p>For any inquiries, please don&apos;t hesitate to contact me using the link below.</p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <Link
          target="_blank"
          onClick={() => window.open('mailto:rmaulana12321@gmail.com')}
          className="btn btn-primary hover:text-white "
        >
          <FontAwesomeIcon icon={faEnvelope} /> Mail Me
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/rizkimaulana892/"
          className="btn btn-primary hover:text-white"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </Link>
        <Link
          target="_blank"
          to="https://x.com/rizkima666"
          className="btn btn-primary hover:text-white"
        >
          <FontAwesomeIcon icon={faXTwitter} /> X (Twitter)
        </Link>
        <Link
          target="_blank"
          to="https://wa.me/6281807963356"
          className="btn btn-primary hover:text-white"
        >
          <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
