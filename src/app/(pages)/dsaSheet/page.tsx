//src/app/(pages)/freeSheet/page.tsx
//use before tdys i
// "use client";

// import React, { useState, useEffect } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import { FaChevronDown, FaLink, FaUserCircle } from "react-icons/fa";
// import { useSession, signOut } from "next-auth/react";
// import { toast } from "react-toastify";
// import { Button } from "../../components/ui/button";
// import { useRouter } from "next/navigation";

// const topics = [
//   {
//     name: "Arrays",
//     count: 20,
//     problems: [
//       { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
//       { title: "Missing Number", link: "https://leetcode.com/problems/missing-number/", difficulty: "Medium" },
//       { title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/", difficulty: "Easy" },
//       { title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",  difficulty: "Easy" },
//       { title: "Squares of a Sorted Array", link: "https://leetcode.com/problems/squares-of-a-sorted-array/",  difficulty: "Easy" },
//       { title: "Pascal's Triangle", link: "https://leetcode.com/problems/pascals-triangle/",  difficulty: "Easy" },
//       { title: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/",  difficulty: "Easy" },
//     ],
//   },
//   {
//     name: "Strings",
//     count: 15,
//     problems: [
//       { title: "Reverse String", link: "https://leetcode.com/problems/reverse-string/", difficulty: "Easy" },
//       { title: "Palindrome String", link: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Hard" },
//     ],
//   },
// ];

// const Sheets = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const [loggedIn, setLoggedIn] = useState(!!session);
//   const [activeLevel, setActiveLevel] = useState<{ [key: string]: string }>({});
//   const [completedProblems, setCompletedProblems] = useState<{ [key: string]: boolean }>({});

//   useEffect(() => {
//     const storedProgress = localStorage.getItem("completedProblems");
//     if (storedProgress) {
//       setCompletedProblems(JSON.parse(storedProgress));
//     }
//   }, []);

//   useEffect(() => {
//     topics.forEach((topic) => {
//       const defaultLevel = topic.problems.find((p) => p.difficulty === "Easy")?.difficulty ||
//         topic.problems.find((p) => p.difficulty === "Medium")?.difficulty ||
//         "Hard";
//       setActiveLevel((prev) => ({ ...prev, [topic.name]: defaultLevel }));
//     });
//   }, []);

//   const handleLoginLogout = () => {
//     if (loggedIn) {
//       toast("Logged out ✅");
//       setTimeout(() => {
//         signOut({ callbackUrl: "/" });
//         setLoggedIn(false);
//       }, 2000);
//     } else {
//       router.push("/login");
//     }
//   };

//   const toggleLevel = (topicName: string, level: string) => {
//     setActiveLevel((prev) => ({
//       ...prev,
//       [topicName]: prev[topicName] === level ? "" : level,
//     }));
//   };

//   const toggleCompletion = (problemTitle: string) => {
//     setCompletedProblems((prev) => {
//       const updated = { ...prev, [problemTitle]: !prev[problemTitle] };
//       localStorage.setItem("completedProblems", JSON.stringify(updated));
//       return updated;
//     });
//   };

//   const calculateProgress = (problems) => {
//     const completedCount = problems.filter((problem) => completedProblems[problem.title]).length;
//     return (completedCount / problems.length) * 100;
//   };

//   return (
//     <div className="bg-neutral-900 bg-gradient-to-b from-black via-gray-900 min-h-screen">
//       {/* Top Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-gray-900 backdrop-blur-md px-5 py-3.5 border-b border-gray-700 flex justify-between items-center z-50 bg-gradient-to-b from-black via-gray-900">
//         <h1 className="text-white text-2xl font-bold">Tech Nirmaan</h1>
//         <div className="flex items-center space-x-4">
//           <FaUserCircle className="text-white text-3xl cursor-pointer" />
//           <Button
//             onClick={handleLoginLogout}
//             className="text-white hover:text-gray-300 py-2 px-4 bg-violet-800 hover:bg-violet-700 rounded-lg transition"
//           >
//             {loggedIn ? "Logout" : "Login"}
//           </Button>
//         </div>
//       </nav>

//       {/* Sidebar with navigation links */}
//       <aside className="fixed top-16 left-0 w-1/5 bg-gray-900 p-6 min-h-screen border-r border-t border-gray-700 backdrop-blur-md bg-gradient-to-b from-black via-gray-900">
//         <ul className="mt-10 space-y-8">
//           {["Home", "DSA Sheet", "Roadmaps", "Projects", "Jobs"].map((link, idx) => (
//             <li key={idx}>
//               <a
//                 href={`/${link.toLowerCase().replace(" ", "")}`}
//                 className={`text-white hover:text-gray-300 flex items-center gap-2 ${
//                   router.pathname === `/${link.toLowerCase().replace(" ", "")}` ? "text-blue-300" : ""
//                 }`}
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content Area */}
//       <main className="w-4/5 ml-auto p-10 pt-24 border-t border-gray-500 overflow-y-auto">
//         <h2 className="text-3xl font-bold text-white text-center mb-10">DSA Sheet</h2>

