import { motion , AnimatePresence } from "framer-motion";
import { FaCertificate, FaVideo, FaCode, FaClock, FaStar, FaLaptopCode, FaCheck, FaChevronRight, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import QRCode from  '../../../public/QR-payment.jpg'
import Image from 'next/image'
  import { ToastContainer, toast } from 'react-toastify';




const CourseDetail = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
 const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    transactionId: ''
  });
  



  useEffect(() => {
    const fetchCourseData = () => {
      setTimeout(() => {
        setCourse({
          id: "dsa-mastery",
          title: "Data Structures and Algorithms (DSA)",
          description: "Learn the fundamentals of data structures and algorithms to build efficient and optimized code. Perfect for coding interviews and technical assessments.",
          topics: [
            "Introduction to DSA",
            "Time and Space Complexity",
            "Arrays and Strings",
            "Linked Lists",
            "Stacks and Queues",
            "Trees and Binary Trees",
            "Binary Search Trees",
            "Heaps and Priority Queues",
            "Hashing and Hash Maps",
            "Recursion and Backtracking",
            "Sorting Algorithms",
            "Searching Algorithms",
            "Graphs and Graph Algorithms",
            "Dynamic Programming",
            "Greedy Algorithms",
            "Interview Problem Solving Practice"
          ],
          duration: "8 weeks",
          prerequisites: [
            "Basic programming knowledge (preferably in C++, Java, or Python)"
          ],
          level: "Beginner to Intermediate",
          mode: "Online",
          includes: [
            "Video Lectures",
            "Coding Assignments",
            "Mock Interviews",
            "Certificate of Completion"
          ],
          price: 4999,
          discountPrice: 2999,
          videoUrl:"https://www.youtube.com/embed/yYyBHwxj4xg?si=4lWwMsapQ_u_XzcV"
        });
        setLoading(false);
      }, 500);
    };

    fetchCourseData();
  }, []);


