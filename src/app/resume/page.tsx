import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume - Naveen Yadav | Full Stack Developer',
  description: 'Download or view the professional resume of Naveen Yadav, Full Stack Developer with 2+ years of experience in MERN stack, 657+ LeetCode problems solved, and expertise in React.js, Node.js, and modern web technologies.',
  keywords: 'Naveen Yadav resume, Full Stack Developer CV, MERN stack developer, React.js developer, Node.js developer, software engineer resume',
  openGraph: {
    title: 'Resume - Naveen Yadav | Full Stack Developer',
    description: 'Professional resume of Naveen Yadav, Full Stack Developer with proven expertise in MERN stack and problem-solving skills',
    type: 'website',
    url: 'https://naveen17.vercel.app/resume',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume - Naveen Yadav | Full Stack Developer',
    description: 'Professional resume of Naveen Yadav, Full Stack Developer with proven expertise in MERN stack',
  },
  alternates: {
    canonical: 'https://naveen17.vercel.app/resume'
  }
};

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Professional Resume
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              Download my comprehensive resume to learn more about my professional experience, 
              technical skills, and educational background as a Full Stack Developer.
            </p>
          </div>

          {/* Quick Overview Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Professional Experience</h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Full Stack Developer at Neural Info Solutions</li>
                <li>• 2+ Years of Industry Experience</li>
                <li>• MERN Stack Specialist</li>
                <li>• 657+ LeetCode Problems Solved</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Core Technologies</h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• React.js, Next.js, Node.js</li>
                <li>• JavaScript, TypeScript, Java</li>
                <li>• MongoDB, MySQL, PostgreSQL</li>
                <li>• Express.js, Spring Boot, AWS</li>
              </ul>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/Naveen Yadav.pdf"
              download="Naveen_Yadav_Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              aria-label="Download Naveen Yadav's professional resume as PDF"
              title="Download Resume PDF"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            
            <a
              href="/Naveen Yadav.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-blue-500/50 text-blue-400 font-medium rounded-lg hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
              aria-label="View Naveen Yadav's resume in new tab"
              title="View Resume Online"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Online
            </a>
          </div>

          {/* PDF Viewer */}
          <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 mb-6">
            <iframe
              src="/Naveen Yadav.pdf"
              className="w-full h-[500px] md:h-[800px] lg:h-[1000px] rounded-lg border border-gray-600/30"
              title="Naveen Yadav Professional Resume PDF Viewer"
              loading="lazy"
            />
          </div>

          {/* Download Again Button */}
          <div className="text-center mb-4">
            <a
              href="/Naveen Yadav.pdf"
              download="Naveen_Yadav_Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              aria-label="Download Naveen Yadav's professional resume as PDF"
              title="Download Resume PDF"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Last updated: January 2025 | PDF format | Optimized for ATS systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;