//         <div className="border border-gray-700 rounded-lg p-6 overflow-hidden">
//           <div className="space-y-6">
//             {topics.map((topic, index) => (
//               <Accordion key={index} className="bg-gray-800">
//                 <AccordionSummary
//                   expandIcon={<FaChevronDown className="text-white" />}
//                   aria-controls={`panel${index}-content`}
//                   id={`panel${index}-header`}
//                   sx={{
//                     backgroundColor: "#1f2937",
//                     color: "white",
//                     "&:hover": { backgroundColor: "#111827" },
//                     padding: "16px",
//                   }}
//                 >
//                   <div className="flex justify-between w-full mr-2">
//                     <Typography>{topic.name}</Typography>
//                     <div className="w-1/3 h-2 bg-gray-700 rounded-full mt-2 relative overflow-hidden">
//                       <div
//                         className="h-2 rounded-full transition-all duration-500"
//                         style={{
//                           width: `${calculateProgress(topic.problems)}%`,
//                           background: "linear-gradient(90deg, #9f7aea, #6b46c1)",
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 </AccordionSummary>
//                 <AccordionDetails className="bg-gray-900">
//                   <div className="flex justify-center gap-4 mb-6">
//                     {["Easy", "Medium", "Hard"].map((level) =>
//                       topic.problems.some((problem) => problem.difficulty === level) ? (
//                         <button
//                           key={level}
//                           onClick={() => toggleLevel(topic.name, level)}
//                           className={`text-white px-6 py-2 rounded-lg transition ${
//                             activeLevel[topic.name] === level ? "bg-violet-700 hover:bg-violet-800" : "bg-gray-800 hover:bg-gray-700"
//                           }`}
//                         >
//                           {level}
//                         </button>
//                       ) : null
//                     )}
//                   </div>
//                   {["Easy", "Medium", "Hard"].map((level) =>
//                     activeLevel[topic.name] === level ? (
//                       <div key={level} className="mt-2 flex flex-col gap-3">
//                         {topic.problems
//                           .filter((problem) => problem.difficulty === level)
//                           .map((problem, idx) => (
//                             <div
//                               key={idx}
//                               className={`flex justify-between items-center p-4 rounded-md border border-gray-700 ${
//                                 completedProblems[problem.title] ? "bg-violet-700" : "bg-gray-800"
//                               }`}
//                             >
//                               <span className="text-white flex items-center gap-2">
//                                 <input
//                                   type="checkbox"
//                                   checked={completedProblems[problem.title]}
//                                   onChange={() => toggleCompletion(problem.title)}
//                                   className="form-checkbox text-violet-700 h-4 w-4"
//                                 />
//                                 {problem.title}
//                               </span>
//                               <a
//                                 href={problem.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-white hover:text-blue-300"
//                               >
//                                 <FaLink />
//                               </a>
//                             </div>
//                           ))}
//                       </div>
//                     ) : null
//                   )}
//                 </AccordionDetails>
//               </Accordion>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Sheets;


//actual questions
// const topics = [
//   {
//     name: "Arrays",
//     count: 21, // Total number of problems
//     problems: [
//       // Beginner Level
//       { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Beginner" },
//       { title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Beginner" },
//       { title: "Squares of a Sorted Array", link: "https://leetcode.com/problems/squares-of-a-sorted-array/", difficulty: "Beginner" },
//       { title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/", difficulty: "Beginner" },
//       { title: "Pascal's Triangle", link: "https://leetcode.com/problems/pascals-triangle/", difficulty: "Beginner" },
//       { title: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/", difficulty: "Beginner" },
//       { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Beginner" },

//       // Intermediate Level
//       { title: "Missing Number", link: "https://leetcode.com/problems/missing-number/", difficulty: "Intermediate" },
//       { title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Intermediate" },
//       { title: "Find All Duplicates in an Array", link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/", difficulty: "Intermediate" },
//       { title: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Intermediate" },
//       { title: "3Sum", link: "https://leetcode.com/problems/3sum/", difficulty: "Intermediate" },
//       { title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Intermediate" },
//       { title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/", difficulty: "Intermediate" },

//       // Advanced Level
//       { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Advanced" },
//       { title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", difficulty: "Advanced" },
//       { title: "Find the Duplicate Number", link: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Advanced" },
//       { title: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Advanced" },
//       { title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Advanced" },
//       { title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Advanced" },
//       { title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Advanced" },
//     ],
//   },
//   {
//     name: "Sorting and Searching",
//     count: 18, // Total number of problems
//     problems: [
//       // Beginner Level
//       { title: "Merge Sorted Array", link: "https://leetcode.com/problems/merge-sorted-array/", difficulty: "Beginner" },
//       { title: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/", difficulty: "Beginner" },
//       { title: "Squares of a Sorted Array", link: "https://leetcode.com/problems/squares-of-a-sorted-array/", difficulty: "Beginner" },
//       { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Beginner" },
//       { title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/", difficulty: "Beginner" },
//       { title: "Sort Array By Parity", link: "https://leetcode.com/problems/sort-array-by-parity/", difficulty: "Beginner" },
//       { title: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/", difficulty: "Beginner" },

//       // Intermediate Level
//       { title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Intermediate" },
//       { title: "Find First and Last Position of Element in Sorted Array", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Intermediate" },
//       { title: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Intermediate" },
//       { title: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", difficulty: "Intermediate" },
//       { title: "Search a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: "Intermediate" },
//       { title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Intermediate" },
//       { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Intermediate" },

//       // Advanced Level
//       { title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Advanced" },
//       { title: "Count of Range Sum", link: "https://leetcode.com/problems/count-of-range-sum/", difficulty: "Advanced" },
//       { title: "Wiggle Sort II", link: "https://leetcode.com/problems/wiggle-sort-ii/", difficulty: "Advanced" },
//       { title: "Maximum Gap", link: "https://leetcode.com/problems/maximum-gap/", difficulty: "Advanced" },
//       { title: "Find K-th Smallest Pair Distance", link: "https://leetcode.com/problems/find-k-th-smallest-pair-distance/", difficulty: "Advanced" },
//     ],
//   },
//   {
//     name: "Hashing",
//     count: 15, // Total number of problems
//     problems: [
//       // Beginner Level
//       { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Beginner" },
//       { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Beginner" },
//       { title: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/", difficulty: "Beginner" },
//       { title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/", difficulty: "Beginner" },
//       { title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Beginner" },
//       { title: "Happy Number", link: "https://leetcode.com/problems/happy-number/", difficulty: "Beginner" },
//       { title: "Jewels and Stones", link: "https://leetcode.com/problems/jewels-and-stones/", difficulty: "Beginner" },

//       // Intermediate Level
//       { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Intermediate" },
//       { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Intermediate" },
//       { title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Intermediate" },
//       { title: "Find All Duplicates in an Array", link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/", difficulty: "Intermediate" },
//       { title: "4Sum II", link: "https://leetcode.com/problems/4sum-ii/", difficulty: "Intermediate" },
//       { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Intermediate" },

