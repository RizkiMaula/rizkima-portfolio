const DoContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold">What Can I Do?</h1>
      <div className="grid grid-cols-1 gap-2 p-10 md:grid-cols-2 place-items-center">
        <div className="w-full gap-2 p-3">
          <p className="text-justify">
            When I was in School, I learned to make a website using HTML, CSS, and JavaScript. When i was in High School, I learned about programming languages such as Java and programming paradigms such as OOP, and Functional Programming.
            After I graduated, I learned to make a website using React and Next.js. So, this is what I can do.
          </p>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="collapse collapse-arrow bg-base-200">
            <input
              type="radio"
              name="my-accordion-2"
              defaultChecked
            />
            <div className="text-xl font-medium collapse-title">Build a Functional Website</div>
            <div className="collapse-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sequi illum molestias quisquam voluptate possimus ut accusantium officia consequatur corrupti nisi.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input
              type="radio"
              name="my-accordion-2"
            />
            <div className="text-xl font-medium collapse-title">Build a Simple Website</div>
            <div className="collapse-content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ex, eveniet, obcaecati reprehenderit, similique repudiandae in vitae perspiciatis odio cumque ad?</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input
              type="radio"
              name="my-accordion-2"
            />
            <div className="text-xl font-medium collapse-title">Build a Simple Java Application</div>
            <div className="collapse-content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ex, eveniet, obcaecati reprehenderit, similique repudiandae in vitae perspiciatis odio cumque ad?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoContent;