const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = { formData };
  console.log('sending payload', payload);
  
  try {
    const response = await fetch("/api/userPaymentInfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log(data);
    
    if (response.ok && data.message === "Data saved") {
      // Success toast with new style
      toast(
       `Payment Successful! 🎉
     If your details are correct, we will connect with you within 24 hours. Don't worry about anything 😊`
      );
    } else {
      // Error toast with new style
      toast(
        `Payment Failed
     Something went wrong. Please check your details and try again.`
      );
    }
  } catch (error) {
    toast(
      `Network Error
     Failed to connect to server. Please check your connection and try again.`
    );
  }

  setShowPaymentModal(false);
  setPaymentDone(false);
  setFormData({
    name: '',
    email: '',
    phone: '',
    transactionId: ''
  });
};
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gray-900 flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"
        ></motion.div>
      </motion.div>
    );
  }

  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-gray-100"
    >
              
   <ToastContainer />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-500"></div>
        </motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-block bg-indigo-800/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-indigo-600">
                <span className="text-indigo-300 text-sm font-medium">Best Seller</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200"
            >
              {course.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-xl text-indigo-200 max-w-3xl mx-auto"
            >
              {course.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center bg-indigo-800/40 px-4 py-2 rounded-full backdrop-blur-sm">
                <FaClock className="text-indigo-300 mr-2" />
                <span className="text-sm">{course.duration}</span>
              </div>
              <div className="flex items-center bg-indigo-800/40 px-4 py-2 rounded-full backdrop-blur-sm">
                <FaLaptopCode className="text-indigo-300 mr-2" />
                <span className="text-sm">{course.mode}</span>
              </div>
              <div className="flex items-center bg-indigo-800/40 px-4 py-2 rounded-full backdrop-blur-sm">
                <FaCertificate className="text-indigo-300 mr-2" />
                <span className="text-sm">Certificate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)"
              }}
              className="bg-black rounded-xl overflow-hidden shadow-2xl aspect-w-16 aspect-h-9 border-2 border-indigo-900/50"
            >
              <iframe
                className="w-full h-96"
                src={course.videoUrl}
                title="Course Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
               
              ></iframe>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300"
              >
                What You'll Learn
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.topics.map((topic, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <motion.div 
                      className="text-green-400 mt-1 mr-3 flex-shrink-0"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        transition: { delay: index * 0.05 + 0.5 }
                      }}
                    >
                      <FaCheck />
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Course Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                Course Details
              </h2>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                  className="flex justify-between border-b border-gray-700 pb-2 px-2 py-1 rounded-lg"
                >
                  <div className="flex items-center text-gray-400">
                    <FaClock className="mr-2" />
                    <span>Duration</span>
                  </div>
                  <span className="text-gray-100 font-medium">{course.duration}</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                  className="flex justify-between border-b border-gray-700 pb-2 px-2 py-1 rounded-lg"
                >
                  <div className="flex items-center text-gray-400">
                    <FaStar className="mr-2" />
                    <span>Level</span>
                  </div>
                  <span className="text-gray-100 font-medium">{course.level}</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                  className="flex justify-between border-b border-gray-700 pb-2 px-2 py-1 rounded-lg"
                >
                  <div className="flex items-center text-gray-400">
                    <FaLaptopCode className="mr-2" />
                    <span>Mode</span>
                  </div>
                  <span className="text-gray-100 font-medium">{course.mode}</span>
                </motion.div>
                
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-gray-300 mb-2">
                    Prerequisites
                  </h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center bg-gray-700/50 px-3 py-2 rounded-lg"
                      >
                        <FaChevronRight className="text-purple-400 mr-2 text-xs" />
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Enrollment Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover="hover"
              variants={cardHoverVariants}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl sticky top-6 backdrop-blur-sm bg-opacity-80"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Enroll Now</h3>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold"
                >
                  <FaStar className="mr-1" /> 4.9 (1.2k reviews)
                </motion.div>
              </div>

              <div className="space-y-4 mb-6">
                {course.includes.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="text-green-400 mr-3"
                    >
                      <FaCheck />
                    </motion.div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gray-900 rounded-lg p-4 mb-6 border border-indigo-900/50"
                whileHover={{ 
                  borderColor: "rgba(99, 102, 241, 0.8)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-end mb-2">
                  <span className="text-3xl font-bold text-white">₹{course.discountPrice}</span>
                  <span className="text-gray-400 line-through ml-2 text-lg">₹{course.price}</span>
                  <motion.span 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 1.5
                    }}
                    className="ml-auto bg-gradient-to-r from-green-900 to-green-800 text-green-300 text-xs px-2 py-1 rounded"
                  >
                    Save ₹{course.price - course.discountPrice}
                  </motion.span>
                </div>
                <div className="text-gray-400 text-sm">
                  One-time payment. Lifetime access.
                </div>
              </motion.div>


   {/* Payment Modal */}
   <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gray-800 rounded-xl max-w-md w-full overflow-hidden border border-gray-700 relative"
            >
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>

              {!paymentDone ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
                      Complete Payment
                    </h3>
                    <p className="text-gray-400 text-center mb-6">
                      Scan the QR code or use the UPI IDs below to pay ₹{course?.price}
                    </p>

                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.3 }}
                      className="bg-white p-4 rounded-lg mb-6 flex justify-center"
                    >
                      <Image
                      height={200} 
                      width={200}
     src = {QRCode}
    alt="QR Code" 
                        className="w-full h-48 object-contain"
                      />
                    </motion.div>

                    <div className="space-y-3 mb-6">
                      <motion.div 
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gray-700/50 p-3 rounded-lg"
                      >
                        <p className="text-gray-300 text-sm">UPI ID 1</p>
                        <p className="font-mono text-white">9550225365@ybl</p>
                      </motion.div>
                      <motion.div 
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-gray-700/50 p-3 rounded-lg"
                      >
                        <p className="text-gray-300 text-sm">UPI ID 2</p>
                        <p className="font-mono text-white">9550225365@ibl</p>
                      </motion.div>
                      <motion.div 
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gray-700/50 p-3 rounded-lg"
                      >
                        <p className="text-gray-300 text-sm">UPI ID 3</p>
                        <p className="font-mono text-white">9550225365@axl</p>
                      </motion.div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPaymentDone(true)}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      I've Completed Payment
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-6"
                >
                  <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
                    Payment Details
                  </h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4 mb-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="block text-gray-400 mb-1">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-gray-400 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label className="block text-gray-400 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label className="block text-gray-400 mb-1">Transaction ID</label>
                        <input
                          type="text"
                          name="transactionId"
                          value={formData.transactionId}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit Payment Details
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

  {/* Update your Enroll Now button to open the modal */}
  <motion.button
        whileHover={{ 
          scale: 1.02,
          background: "linear-gradient(to right, #4f46e5, #7c3aed)"
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowPaymentModal(true)}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
      >
        <motion.span 
          className="absolute inset-0 bg-white opacity-0 hover:opacity-10"
          whileHover={{ opacity: 0.1 }}
        />
        Enroll Now for ₹{course?.price}
      </motion.button>
    </motion.div>


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-4 text-center text-sm text-gray-400"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30-day money-back guarantee
                </motion.div>
              </motion.div>


              
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetail;