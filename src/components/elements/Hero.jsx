const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="min-h-screen hero bg-base-200">
        <div className=" flex flex-col w-[75%]">
          <h1 className="text-5xl font-bold">
            Hi! I am <b className="text-primary">Rizki Maulana</b>
          </h1>
          <p className="py-6 text-justify">Web developer, based in Jakarta. I am graduate from Universitas Indraprasta PGRI. I have a passion for web development. Click the button below to know more about me</p>
          <button
            onClick={() => {
              window.location.href = '/about';
            }}
            className="btn btn-primary"
          >
            My Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
