import { ExternalLink, BookOpen, Clock, Database, Network, Cpu, Zap } from "lucide-react";

type Course = {
  title: string;
  subtitle: string;
  label: string;
  topics: string;
  problems: string;
  contests?: string;
  icon: React.ReactNode;
  bgGradient: string;
};

const courses: Course[] = [
  {
    title: "DSA Basics to Advanced",
    subtitle: "Step by Step Guide",
    label: "DSA",
    topics: "19 Topics",
    contests: "+ Contests",
    problems: "470+ Problems",
    icon: <BookOpen className="w-6 h-6" />,
    bgGradient: "from-teal-600 to-emerald-700",
  },
  {
    title: "DSA Concept Revision",
    subtitle: "Master Key Topics",
    label: "DSA (Concept Revision)",
    topics: "40 Topics",
    problems: "200+ Problems",
    icon: <Clock className="w-6 h-6" />,
    bgGradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "DSA Quick Revision",
    subtitle: "Fast-Track Prep",
    label: "DSA (Quick Revision)",
    topics: "10 Topics",
    problems: "79+ Problems",
    icon: <Zap className="w-6 h-6" />,
    bgGradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "CN Network Essentials",
    subtitle: "Decode Computer Networks",
    label: "Computer Networks",
    topics: "10 Topics",
    problems: "50+ Problems",
    icon: <Network className="w-6 h-6" />,
    bgGradient: "from-blue-500 to-violet-600",
  },
  {
    title: "DBMS Database Concepts",
    subtitle: "Crack DBMS Like a Pro",
    label: "DBMS",
    topics: "14 Topics",
    problems: "106+ Problems",
    icon: <Database className="w-6 h-6" />,
    bgGradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "OOPS Core Principles",
    subtitle: "Master OOPS Step-by-Step",
    label: "OOPS",
    topics: "6 Topics",
    problems: "52+ Problems",
    icon: <Cpu className="w-6 h-6" />,
    bgGradient: "from-green-500 to-emerald-600",
  },
];

export default function CourseCards() {
  return (
    <section 
    // style={{
    //   transform: 'scale(0.8)',
    // transformOrigin: 'top left',
    // width: '125vw',
    // display: 'inline-block',
    // }} 
    className="bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-gray-800 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Comprehensive Curriculum
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Master Tech Fundamentals
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to dominate the tech world in one place
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl p-6 min-h-[300px] flex flex-col justify-between bg-gradient-to-br ${course.bgGradient} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                {course.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-200 mb-6">{course.subtitle}</p>
              </div>

              {/* Stats */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-white/80">{course.label}</span>
                  <div className="text-white hover:text-orange-300 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-white/90">
                  <div className="flex items-center gap-1">
                    <span>{course.topics}</span>
                  </div>
                  {course.contests && (
                    <div className="flex items-center gap-1">
                      <span>{course.contests}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <span>{course.problems}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg">
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  );
}