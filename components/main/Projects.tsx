import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Project1.png"
          title="Project 1"
          description="With the lights out, it's less dangerous
          Here we are now, entertain us
          I feel stupid and contagious
          Here we are now, entertain us
          A mulatto, an albino
          A mosquito, my libido, yeah
          Hey, yay"
        />
        <ProjectCard
          src="/Project2.png"
          title="Project 2"
          description="Only when I stop to think about it
          I hate everything about you
          Why do I love you?
          I hate everything about you
          Why do I love you?
          Every time we lie awake
          After every hit we take
          Every feeling that I get
          But I haven't missed you yet"
        />
        <ProjectCard
          src="/Project3.png"
          title="Project 3"
          description="Words like violence
          Break the silence
          Come crashing in
          Into my little world
          Painful to me
          Pierce right through me
          Can't you understand?
          Oh, my little girl"
        />
      </div>
    </div>
  );
};

export default Projects;
