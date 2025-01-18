const Education = () => {
  return (
    <div className="flex flex-col items-center gap-2 p-8 bg-base-200">
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
  );
};

export default Education;
