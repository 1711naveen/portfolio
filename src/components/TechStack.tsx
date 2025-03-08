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
import { Button } from './ui/moving-border';

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
                    //   <div
                    //     key={index}
                    //     className="h-40 w-40  border-2 border-black rounded-lg flex items-center justify-center"
                    //   >
                    //     <Icon className="text-7xl text-center " />
                    //   </div>
                    <div className='' key={index}>
                        <Button
                            //   random duration will be fun , I think , may be not
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1.75rem"
                            style={{
                                //   add these two
                                //   you can generate the color from here https://cssgradient.io/
                                background: "rgb(4,7,29)",
                                backgroundColor:
                                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                                // add this border radius to make it more rounded so that the moving border is more realistic
                                borderRadius: `calc(1.75rem* 0.96)`,
                                height: '200px',
                                width: '230px',
                            }}
                            // remove bg-white dark:bg-slate-900
                            className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <Icon className="text-7xl text-center " />
                        </Button>
                    </div>
                ))}
            </div>



            <h1 className='text-7xl text-center'>Technologies and Frameworks</h1>
            <div className="grid grid-cols-5 gap-8 mx-12 p-4">
                {tools.map(({ Icon }, index) => (
                    <div key={index}>

                        <Button
                            //   random duration will be fun , I think , may be not
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1.75rem"
                            style={{
                                //   add these two
                                //   you can generate the color from here https://cssgradient.io/
                                background: "rgb(4,7,29)",
                                backgroundColor:
                                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                                // add this border radius to make it more rounded so that the moving border is more realistic
                                borderRadius: `calc(1.75rem* 0.96)`,
                                height: '200px',
                                width: '230px',
                            }}
                            // remove bg-white dark:bg-slate-900
                            className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <Icon className="text-7xl" />
                        </Button>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default TechStack
