import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

const ContactMe = () => {
  return (
    <div className="h-screen bg-base-200">
      <div className="flex flex-col border-2 border-black lg:flex-row">
        <div className="flex flex-col gap-6 p-6 border-2 border-red-500 shadow rounded-2xl bg-base-200 text-tertiary">
          <h1 className="text-3xl font-bold">REACH ME OUT</h1>
          <p>Jakarta, Indonesia</p>
          <h1>
            <FontAwesomeIcon icon={faEnvelope} /> Rmaulana12321@gmail.com
          </h1>
          <div className="flex justify-center gap-2 ">
            <Link
              to="https://www.linkedin.com/in/rizkimaulana892/"
              target="_blank"
              className="btn"
            >
              LinkedIn
            </Link>
            <Link
              to="https://github.com/rizkimaula"
              target="_blank"
              className="btn"
            >
              Github
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-10 border-2 border-blue-500 shadow rounded-2xl bg-base-200">
          <div className="flex flex-col gap-4 md:flex-row">
            {' '}
            <label className="flex items-center gap-2 input input-bordered">
              Name
              <input
                type="text"
                className="grow"
                placeholder="Your Name"
              />
            </label>
            <label className="flex items-center gap-2 input input-bordered">
              Email
              <input
                type="text"
                className="grow"
                placeholder="example@site.com"
              />
            </label>
          </div>
          <textarea
            placeholder="Write Message Here"
            className="w-full textarea textarea-bordered textarea-lg"
          ></textarea>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
