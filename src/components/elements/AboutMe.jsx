import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

const AboutMe = () => {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col gap-3 hero-content lg:flex-row">
        {/* img */}
        <div className="flex flex-col w-[50%] gap-4 p-4 text-center">
          <img
            src="https://images.unsplash.com/photo-1725126210190-497eb2cfb6cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover w-full rounded shadow-2xl h-[289px]"
            alt="Rizki Maulana"
          />
          <h1 className="text-2xl font-bold text-primary">Rizki Maulana</h1>
          <h1>
            <span className="font-bold text-primary">Web Developer</span> based in <span className="font-bold text-primary">Jakarta</span>
          </h1>
          <Link
            to={'#'}
            className="btn hover:bg-primary hover:text-white"
          >
            Download CV <FontAwesomeIcon icon={faDownload} />
          </Link>
        </div>
        {/* content */}
        <div className="flex flex-col w-[95%]">
          {/* information */}
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
            <Link
              target="_blank"
              to={'https://wa.me/6281807963356'}
              className="text-primary hover:font-bold"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> +62 818-0796-3356
            </Link>
            <h1 className="text-primary">
              <FontAwesomeIcon icon={faEnvelope} /> rmaulana12321@gmail.com
            </h1>
            <h1 className="text-primary">
              <FontAwesomeIcon icon={faUser} /> 24 years old
            </h1>
            <h1 className="text-primary">
              <FontAwesomeIcon icon={faLocationDot} /> Jakarta, Indonesia
            </h1>
          </div>
          <div className="divider divider-neutral"></div>
          {/* introduction */}
          <div className="grid grid-cols-1 gap-5 p-1 md:grid-cols-2">
            <div className="flex flex-col gap-2 p-3">
              <h1 className="font-bold text-primary">Introduction</h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque perspiciatis debitis doloremque ipsum deleniti aut tempora. Ut dignissimos doloremque voluptas nisi natus a consectetur. Dignissimos optio eaque dolores
                quae ad.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-3 ">
              <h1 className="font-bold text-primary">5+ Projects Completed</h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nihil, vel dolor vitae iste, id cum commodi laudantium earum provident soluta architecto, voluptas natus velit ut beatae qui! Incidunt sapiente exercitationem
                animi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