//       // Advanced Level
//       { title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Advanced" },
//       { title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Advanced" },
//       { title: "LFU Cache", link: "https://leetcode.com/problems/lfu-cache/", difficulty: "Advanced" },
//     ],
//   },
//   {
//     name: "Strings",
//     count: 18, // Total number of problems
//     problems: [
//       // Beginner Level
//       { title: "Reverse String", link: "https://leetcode.com/problems/reverse-string/", difficulty: "Beginner" },
//       { title: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Beginner" },
//       { title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Beginner" },
//       { title: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/", difficulty: "Beginner" },
//       { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Beginner" },
//       { title: "Implement strStr()", link: "https://leetcode.com/problems/implement-strstr/", difficulty: "Beginner" },
//       { title: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/", difficulty: "Beginner" },

//       // Intermediate Level
//       { title: "String to Integer (atoi)", link: "https://leetcode.com/problems/string-to-integer-atoi/", difficulty: "Intermediate" },
//       { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Intermediate" },
//       { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Intermediate" },
//       { title: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Intermediate" },
//       { title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Intermediate" },
//       { title: "Decode String", link: "https://leetcode.com/problems/decode-string/", difficulty: "Intermediate" },
//       { title: "Palindromic Substrings", link: "https://leetcode.com/problems/palindromic-substrings/", difficulty: "Intermediate" },

//       // Advanced Level
//       { title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", difficulty: "Advanced" },
//       { title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Advanced" },
//       { title: "Wildcard Matching", link: "https://leetcode.com/problems/wildcard-matching/", difficulty: "Advanced" },
//       { title: "Longest Valid Parentheses", link: "https://leetcode.com/problems/longest-valid-parentheses/", difficulty: "Advanced" },
//       { title: "Minimum Insertions to Balance a Parentheses String", link: "https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/", difficulty: "Advanced" },
//     ],
//   },
//   {
//     name: "Linked Lists",
//     count: 18, // Total number of problems
//     problems: [
//       // Beginner Level
//       { title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Beginner" },
//       { title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Beginner" },
//       { title: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Beginner" },
//       { title: "Remove Duplicates from Sorted List", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/", difficulty: "Beginner" },
//       { title: "Middle of the Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/", difficulty: "Beginner" },
//       { title: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: "Beginner" },
//       { title: "Delete Node in a Linked List", link: "https://leetcode.com/problems/delete-node-in-a-linked-list/", difficulty: "Beginner" },

//       // Intermediate Level
//       { title: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Intermediate" },
//       { title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Intermediate" },
//       { title: "Swap Nodes in Pairs", link: "https://leetcode.com/problems/swap-nodes-in-pairs/", difficulty: "Intermediate" },
//       { title: "Rotate List", link: "https://leetcode.com/problems/rotate-list/", difficulty: "Intermediate" },
//       { title: "Odd Even Linked List", link: "https://leetcode.com/problems/odd-even-linked-list/", difficulty: "Intermediate" },
//       { title: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", difficulty: "Intermediate" },
//       { title: "Flatten a Multilevel Doubly Linked List", link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", difficulty: "Intermediate" },

//       // Advanced Level
//       { title: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Advanced" },
//       { title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Advanced" },
//       { title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "Advanced" },
//       { title: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Advanced" },
//       { title: "Reorder List", link: "https://leetcode.com/problems/reorder-list/", difficulty: "Advanced" },
//     ],
//   },
//   {
//     name: "Stacks",
//     count: 15, // Total number of problems
//     problems: [
//       // Beginner Level
//       { title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Beginner" },
//       { title: "Min Stack", link: "https://leetcode.com/problems/min-stack/", difficulty: "Beginner" },
//       { title: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Beginner" },
//       { title: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/", difficulty: "Beginner" },
//       { title: "Backspace String Compare", link: "https://leetcode.com/problems/backspace-string-compare/", difficulty: "Beginner" },
//       { title: "Remove All Adjacent Duplicates In String", link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/", difficulty: "Beginner" },
//       { title: "Baseball Game", link: "https://leetcode.com/problems/baseball-game/", difficulty: "Beginner" },

//       // Intermediate Level
//       { title: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Intermediate" },
//       { title: "Asteroid Collision", link: "https://leetcode.com/problems/asteroid-collision/", difficulty: "Intermediate" },
//       { title: "Simplify Path", link: "https://leetcode.com/problems/simplify-path/", difficulty: "Intermediate" },
//       { title: "Decode String", link: "https://leetcode.com/problems/decode-string/", difficulty: "Intermediate" },
//       { title: "Evaluate Reverse Polish Notation", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Intermediate" },
//       { title: "Remove K Digits", link: "https://leetcode.com/problems/remove-k-digits/", difficulty: "Intermediate" },

//       // Advanced Level
//       { title: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Advanced" },
//       { title: "Maximal Rectangle", link: "https://leetcode.com/problems/maximal-rectangle/", difficulty: "Advanced" },
//       { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Advanced" },
//     ],
//   },
//   {
//     name: "Queues",
//     count: 12, // Total number of problems
//     problems: [
//       // Beginner Level
//       { title: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/", difficulty: "Beginner" },
//       { title: "Number of Recent Calls", link: "https://leetcode.com/problems/number-of-recent-calls/", difficulty: "Beginner" },
//       { title: "Moving Average from Data Stream", link: "https://leetcode.com/problems/moving-average-from-data-stream/", difficulty: "Beginner" },
//       { title: "Design Circular Queue", link: "https://leetcode.com/problems/design-circular-queue/", difficulty: "Beginner" },
//       { title: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/", difficulty: "Beginner" },

//       // Intermediate Level
//       { title: "Rotting Oranges", link: "https://leetcode.com/problems/rotting-oranges/", difficulty: "Intermediate" },
//       { title: "Open the Lock", link: "https://leetcode.com/problems/open-the-lock/", difficulty: "Intermediate" },
//       { title: "Perfect Squares", link: "https://leetcode.com/problems/perfect-squares/", difficulty: "Intermediate" },
//       { title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Intermediate" },
//       { title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", difficulty: "Intermediate" },

