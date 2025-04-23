import { faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import profile from '../../assets/profile.jpg';

const AboutMe = () => {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col gap-3 hero-content lg:flex-row">
        {/* img */}
        <div className="flex flex-col items-center justify-center w-[50%] gap-4 p-4  text-center">
          <img
            src={profile}
            className="object-cover w-40 rounded shadow-2xl h-w-40"
            alt="Rizki Maulana"
          />
          <h1 className="text-2xl font-bold text-primary">Rizki Maulana</h1>
          <h1>
            <span className="font-bold text-primary">Web Developer</span> based in <span className="font-bold text-primary">Jakarta</span>
          </h1>
          <Link
            to={'https://drive.google.com/file/d/1o3nWNJdw1T9fZPKTZ3-YtN46ljMKti1-/view?usp=sharing'}
            target="_blank"
            className="text-xs md:text-lg btn hover:bg-primary hover:text-white"
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
              className="text-primary hover:text-white"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> +62 818-0796-3356
            </Link>
            <Link
              target="_blank"
              to={'https://github.com/rizkimaula'}
              className="text-primary hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} /> github.com/rizkimaula
            </Link>
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
                Hi, I&apos;m Rizki Maulana, a computer science graduate from Universitas Indraprasta PGRI and recent graduate Frontend web Developer from Dibimbing.id Bootcamp. I&apos;m passionate about web development.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-3 ">
              <h1 className="font-bold text-primary">5+ Projects Completed</h1>
              <p className="text-justify">Since I learned programming, I have completed 5+ projects that I have worked on. I have completed 5+ projects that I have worked on. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
