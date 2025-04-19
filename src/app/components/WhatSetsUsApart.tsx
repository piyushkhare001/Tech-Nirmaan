/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckCircle, XCircle, Zap, Award, Clock, BookOpen, User, Briefcase } from "lucide-react";

const data = [
  {
    icon: <BookOpen className="w-5 h-5 text-blue-400" />,
    feature: "Recorded Lectures + Practice Platform + Descriptive Blogs",
    tuf: { type: "yes", highlight: true },
    other: { type: "no" },
  },
  {
    icon: <Clock className="w-5 h-5 text-purple-400" />,
    feature: "Live classes",
    tuf: {
      type: "no",
      note: "Only 5% of users watch live classes due to slow pace and unnecessary interactions",
      highlight: false
    },
    other: { type: "yes" },
  },
  {
    icon: <User className="w-5 h-5 text-green-400" />,
    feature: "Career sessions",
    tuf: { type: "yes", highlight: true },
    other: { type: "no" },
  },
  {
    icon: <Briefcase className="w-5 h-5 text-yellow-400" />,
    feature: "Placement Support",
    tuf: { type: "no" },
    other: {
      type: "yes",
      note: "Often false promises",
      highlight: false
    },
  },
  {
    icon: <Award className="w-5 h-5 text-pink-400" />,
    feature: "Curated list for beginners",
    tuf: { type: "yes", highlight: true },
    other: { type: "no" },
  },
  {
    icon: <Zap className="w-5 h-5 text-orange-400" />,
    feature: "Personalised Roadmaps",
    tuf: { type: "yes", highlight: true },
    other: { type: "no" },
  },
];

const FeatureBadge = ({ type, note } : any) => {
  return (
    <div className="flex items-start gap-3">
      {type === "yes" ? (
        <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-400 mt-0.5" />
      ) : (
        <XCircle className="flex-shrink-0 h-5 w-5 text-red-400 mt-0.5" />
      )}
      <div>
        <span className={`font-medium ${type === "yes" ? "text-green-400" : "text-red-400"}`}>
          {type === "yes" ? "Available" : "Not Available"}
        </span>
        {note && (
          <p className="text-sm text-gray-400 mt-1">{note}</p>
        )}
      </div>
    </div>
  );
};

export default function WhatSetsUsApart() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-gray-800 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Competitive Edge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See why TUF provides a more effective learning experience than other platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature List */}
          <div className="lg:col-span-1 space-y-6">
            {data.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-xl transition-all ${item.tuf.highlight ? 'bg-gray-800/50 border border-blue-500/20' : 'bg-gray-800/30 hover:bg-gray-800/40'}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-100">{item.feature}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* TUF Card */}
            <div className="bg-gray-800/50 border border-blue-500/30 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 p-6 border-b border-blue-500/20">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="bg-blue-500 text-white p-1 rounded-full">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  TUF Advantages
                </h3>
              </div>
              <div className="divide-y divide-gray-700/50">
                {data.map((item, idx) => (
                  <div key={idx} className="p-6">
                    <FeatureBadge type={item.tuf.type} note={item.tuf.note} />
                  </div>
                ))}
              </div>
            </div>

            {/* Other Platforms Card */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl overflow-hidden">
              <div className="bg-gray-800/40 p-6 border-b border-gray-700">
                <h3 className="text-2xl font-bold text-gray-300 flex items-center gap-2">
                  <span className="bg-gray-600 text-gray-300 p-1 rounded-full">
                    <XCircle className="w-5 h-5" />
                  </span>
                  Other Platforms
                </h3>
              </div>
              <div className="divide-y divide-gray-700/50">
                {data.map((item, idx) => (
                  <div key={idx} className="p-6">
                    <FeatureBadge type={item.other.type} note={item.other.note} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to experience the difference?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of learners whove accelerated their DSA journey with TUFs focused approach
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all hover:shadow-lg">
              Explore TUF Courses
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium px-6 py-3 rounded-lg transition-all border border-gray-700">
              Compare Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}