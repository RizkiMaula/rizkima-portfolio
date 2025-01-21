const DoContent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pt-5 text-2xl font-bold">What Can I Do?</h1>
      <div className="grid grid-cols-1 gap-2 p-10 md:grid-cols-2 place-items-center">
        <div className="flex flex-col w-full gap-2">
          <div className="collapse collapse-arrow bg-base-200">
            <input
              type="radio"
              name="my-accordion-2"
              defaultChecked
            />
            <div className="text-xl font-medium collapse-title">Build a Functional Website</div>
            <div className="collapse-content">
              <p>Make your website functional and responsive for your brand and your audience.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input
              type="radio"
              name="my-accordion-2"
            />
            <div className="text-xl font-medium collapse-title">Build a Simple Website</div>
            <div className="collapse-content">
              <p>Make a simple website for personal or business purpose.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input
              type="radio"
              name="my-accordion-2"
            />
            <div className="text-xl font-medium collapse-title">Build a Simple Java Application</div>
            <div className="collapse-content">
              <p>Make a simple java application for your business.</p>
            </div>
          </div>
        </div>
        <div className="w-full gap-2 p-3">
          <h1 className="pb-10 text-2xl font-bold text-center text-primary">Tech Stack</h1>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="Javascript"
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="Javascript"
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="Javascript"
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                alt="Javascript"
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&w=256"
                alt="Java"
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                alt="PHP"
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg"
                alt="Java"
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                alt="Java"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoContent;
