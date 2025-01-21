const Education = () => {
  return (
    <div className="flex flex-col items-center gap-2 p-8 bg-base-200">
      <h1 className="text-2xl font-bold text-primary">Education</h1>
      {/* list */}
      <div className="flex flex-col gap-2 text-justify">
        <h1>Frontend Web Developer Bootcamp</h1>
        <span className="flex justify-between ">
          <p>Dibimbing.id</p>
          <p>Apr - Oct 2024</p>
        </span>
        <p>Learn how to become a Frontend Web how to build a proper website using HTML, CSS, and JavaScript and learn how to use frameworks such as React, Tailwindcss, and Nextjs with final score &apos;A-&apos;.</p>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col gap-2 text-justify">
        <h1>High School</h1>
        <span className="flex justify-between ">
          <p>Universitas Indraprasta PGRI</p>
          <p>2018 - 2024</p>
        </span>
        <p>I was studied at Universitas Indraprasta PGRI majoring in Informatics. I graduated in 2024. I learned about programming with Java. My final GPA was 3.4</p>
      </div>
    </div>
  );
};

export default Education;
