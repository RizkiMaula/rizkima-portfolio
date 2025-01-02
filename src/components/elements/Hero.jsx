const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className=" flex flex-col w-[50%]">
            <h1 className="text-5xl font-bold">
              Hi! I am <b className="text-primary">Rizki Maulana</b>
            </h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
      </div>
    </>
  );
};

export default Hero;
