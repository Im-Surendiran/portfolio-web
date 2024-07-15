import ProgressBar from "@/components/ProgressBar";

const Skills = () => {

  return (
    <div className="flex h-screen justify-center items-center bg-white pt-20">
      <div className="w-4/5">
      <div className='flex justify-center'>
                <h1 className="text-xl text-black font-semibold mb-7">Skills</h1>
            </div>
        <div className="md:grid gap-6 grid-cols-3 ">
          <ProgressBar label="HTML" percentage={94} />
          <ProgressBar label="CSS" percentage={86} />
          <ProgressBar label="Tailwind CSS" percentage={75} />
          <ProgressBar label="Javascript" percentage={80} />
          <ProgressBar label="React.Js" percentage={80} />
          <ProgressBar label="Next.Js" percentage={75} />
          <ProgressBar label="Node.Js" percentage={75} />
          <ProgressBar label="Express.Js" percentage={75} />
          <ProgressBar label="MongoDb" percentage={75} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
