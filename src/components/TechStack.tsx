import React from 'react'
// import Card from './Card'
import { TbBrandGolang } from 'react-icons/tb'
// import { FaJava } from "react-icons/fa";
// import { FaPython } from "react-icons/fa";
// import { HoverEffect } from './ui/card-hover-effect';
import { CgCPlusPlus } from 'react-icons/cg';
import { DiGit, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiPython, DiReact } from 'react-icons/di';
import { SiFirebase, SiNextdotjs, SiPostgresql, SiRedis, SiSolidity } from 'react-icons/si';
import { SiMacos, SiVisualstudiocode, SiPostman, SiSlack, SiVercel } from "react-icons/si";

const TechStack = () => {

  const icons = [
    { Icon: CgCPlusPlus },
    { Icon: DiJavascript1 },
    { Icon: TbBrandGolang },
    { Icon: DiNodejs },
    { Icon: DiReact },
    { Icon: SiSolidity },
    { Icon: DiMongodb },
    { Icon: SiNextdotjs },
    { Icon: DiGit },
    { Icon: SiFirebase },
    { Icon: SiRedis },
    { Icon: SiPostgresql },
    { Icon: DiPython },
    { Icon: DiJava },
  ];

  const tools = [
    { Icon: SiMacos },
    { Icon: SiVisualstudiocode },
    { Icon: SiPostman },
    { Icon: SiSlack },
    { Icon: SiVercel },
  ];

  return (
    <div>
      <h1 className='text-7xl text-center'>Technical Languages</h1>

      <div className="grid grid-cols-5 gap-8 mx-12 p-4">
        {icons.map(({ Icon }, index) => (
          <div
            key={index}
            className="h-40 w-40  border-2 border-black rounded-lg flex items-center justify-center"
          >
            <Icon className="text-7xl text-center " />
          </div>
        ))}
      </div>



      <h1 className='text-7xl text-center'>Technologies and Frameworks</h1>
      <div className="grid grid-cols-5 gap-8 mx-12 p-4">
        {tools.map(({ Icon }, index) => (
          <div
            key={index}
            className="h-40 w-40  border-2 border-black rounded-lg flex items-center justify-center"
          >
            <Icon className="text-7xl" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack