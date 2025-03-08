import Image from 'next/image';
import Link from 'next/link';

interface Project {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
  }

interface ProjectCardProps{
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, des, img, iconLists, link } = project;

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      {/* Left section: Text content */}
      <div className="flex-1 p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{des}</p>
        <div className="flex items-center space-x-3 mb-4">
          {iconLists.map((icon, index) => (
            <div key={index} className="relative w-6 h-6">
              <Image
                src={icon}
                alt={`tech-icon-${index}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Visit Project
        </Link>
        </div>
      </div>

      {/* Right section: Image */}
      <div className="relative w-full md:w-1/3 h-64 p-2 rounded-2xl" >
        <Image
          src={img}
          alt={title}
          // height={600}
          // width={600}
          layout="fill"
          objectFit="cover"
          className="p-4 rounded-2xl"
        />
      </div>
    </div>
  );
}