//       // Advanced Level
//       { title: "Design Hit Counter", link: "https://leetcode.com/problems/design-hit-counter/", difficulty: "Advanced" },
//       { title: "Minimum Number of K Consecutive Bit Flips", link: "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/", difficulty: "Advanced" },
//       { title: "Reconstruct Itinerary", link: "https://leetcode.com/problems/reconstruct-itinerary/", difficulty: "Advanced" },
//     ],
//   },
//   {
//     name: "Trees",
//     count: 18, // Total number of problems
//     problems: [
//       // Beginner Level
//       { title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Beginner" },
//       { title: "Minimum Depth of Binary Tree", link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/", difficulty: "Beginner" },
//       { title: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Beginner" },
//       { title: "Same Tree", link: "https://leetcode.com/problems/same-tree/", difficulty: "Beginner" },
//       { title: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Beginner" },
//       { title: "Path Sum", link: "https://leetcode.com/problems/path-sum/", difficulty: "Beginner" },
//       { title: "Binary Tree Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/", difficulty: "Beginner" },

//       // Intermediate Level
//       { title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Intermediate" },
//       { title: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Intermediate" },
//       { title: "Construct Binary Tree from Preorder and Inorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: "Intermediate" },
//       { title: "Kth Smallest Element in a BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", difficulty: "Intermediate" },
//       { title: "Lowest Common Ancestor of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Intermediate" },
//       { title: "Binary Tree Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "Intermediate" },
//       { title: "Binary Tree Right Side View", link: "https://leetcode.com/problems/binary-tree-right-side-view/", difficulty: "Intermediate" },

//       // Advanced Level
//       { title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Advanced" },
//       { title: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Advanced" },
//       { title: "Count Complete Tree Nodes", link: "https://leetcode.com/problems/count-complete-tree-nodes/", difficulty: "Advanced" },
//       { title: "Flatten Binary Tree to Linked List", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", difficulty: "Advanced" },
//       { title: "Recover Binary Search Tree", link: "https://leetcode.com/problems/recover-binary-search-tree/", difficulty: "Advanced" },
//     ],
//   },
//   {
//     name: "Graphs",
//     count: 18, // Total number of problems
//     problems: [
//       // Beginner Level
//       { title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", difficulty: "Beginner" },
//       { title: "Flood Fill", link: "https://leetcode.com/problems/flood-fill/", difficulty: "Beginner" },
//       { title: "Max Area of Island", link: "https://leetcode.com/problems/max-area-of-island/", difficulty: "Beginner" },
//       { title: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", difficulty: "Beginner" },
//       { title: "Find the Town Judge", link: "https://leetcode.com/problems/find-the-town-judge/", difficulty: "Beginner" },
//       { title: "All Paths From Source to Target", link: "https://leetcode.com/problems/all-paths-from-source-to-target/", difficulty: "Beginner" },
//       { title: "Is Graph Bipartite?", link: "https://leetcode.com/problems/is-graph-bipartite/", difficulty: "Beginner" },

//       // Intermediate Level
//       { title: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", difficulty: "Intermediate" },
//       { title: "Course Schedule II", link: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Intermediate" },
//       { title: "Redundant Connection", link: "https://leetcode.com/problems/redundant-connection/", difficulty: "Intermediate" },
//       { title: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", difficulty: "Intermediate" },
//       { title: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Intermediate" },
//       { title: "Network Delay Time", link: "https://leetcode.com/problems/network-delay-time/", difficulty: "Intermediate" },
//       { title: "Cheapest Flights Within K Stops", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", difficulty: "Intermediate" },

//       // Advanced Level
//       { title: "Alien Dictionary", link: "https://leetcode.com/problems/alien-dictionary/", difficulty: "Advanced" },
//       { title: "Minimum Height Trees", link: "https://leetcode.com/problems/minimum-height-trees/", difficulty: "Advanced" },
//       { title: "Reconstruct Itinerary", link: "https://leetcode.com/problems/reconstruct-itinerary/", difficulty: "Advanced" },
//       { title: "Evaluate Division", link: "https://leetcode.com/problems/evaluate-division/", difficulty: "Advanced" },
//       { title: "Swim in Rising Water", link: "https://leetcode.com/problems/swim-in-rising-water/", difficulty: "Advanced" },
//     ],
//   },
//   {
//     name: "Dynamic Programming",
//     count: 18, // Total number of problems
//     problems: [
//       // Beginner Level
//       { title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Beginner" },
//       { title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/", difficulty: "Beginner" },
//       { title: "Min Cost Climbing Stairs", link: "https://leetcode.com/problems/min-cost-climbing-stairs/", difficulty: "Beginner" },
//       { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Beginner" },
//       { title: "House Robber", link: "https://leetcode.com/problems/house-robber/", difficulty: "Beginner" },
//       { title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Beginner" },
//       { title: "Counting Bits", link: "https://leetcode.com/problems/counting-bits/", difficulty: "Beginner" },

//       // Intermediate Level
//       { title: "Coin Change", link: "https://leetcode.com/problems/coin-change/", difficulty: "Intermediate" },
//       { title: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Intermediate" },
//       { title: "Word Break", link: "https://leetcode.com/problems/word-break/", difficulty: "Intermediate" },
//       { title: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", difficulty: "Intermediate" },
//       { title: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/", difficulty: "Intermediate" },
//       { title: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Intermediate" },
//       { title: "Target Sum", link: "https://leetcode.com/problems/target-sum/", difficulty: "Intermediate" },

//       // Advanced Level
//       { title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", difficulty: "Advanced" },
//       { title: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Advanced" },
//       { title: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: "Advanced" },
//       { title: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/", difficulty: "Advanced" },
//       { title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Advanced" },
//     ],
//   },
//   {
//     name: "Advanced Topics",
//     count: 18, // Total number of problems
//     problems: [
//       // Bit Manipulation
//       { title: "Single Number", link: "https://leetcode.com/problems/single-number/", difficulty: "Beginner" },
//       { title: "Number of 1 Bits", link: "https://leetcode.com/problems/number-of-1-bits/", difficulty: "Beginner" },
//       { title: "Counting Bits", link: "https://leetcode.com/problems/counting-bits/", difficulty: "Intermediate" },
//       { title: "Reverse Bits", link: "https://leetcode.com/problems/reverse-bits/", difficulty: "Intermediate" },
//       { title: "Missing Number", link: "https://leetcode.com/problems/missing-number/", difficulty: "Intermediate" },
//       { title: "Sum of Two Integers", link: "https://leetcode.com/problems/sum-of-two-integers/", difficulty: "Advanced" },

