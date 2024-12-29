import React from 'react'
import Card from './Card'
import { TbBrandCpp, TbBrandGolang } from 'react-icons/tb'
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { HoverEffect } from './ui/card-hover-effect';
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
            <div className="flex flex-wrap justify-center gap-6 pb-12">
              {icons.map(({ Icon }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-24 h-24 border border-violet-300 rounded-md shadow-lg bg-white hover:scale-105 transform transition-all duration-400"
                >
                  <Icon className="text-5xl text-violet-500" />
                </div>
              ))}
            </div>
            <h1 className='text-7xl text-center'>Technologies and Frameworks</h1>
            <div className="flex flex-wrap justify-center gap-6 pb-12">
      {tools.map(({ Icon }, index) => (
        <div
          key={index}
          className="tech-icons flex items-center justify-center w-24 h-24 border border-gray-300 rounded-md shadow-lg bg-white hover:scale-105 transform transition-all duration-400"
        >
          <Icon className="text-5xl text-gray-500" />
        </div>
      ))}
    </div>
        </div>
    )
}

export default TechStack
