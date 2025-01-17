const Education = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-3 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-4 p-4 bg-base-200">
        <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="border-2 border-black w-[15rem] h-[15rem] bg-slate-300"></div>
          <div className="border-2 border-black w-[15rem] h-[15rem] bg-slate-300"></div>
          <div className="border-2 border-black w-[15rem] h-[15rem] bg-slate-300"></div>
          <div className="border-2 border-black w-[15rem] h-[15rem] bg-slate-300"></div>
        </div>
        <button className="btn btn-secondary">Show More</button>
      </div>
      <div className="flex flex-col items-center gap-4 p-4 bg-base-200">
        <h1 className="text-2xl font-bold text-primary">Education</h1>
        {/* list */}
        <div className="flex flex-col gap-2 text-justify">
          <h1>High School</h1>
          <span className="flex justify-between ">
            <p>Universitas Indraprasta PGRI</p>
            <p>2018 - 2024</p>
          </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolores consequuntur ullam laborum perferendis! Eos omnis nulla iste saepe qui adipisci at?</p>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col gap-2 text-justify">
          <h1>High School</h1>
          <span className="flex justify-between ">
            <p>Universitas Indraprasta PGRI</p>
            <p>2018 - 2024</p>
          </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolores consequuntur ullam laborum perferendis! Eos omnis nulla iste saepe qui adipisci at?</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
