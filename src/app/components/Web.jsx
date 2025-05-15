import { motion } from "framer-motion";
import { FaCertificate, FaVideo, FaCode, FaClock, FaStar, FaLaptopCode } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Web = () => {
    const router = useRouter();
const course = {
    title: "Full-Stack Development",
    subtitle: "Become Interview-Ready in 3 Months",
    duration: "2-3 Months",
    includes: [
        { icon: <FaVideo className="text-blue-400" />, text: "Recorded Lectures" },
        { icon: <FaCode className="text-green-400" />, text: "Basic to Advanced" },
        { icon: <FaLaptopCode className="text-purple-400" />, text: "10+ Projects" },
        { icon: <FaCertificate className="text-teal-400" />, text: "Certificate" }
    ],
    features: [
        "Covers All Major Patterns",
        "24/7 TA Support",
        "Community Access",
        "1-Year Course Access"
    ],
    price: 6999,
    discountPrice: 4999,
};

  const savings = course.price - course.discountPrice;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className="max-w-md mx-auto rounded-xl overflow-hidden w-[30rem] bg-gray-900 border border-gray-800 shadow-lg"
    >
      {/* Course Header */}
      <div className="relative">
        <div className="bg-gradient-to-r from-indigo-800 to-purple-900 p-5">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-white">
                {course.title}
              </h2>
              <p className="text-indigo-200 text-sm mt-1">
                {course.subtitle}
              </p>
            </div>
            <div className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
              <FaStar className="mr-1" /> {5}
            </div>
          </div>
          
          {/* Duration */}
          <div className="mt-3 flex items-center text-indigo-200 text-sm">
            <FaClock className="mr-2" />
            <span>{course.duration}</span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-5">
        {/* Includes */}
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-gray-100 mb-3">Includes:</h3>
          <div className="grid grid-cols-2 gap-3">
            {course.includes.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="mr-2">{item.icon}</span>
                <span className="text-gray-300 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-gray-100 mb-3">Features:</h3>
          <ul className="space-y-2">
            {course.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-green-400">✓</span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="bg-gray-800 rounded-lg p-4 mb-5 border border-gray-700">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold text-white">₹{course.discountPrice}</span>
              <span className="text-gray-400 line-through ml-2 text-sm">₹{course.price}</span>
              <span className="ml-2 bg-green-900 text-green-300 text-xs px-2 py-0.5 rounded">
                Save ₹{savings}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
                 onClick={() => router.push("/web-details")}
                 className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
          Enroll Now
        </button>
        <p className="text-center text-xs text-gray-500 mt-2">
          30-day money-back guarantee
        </p>
      </div>
    </motion.div>
  );
};

export default Web;