//       // Greedy Algorithms
//       { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Beginner" },
//       { title: "Jump Game", link: "https://leetcode.com/problems/jump-game/", difficulty: "Intermediate" },
//       { title: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/", difficulty: "Intermediate" },
//       { title: "Gas Station", link: "https://leetcode.com/problems/gas-station/", difficulty: "Intermediate" },
//       { title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", difficulty: "Advanced" },

//       // Backtracking
//       { title: "Subsets", link: "https://leetcode.com/problems/subsets/", difficulty: "Intermediate" },
//       { title: "Permutations", link: "https://leetcode.com/problems/permutations/", difficulty: "Intermediate" },
//       { title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", difficulty: "Intermediate" },
//       { title: "N-Queens", link: "https://leetcode.com/problems/n-queens/", difficulty: "Advanced" },
//       { title: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/", difficulty: "Advanced" },

//       // Divide and Conquer
//       { title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Advanced" },
//       { title: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Intermediate" },
//       { title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Beginner" },
//     ],
//   },
// ];


"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaLink, FaCheck, FaStar, FaGem, FaRocket } from "react-icons/fa";
// import { useSession } from "next-auth/react";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar"; // Import your Navbar component

const Sheets = () => {
  // const { data: session } = useSession();
  // const router = useRouter();
  // const [loggedIn, setLoggedIn] = useState(!!session);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [activeDifficulty, setActiveDifficulty] = useState<"Beginner" | "Intermediate" | "Advanced">("Beginner");
  const [completedProblems, setCompletedProblems] = useState<{ [key: string]: boolean }>({});

  interface Problem {
    title: string;
    link: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
  }
  
  interface Topic {
    name: string;
    count: number;
    problems: Problem[];
  }

  useEffect(() => {
    const storedProgress = localStorage.getItem("completedProblems");
    if (storedProgress) {
      setCompletedProblems(JSON.parse(storedProgress));
    }
  }, []);

  // const topics = [
  //   {
  //     name: "Arrays",
  //     count: 6,
  //     problems: [
  //       { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Beginner" },
  //       { title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Beginner" },
  //       { title: "Missing Number", link: "https://leetcode.com/problems/missing-number/", difficulty: "Intermediate" },
  //       { title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Intermediate" },
  //       { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Advanced" },
  //       { title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", difficulty: "Advanced" },      
  //     ],
  //   },
  //   {
  //     name: "Strings",
  //     count: 2,
  //     problems: [
  //       { title: "Reverse String", link: "https://leetcode.com/problems/reverse-string/", difficulty: "Easy" },
  //       { title: "Palindrome String", link: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Hard" },
  //     ],
  //   },
  // ];

  const topics : Topic[]= [
    {
      name: "Arrays",
      count: 21, // Total number of problems
      problems: [
        // Beginner Level
        { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Beginner" },
        { title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Beginner" },
        { title: "Squares of a Sorted Array", link: "https://leetcode.com/problems/squares-of-a-sorted-array/", difficulty: "Beginner" },
        { title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/", difficulty: "Beginner" },
        { title: "Pascal's Triangle", link: "https://leetcode.com/problems/pascals-triangle/", difficulty: "Beginner" },
        { title: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/", difficulty: "Beginner" },
        { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Beginner" },
  
        // Intermediate Level
        { title: "Missing Number", link: "https://leetcode.com/problems/missing-number/", difficulty: "Intermediate" },
        { title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Intermediate" },
        { title: "Find All Duplicates in an Array", link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/", difficulty: "Intermediate" },
        { title: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Intermediate" },
        { title: "3Sum", link: "https://leetcode.com/problems/3sum/", difficulty: "Intermediate" },
        { title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Intermediate" },
        { title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/", difficulty: "Intermediate" },
  
        // Advanced Level
        { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Advanced" },
        { title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", difficulty: "Advanced" },
        { title: "Find the Duplicate Number", link: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Advanced" },
        { title: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Advanced" },
        { title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Advanced" },
        { title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Advanced" },
        { title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Advanced" },
      ],
    },
    {
      name: "Sorting and Searching",
      count: 18, // Total number of problems
      problems: [
        // Beginner Level
        { title: "Merge Sorted Array", link: "https://leetcode.com/problems/merge-sorted-array/", difficulty: "Beginner" },
        { title: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/", difficulty: "Beginner" },
        { title: "Squares of a Sorted Array", link: "https://leetcode.com/problems/squares-of-a-sorted-array/", difficulty: "Beginner" },
        { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Beginner" },
        { title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/", difficulty: "Beginner" },
        { title: "Sort Array By Parity", link: "https://leetcode.com/problems/sort-array-by-parity/", difficulty: "Beginner" },
        { title: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/", difficulty: "Beginner" },
  
        // Intermediate Level
        { title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Intermediate" },
        { title: "Find First and Last Position of Element in Sorted Array", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Intermediate" },
        { title: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Intermediate" },
        { title: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", difficulty: "Intermediate" },
        { title: "Search a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: "Intermediate" },
        { title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Intermediate" },
        { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Intermediate" },
  
        // Advanced Level
        { title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Advanced" },
        { title: "Count of Range Sum", link: "https://leetcode.com/problems/count-of-range-sum/", difficulty: "Advanced" },
        { title: "Wiggle Sort II", link: "https://leetcode.com/problems/wiggle-sort-ii/", difficulty: "Advanced" },
        { title: "Maximum Gap", link: "https://leetcode.com/problems/maximum-gap/", difficulty: "Advanced" },
        { title: "Find K-th Smallest Pair Distance", link: "https://leetcode.com/problems/find-k-th-smallest-pair-distance/", difficulty: "Advanced" },
      ],
    },
    {
      name: "Hashing",
      count: 15, // Total number of problems
      problems: [
        // Beginner Level
        { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Beginner" },
        { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Beginner" },
        { title: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/", difficulty: "Beginner" },
        { title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/", difficulty: "Beginner" },
        { title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Beginner" },
        { title: "Happy Number", link: "https://leetcode.com/problems/happy-number/", difficulty: "Beginner" },
        { title: "Jewels and Stones", link: "https://leetcode.com/problems/jewels-and-stones/", difficulty: "Beginner" },
  
        // Intermediate Level
        { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Intermediate" },
        { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Intermediate" },
        { title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Intermediate" },
        { title: "Find All Duplicates in an Array", link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/", difficulty: "Intermediate" },
        { title: "4Sum II", link: "https://leetcode.com/problems/4sum-ii/", difficulty: "Intermediate" },
        { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Intermediate" },
  
        // Advanced Level
        { title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Advanced" },
        { title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Advanced" },
        { title: "LFU Cache", link: "https://leetcode.com/problems/lfu-cache/", difficulty: "Advanced" },
      ],
    },
    {
      name: "Strings",
      count: 18, // Total number of problems
      problems: [
        // Beginner Level
        { title: "Reverse String", link: "https://leetcode.com/problems/reverse-string/", difficulty: "Beginner" },
        { title: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Beginner" },
        { title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Beginner" },
        { title: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/", difficulty: "Beginner" },
        { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Beginner" },
        { title: "Implement strStr()", link: "https://leetcode.com/problems/implement-strstr/", difficulty: "Beginner" },
        { title: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/", difficulty: "Beginner" },
  
        // Intermediate Level
        { title: "String to Integer (atoi)", link: "https://leetcode.com/problems/string-to-integer-atoi/", difficulty: "Intermediate" },
        { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Intermediate" },
        { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Intermediate" },
        { title: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Intermediate" },
        { title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Intermediate" },
        { title: "Decode String", link: "https://leetcode.com/problems/decode-string/", difficulty: "Intermediate" },
        { title: "Palindromic Substrings", link: "https://leetcode.com/problems/palindromic-substrings/", difficulty: "Intermediate" },
  
        // Advanced Level
        { title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", difficulty: "Advanced" },
        { title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Advanced" },
        { title: "Wildcard Matching", link: "https://leetcode.com/problems/wildcard-matching/", difficulty: "Advanced" },
        { title: "Longest Valid Parentheses", link: "https://leetcode.com/problems/longest-valid-parentheses/", difficulty: "Advanced" },
        { title: "Minimum Insertions to Balance a Parentheses String", link: "https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/", difficulty: "Advanced" },
      ],
    },
    {
      name: "Linked Lists",
      count: 18, // Total number of problems
      problems: [
        // Beginner Level
        { title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Beginner" },
        { title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Beginner" },
        { title: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Beginner" },
        { title: "Remove Duplicates from Sorted List", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/", difficulty: "Beginner" },
        { title: "Middle of the Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/", difficulty: "Beginner" },
        { title: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: "Beginner" },
        { title: "Delete Node in a Linked List", link: "https://leetcode.com/problems/delete-node-in-a-linked-list/", difficulty: "Beginner" },
  
        // Intermediate Level
        { title: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Intermediate" },
        { title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Intermediate" },
        { title: "Swap Nodes in Pairs", link: "https://leetcode.com/problems/swap-nodes-in-pairs/", difficulty: "Intermediate" },
        { title: "Rotate List", link: "https://leetcode.com/problems/rotate-list/", difficulty: "Intermediate" },
        { title: "Odd Even Linked List", link: "https://leetcode.com/problems/odd-even-linked-list/", difficulty: "Intermediate" },
        { title: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", difficulty: "Intermediate" },
        { title: "Flatten a Multilevel Doubly Linked List", link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", difficulty: "Intermediate" },
  
        // Advanced Level
        { title: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Advanced" },
        { title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Advanced" },
        { title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "Advanced" },
        { title: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Advanced" },
        { title: "Reorder List", link: "https://leetcode.com/problems/reorder-list/", difficulty: "Advanced" },
      ],
    },
    {
      name: "Stacks",
      count: 15, // Total number of problems
      problems: [
        // Beginner Level
        { title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Beginner" },
        { title: "Min Stack", link: "https://leetcode.com/problems/min-stack/", difficulty: "Beginner" },
        { title: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Beginner" },
        { title: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/", difficulty: "Beginner" },
        { title: "Backspace String Compare", link: "https://leetcode.com/problems/backspace-string-compare/", difficulty: "Beginner" },
        { title: "Remove All Adjacent Duplicates In String", link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/", difficulty: "Beginner" },
        { title: "Baseball Game", link: "https://leetcode.com/problems/baseball-game/", difficulty: "Beginner" },
  
        // Intermediate Level
        { title: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Intermediate" },
        { title: "Asteroid Collision", link: "https://leetcode.com/problems/asteroid-collision/", difficulty: "Intermediate" },
        { title: "Simplify Path", link: "https://leetcode.com/problems/simplify-path/", difficulty: "Intermediate" },
        { title: "Decode String", link: "https://leetcode.com/problems/decode-string/", difficulty: "Intermediate" },
        { title: "Evaluate Reverse Polish Notation", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Intermediate" },
        { title: "Remove K Digits", link: "https://leetcode.com/problems/remove-k-digits/", difficulty: "Intermediate" },
  
        // Advanced Level
        { title: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Advanced" },
        { title: "Maximal Rectangle", link: "https://leetcode.com/problems/maximal-rectangle/", difficulty: "Advanced" },
        { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Advanced" },
      ],
    },
    {
      name: "Queues",
      count: 12, // Total number of problems
      problems: [
        // Beginner Level
        { title: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/", difficulty: "Beginner" },
        { title: "Number of Recent Calls", link: "https://leetcode.com/problems/number-of-recent-calls/", difficulty: "Beginner" },
        { title: "Moving Average from Data Stream", link: "https://leetcode.com/problems/moving-average-from-data-stream/", difficulty: "Beginner" },
        { title: "Design Circular Queue", link: "https://leetcode.com/problems/design-circular-queue/", difficulty: "Beginner" },
        { title: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/", difficulty: "Beginner" },
  
        // Intermediate Level
        { title: "Rotting Oranges", link: "https://leetcode.com/problems/rotting-oranges/", difficulty: "Intermediate" },
        { title: "Open the Lock", link: "https://leetcode.com/problems/open-the-lock/", difficulty: "Intermediate" },
        { title: "Perfect Squares", link: "https://leetcode.com/problems/perfect-squares/", difficulty: "Intermediate" },
        { title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Intermediate" },
        { title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", difficulty: "Intermediate" },
  
        // Advanced Level
        { title: "Design Hit Counter", link: "https://leetcode.com/problems/design-hit-counter/", difficulty: "Advanced" },
        { title: "Minimum Number of K Consecutive Bit Flips", link: "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/", difficulty: "Advanced" },
        { title: "Reconstruct Itinerary", link: "https://leetcode.com/problems/reconstruct-itinerary/", difficulty: "Advanced" },
      ],
    },
    {
      name: "Trees",
      count: 18, // Total number of problems
      problems: [
        // Beginner Level
        { title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Beginner" },
        { title: "Minimum Depth of Binary Tree", link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/", difficulty: "Beginner" },
        { title: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Beginner" },
        { title: "Same Tree", link: "https://leetcode.com/problems/same-tree/", difficulty: "Beginner" },
        { title: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Beginner" },
        { title: "Path Sum", link: "https://leetcode.com/problems/path-sum/", difficulty: "Beginner" },
        { title: "Binary Tree Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/", difficulty: "Beginner" },
  
        // Intermediate Level
        { title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Intermediate" },
        { title: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Intermediate" },
        { title: "Construct Binary Tree from Preorder and Inorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: "Intermediate" },
        { title: "Kth Smallest Element in a BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", difficulty: "Intermediate" },
        { title: "Lowest Common Ancestor of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Intermediate" },
        { title: "Binary Tree Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "Intermediate" },
        { title: "Binary Tree Right Side View", link: "https://leetcode.com/problems/binary-tree-right-side-view/", difficulty: "Intermediate" },
  
        // Advanced Level
        { title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Advanced" },
        { title: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Advanced" },
        { title: "Count Complete Tree Nodes", link: "https://leetcode.com/problems/count-complete-tree-nodes/", difficulty: "Advanced" },
        { title: "Flatten Binary Tree to Linked List", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", difficulty: "Advanced" },
        { title: "Recover Binary Search Tree", link: "https://leetcode.com/problems/recover-binary-search-tree/", difficulty: "Advanced" },
      ],
    },
    {
      name: "Graphs",
      count: 18, // Total number of problems
      problems: [
        // Beginner Level
        { title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", difficulty: "Beginner" },
        { title: "Flood Fill", link: "https://leetcode.com/problems/flood-fill/", difficulty: "Beginner" },
        { title: "Max Area of Island", link: "https://leetcode.com/problems/max-area-of-island/", difficulty: "Beginner" },
        { title: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", difficulty: "Beginner" },
        { title: "Find the Town Judge", link: "https://leetcode.com/problems/find-the-town-judge/", difficulty: "Beginner" },
        { title: "All Paths From Source to Target", link: "https://leetcode.com/problems/all-paths-from-source-to-target/", difficulty: "Beginner" },
        { title: "Is Graph Bipartite?", link: "https://leetcode.com/problems/is-graph-bipartite/", difficulty: "Beginner" },
  
        // Intermediate Level
        { title: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", difficulty: "Intermediate" },
        { title: "Course Schedule II", link: "https://leetcode.com/problems/course-schedule-ii/", difficulty: "Intermediate" },
        { title: "Redundant Connection", link: "https://leetcode.com/problems/redundant-connection/", difficulty: "Intermediate" },
        { title: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", difficulty: "Intermediate" },
        { title: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Intermediate" },
        { title: "Network Delay Time", link: "https://leetcode.com/problems/network-delay-time/", difficulty: "Intermediate" },
        { title: "Cheapest Flights Within K Stops", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", difficulty: "Intermediate" },
  
        // Advanced Level
        { title: "Alien Dictionary", link: "https://leetcode.com/problems/alien-dictionary/", difficulty: "Advanced" },
        { title: "Minimum Height Trees", link: "https://leetcode.com/problems/minimum-height-trees/", difficulty: "Advanced" },
        { title: "Reconstruct Itinerary", link: "https://leetcode.com/problems/reconstruct-itinerary/", difficulty: "Advanced" },
        { title: "Evaluate Division", link: "https://leetcode.com/problems/evaluate-division/", difficulty: "Advanced" },
        { title: "Swim in Rising Water", link: "https://leetcode.com/problems/swim-in-rising-water/", difficulty: "Advanced" },
      ],
    },
    {
      name: "Dynamic Programming",
      count: 18, // Total number of problems
      problems: [
        // Beginner Level
        { title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Beginner" },
        { title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/", difficulty: "Beginner" },
        { title: "Min Cost Climbing Stairs", link: "https://leetcode.com/problems/min-cost-climbing-stairs/", difficulty: "Beginner" },
        { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Beginner" },
        { title: "House Robber", link: "https://leetcode.com/problems/house-robber/", difficulty: "Beginner" },
        { title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Beginner" },
        { title: "Counting Bits", link: "https://leetcode.com/problems/counting-bits/", difficulty: "Beginner" },
  
        // Intermediate Level
        { title: "Coin Change", link: "https://leetcode.com/problems/coin-change/", difficulty: "Intermediate" },
        { title: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Intermediate" },
        { title: "Word Break", link: "https://leetcode.com/problems/word-break/", difficulty: "Intermediate" },
        { title: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", difficulty: "Intermediate" },
        { title: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/", difficulty: "Intermediate" },
        { title: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Intermediate" },
        { title: "Target Sum", link: "https://leetcode.com/problems/target-sum/", difficulty: "Intermediate" },
  
        // Advanced Level
        { title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", difficulty: "Advanced" },
        { title: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Advanced" },
        { title: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: "Advanced" },
        { title: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/", difficulty: "Advanced" },
        { title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Advanced" },
      ],
    },
    {
      name: "Advanced Topics",
      count: 18, // Total number of problems
      problems: [
        // Bit Manipulation
        { title: "Single Number", link: "https://leetcode.com/problems/single-number/", difficulty: "Beginner" },
        { title: "Number of 1 Bits", link: "https://leetcode.com/problems/number-of-1-bits/", difficulty: "Beginner" },
        { title: "Counting Bits", link: "https://leetcode.com/problems/counting-bits/", difficulty: "Intermediate" },
        { title: "Reverse Bits", link: "https://leetcode.com/problems/reverse-bits/", difficulty: "Intermediate" },
        { title: "Missing Number", link: "https://leetcode.com/problems/missing-number/", difficulty: "Intermediate" },
        { title: "Sum of Two Integers", link: "https://leetcode.com/problems/sum-of-two-integers/", difficulty: "Advanced" },
  
        // Greedy Algorithms
        { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Beginner" },
        { title: "Jump Game", link: "https://leetcode.com/problems/jump-game/", difficulty: "Intermediate" },
        { title: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/", difficulty: "Intermediate" },
        { title: "Gas Station", link: "https://leetcode.com/problems/gas-station/", difficulty: "Intermediate" },
        { title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", difficulty: "Advanced" },
  
        // Backtracking
        { title: "Subsets", link: "https://leetcode.com/problems/subsets/", difficulty: "Intermediate" },
        { title: "Permutations", link: "https://leetcode.com/problems/permutations/", difficulty: "Intermediate" },
        { title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", difficulty: "Intermediate" },
        { title: "N-Queens", link: "https://leetcode.com/problems/n-queens/", difficulty: "Advanced" },
        { title: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/", difficulty: "Advanced" },
  
        // Divide and Conquer
        { title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Advanced" },
        { title: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Intermediate" },
        { title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Beginner" },
      ],
    },
  ];
  
  // const handleLoginLogout = () => {
  //   if (loggedIn) {
  //     toast("Logged out ✅");
  //     setTimeout(() => {
  //       signOut({ callbackUrl: "/" });
  //       setLoggedIn(false);
  //     }, 2000);
  //   } else {
  //     router.push("/login");
  //   }
  // };

  const toggleCompletion = (problemTitle: string) => {
    setCompletedProblems((prev) => {
      const updated = { ...prev, [problemTitle]: !prev[problemTitle] };
      localStorage.setItem("completedProblems", JSON.stringify(updated));
      return updated;
    });
  };

  const calculateProgress = (problems: Problem[]) => {
    const completedCount = problems.filter((problem) => completedProblems[problem.title]).length;
    return (completedCount / problems.length) * 100;
  };
  
  const getAvailableDifficulties = (topic: Topic) => {
    const difficulties = new Set(topic.problems.map((problem) => problem.difficulty));
    return Array.from(difficulties);
  };

  useEffect(() => {
    if (activeTopic) {
      const topic = topics.find((t) => t.name === activeTopic);
      if (topic) {
        const availableDifficulties = getAvailableDifficulties(topic);
        if (availableDifficulties.length > 0) {
          setActiveDifficulty(availableDifficulties[0] as "Beginner" | "Intermediate" | "Advanced");
        } else {
          setActiveDifficulty("Beginner"); // Default value
        }
      }
    }
  }, [activeTopic, activeDifficulty]);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-6 pt-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">DSA Sheet</h2>

        {/* Outer Border for All Topics */}
        <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/50 backdrop-blur-sm">
          {/* Topics List */}
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg border border-gray-800 shadow-md transition duration-300"
              >
                {/* Combined Div (Topic Header + Progress Bar) */}
                <div
                  className="p-4 cursor-pointer hover:bg-gray-800 transition-colors duration-300"
                  onClick={() => setActiveTopic(activeTopic === topic.name ? null : topic.name)}
                >
                  {/* Topic Header */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{topic.name}</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-gray-400">
                        {topic.problems.length} problems
                      </p>
                      <FaChevronDown
                        className={`text-white transition-transform duration-300 ${
                          activeTopic === topic.name ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${calculateProgress(topic.problems)}%`,
                          background: "linear-gradient(90deg, #9f7aea, #6b46c1)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Difficulty Tabs */}
                {activeTopic === topic.name && (
                  <div className="px-4 pb-4 py-2 flex flex-wrap justify-center gap-2 overflow-x-auto">
                    {getAvailableDifficulties(topic).map((level) => (
                      <button
                        key={level}
                        onClick={() => setActiveDifficulty(level as "Beginner" | "Intermediate" | "Advanced")}
                        className={`px-3 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${
                          activeDifficulty === level
                            ? "bg-violet-700 text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        } whitespace-nowrap`} // Keep first two buttons in one line
                      >
                        {level === "Beginner" && <FaStar className="text-yellow-400" />}
                        {level === "Intermediate" && <FaGem className="text-blue-400" />}
                        {level === "Advanced" && <FaRocket className="text-red-400" />}
                        {level}
                      </button>
                    ))}
                  </div>
                )}

                {/* Problems List */}
                {activeTopic === topic.name && (
                  <div className="border-t border-gray-800">
                    {topic.problems
                      .filter((problem) => problem.difficulty === activeDifficulty)
                      .map((problem, idx) => (
                        <div
                          key={idx}
                          className={`p-4 flex justify-between items-center ${
                            completedProblems[problem.title] ? "border-l-4 border-violet-500" : "border-l-4 border-gray-700"
                          } ${idx !== 0 ? "border-t border-gray-800" : ""} hover:bg-gray-800 transition-colors duration-200`}
                        >
                          <span className="text-white flex items-center gap-2">
                            <button
                              onClick={() => toggleCompletion(problem.title)}
                              className={`w-5 h-5 flex items-center justify-center rounded-sm border ${
                                completedProblems[problem.title] ? "bg-violet-500 border-violet-500" : "bg-transparent border-gray-500"
                              } transition-all duration-200`}
                            >
                              {completedProblems[problem.title] && <FaCheck className="text-white text-xs" />}
                            </button>
                            {problem.title}
                          </span>
                          <a
                            href={problem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-violet-500 transition-colors duration-200"
                          >
                            <FaLink />
                          </a>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        /* Thin Scrollbar */
        ::-webkit-scrollbar {
          width: 6px; /* Adjust the width to make it thinner */
        }

        ::-webkit-scrollbar-thumb {
          background-color: rgb(63, 62, 63); /* Custom color for the thumb */
          border-radius: 3px; /* Rounded corners */
        }

        ::-webkit-scrollbar-track {
          background-color: black; /* Custom color for the track */
        }
      `}</style>
    </div>
  );
};

export default Sheets;