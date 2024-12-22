/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Accordion, {
    
  } from '@mui/material/Accordion';
  import AccordionSummary from '@mui/material/AccordionSummary';
  import AccordionDetails, {

  } from '@mui/material/AccordionDetails';
  import Typography from '@mui/material/Typography';
  import { FaChevronDown, FaLink } from "react-icons/fa";



  const  topics =  [
    {
      name: "Arrays",
      count: 20,
      problems: [
        { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
        { title: "Missing Number", link: "https://leetcode.com/problems/missing-number/" },
        { title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/" },
        { title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
        { title: "Squares of a Sorted Array", link: "https://leetcode.com/problems/squares-of-a-sorted-array/" },
        { title: "Pascal's Triangle", link: "https://leetcode.com/problems/pascals-triangle/" },
        { title: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/" },
        { title: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/" },
        { title: "3Sum", link: "https://leetcode.com/problems/3sum/" },
        { title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { title: "Majority Element", link: "https://leetcode.com/problems/majority-element/" },
        { title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/" },
        { title: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/" },
        { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/" },
        { title: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/" },
        { title: "Spirally Traversing a Matrix", link: "https://leetcode.com/problems/spiral-matrix/" },
        { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/" },
        { title: "Longest Subarray with Sum K", link: "https://www.geeksforgeeks.org/longest-sub-array-sum-k/" },
        { title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
        { title: "Keyboard Row", link: "https://leetcode.com/problems/keyboard-row/" },
      ],
    },
    {
      name: "Strings",
      count: 15,
      problems: [
        { title: "Reverse String", link: "https://leetcode.com/problems/reverse-string/" },
        { title: "Palindrome String", link: "https://leetcode.com/problems/valid-palindrome/" },
        { title: "Largest Odd Number in String", link: "https://leetcode.com/problems/largest-odd-number-in-string/" },
        { title: "Count the Number of Vowel Strings in Range", link: "https://leetcode.com/problems/count-sorted-vowel-strings/" },
        { title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/" },
        { title: "Remove Outermost Parentheses", link: "https://leetcode.com/problems/remove-outermost-parentheses/" },
        { title: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/" },
        { title: "Find the Index of the First Occurrence in a String", link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
        { title: "Permutation in String", link: "https://leetcode.com/problems/permutation-in-string/" },
        { title: "Sort Characters by Frequency", link: "https://leetcode.com/problems/sort-characters-by-frequency/" },
        { title: "Lexicographically Smallest Equivalent String", link: "https://leetcode.com/problems/lexicographically-smallest-equivalent-string/" },
        { title: "Count Sorted Vowel Strings", link: "https://leetcode.com/problems/count-sorted-vowel-strings/" },
        { title: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
        { title: "Shortest String That Contains Three Strings", link: "https://leetcode.com/problems/shortest-common-supersequence/" },
        { title: "Find All Anagrams in a String", link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
      ],
    },
    {
      name: "Linked Lists",
      count: 10,
      problems: [
        { title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/" },
        { title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        { title: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/" },
        { title: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
        { title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/" },
        { title: "Flatten a Multilevel Doubly Linked List", link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/" },
        { title: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/" },
        { title: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
        { title: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
        { title: "Remove Linked List Elements", link: "https://leetcode.com/problems/remove-linked-list-elements/" },
      ],
    },
    {
      name: "Binary Trees",
      count: 15,
      problems: [
        { title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        { title: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/" },
        { title: "Same Tree", link: "https://leetcode.com/problems/same-tree/" },
        { title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        { title: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
        { title: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/" },
        { title: "Path Sum", link: "https://leetcode.com/problems/path-sum/" },
        { title: "Construct Binary Tree from Preorder and Inorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
        { title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
        { title: "Lowest Common Ancestor of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
        { title: "Flatten Binary Tree to Linked List", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" },
        { title: "Binary Tree Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
        { title: "Populating Next Right Pointers in Each Node", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/" },
        { title: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/" },
        { title: "Kth Smallest Element in a BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
      ],
    },
    {
      name: "Dynamic Programming",
      count: 12,
      problems: [
        { title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" },
        { title: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
        { title: "Coin Change", link: "https://leetcode.com/problems/coin-change/" },
        { title: "House Robber", link: "https://leetcode.com/problems/house-robber/" },
        { title: "Word Break", link: "https://leetcode.com/problems/word-break/" },
        { title: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/" },
        { title: "Minimum Path Sum", link: "https://leetcode.com/problems/minimum-path-sum/" },
        { title: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },
        { title: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/" },
        { title: "Jump Game", link: "https://leetcode.com/problems/jump-game/" },
        { title: "Perfect Squares", link: "https://leetcode.com/problems/perfect-squares/" },
        { title: "Target Sum", link: "https://leetcode.com/problems/target-sum/" },
      ],
    },
    {
      name: "Graphs",
      count: 10,
      problems: [
        { title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/" },
        { title: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/" },
        { title: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/" },
        { title: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/" },
        { title: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
        { title: "Accounts Merge", link: "https://leetcode.com/problems/accounts-merge/" },
        { title: "Find the Town Judge", link: "https://leetcode.com/problems/find-the-town-judge/" },
        { title: "Minimum Spanning Tree", link: "https://www.geeksforgeeks.org/minimum-spanning-tree/" },
        { title: "Number of Connected Components in an Undirected Graph", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" },
        { title: "Dijkstra's Algorithm", link: "https://www.geeksforgeeks.org/implementation-of-dijkstras-algorithm/" },
      ],
    },
    {
      name: "Backtracking",
      count: 8,
      problems: [
        { title: "Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },
        { title: "Generate Parentheses", link: "https://leetcode.com/problems/generate-parentheses/" },
        { title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/" },
        { title: "N-Queens", link: "https://leetcode.com/problems/n-queens/" },
        { title: "Word Search", link: "https://leetcode.com/problems/word-search/" },
        { title: "Permutations", link: "https://leetcode.com/problems/permutations/" },
        { title: "Combinations", link: "https://leetcode.com/problems/combinations/" },
        { title: "Restore IP Addresses", link: "https://leetcode.com/problems/restore-ip-addresses/" },
      ],
    },
    {
      name: "Greedy Algorithms",
      count: 10,
      problems: [
        { title: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/" },
        { title: "Assign Cookies", link: "https://leetcode.com/problems/assign-cookies/" },
        { title: "Candy", link: "https://leetcode.com/problems/candy/" },
        { title: "Gas Station", link: "https://leetcode.com/problems/gas-station/" },
        { title: "Meeting Rooms II", link: "https://leetcode.com/problems/meeting-rooms-ii/" },
        { title: "Best Time to Buy and Sell Stock II", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
        { title: "Min Stack", link: "https://leetcode.com/problems/min-stack/" },
        { title: "Queue Reconstruction by Height", link: "https://leetcode.com/problems/queue-reconstruction-by-height/" },
        { title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/" },
        { title: "Maximum Product of Three Numbers", link: "https://leetcode.com/problems/maximum-product-of-three-numbers/" },
      ],
    },
    {
      name: "Trie",
      count: 6,
      problems: [
        { title: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
        { title: "Add and Search Word - Data structure design", link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/" },
        { title: "Word Search II", link: "https://leetcode.com/problems/word-search-ii/" },
        { title: "Longest Word in Dictionary through Deleting", link: "https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/" },
        { title: "Prefix and Suffix Search", link: "https://leetcode.com/problems/prefix-and-suffix-search/" },
        { title: "Map Sum Pairs", link: "https://leetcode.com/problems/map-sum-pairs/" },
      ],
    },
    {
      name: "Heap (Priority Queue)",
      count: 7,
      problems: [
        { title: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
        { title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/" },
        { title: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/" },
        { title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/" },
        { title: "Kth Largest Element in a Stream", link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
        { title: "Reorganize String", link: "https://leetcode.com/problems/reorganize-string/" },
      ],
    },
    {
      name: "Segment Tree",
      count: 4,
      problems: [
        { title: "Range Sum Query - Immutable", link: "https://leetcode.com/problems/range-sum-query-immutable/" },
        { title: "Range Sum Query 2D - Immutable", link: "https://leetcode.com/problems/range-sum-query-2d-immutable/" },
        { title: "Count of Range Sum", link: "https://leetcode.com/problems/count-of-range-sum/" },
        { title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      ],
    },
    {
      name: "Bit Manipulation",
      count: 6,
      problems: [
        { title: "Single Number", link: "https://leetcode.com/problems/single-number/" },
        { title: "Number of 1 Bits", link: "https://leetcode.com/problems/number-of-1-bits/" },
        { title: "Counting Bits", link: "https://leetcode.com/problems/counting-bits/" },
        { title: "Power of Two", link: "https://leetcode.com/problems/power-of-two/" },
        { title: "Reverse Bits", link: "https://leetcode.com/problems/reverse-bits/" },
        { title: "Sum of Two Integers", link: "https://leetcode.com/problems/sum-of-two-integers/" },
      ],
    },
    {
      name: "Mathematical",
      count: 5,
      problems: [
        { title: "Happy Number", link: "https://leetcode.com/problems/happy-number/" },
        { title: "Sqrt(x)", link: "https://leetcode.com/problems/sqrtx/" },
        { title: "Roman to Integer", link: "https://leetcode.com/problems/roman-to-integer/" },
        { title: "Integer to Roman", link: "https://leetcode.com/problems/integer-to-roman/" },
        { title: "Factorial Trailing Zeroes", link: "https://leetcode.com/problems/factorial-trailing-zeroes/" },
      ],
    },   {
      name: "Dynamic Programming",
      count: 12,
      problems: [
        { title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" },
        { title: "House Robber", link: "https://leetcode.com/problems/house-robber/" },
        { title: "Coin Change", link: "https://leetcode.com/problems/coin-change/" },
        { title: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/" },
        { title: "Word Break", link: "https://leetcode.com/problems/word-break/" },
        { title: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/" },
        { title: "House Robber II", link: "https://leetcode.com/problems/house-robber-ii/" },
        { title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/" },
        { title: "Jump Game", link: "https://leetcode.com/problems/jump-game/" },
        { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/" },
        { title: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/" },
        { title: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      ],
    },
    {
      name: "Others",
      count: 5,
      problems: [
        { title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/" },
        { title: "Design Tic-Tac-Toe", link: "https://leetcode.com/problems/design-tic-tac-toe/" },
        { title: "Design Snake Game", link: "https://leetcode.com/problems/design-snake-game/" },
        { title: "Design Underground System", link: "https://leetcode.com/problems/design-underground-system/" },
        { title: "Design Hit Counter", link: "https://leetcode.com/problems/design-hit-counter/" },
      ],
    },
  ]


const Sheets = () => {


    

  return (
    <div className=' m-10 overflow-y-auto bg-neutral-900 h-full w-[45rem] p-12 scrollbar-hidden ml-[5rem]'>

      <h2 className="text-xl  z-30 max-sm:text-md max-sm:m-4 text-white text-center max-w-2xl m-9 "> DSA Sheet </h2>
    {/* Main Accordion for Topics */}
    {topics.map((topic, index) => (
      <Accordion key={index} className="bg-gray-900">
        <AccordionSummary
        expandIcon={<FaChevronDown className='text-white' />}
         aria-controls={`panel${index}-content`}
         id={`panel${index}-header`}
         sx={{
           backgroundColor: "#27272a", // Tailwind's bg-gray-900
           color: "white",
           "&:hover": {
             backgroundColor: "#0c0a09", // Tailwind's hover:bg-gray-600
           },
        padding : "17px",
        
        
       
         }}
        >
          <Typography>{topic.name}</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-stone-950">
          <Typography>
            {/* List problems under each topic */}
            
            <span className='flex flex-col gap-3'>
              {topic.problems.map((problem, idx) => (
                <span key={idx}>
                  <a href={problem.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 flex justify-between h-auto bg-neutral-800 p-4 rounded-md">
              ● {problem.title}       <FaLink />
                  </a>
                </span>
              ))}
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </div>
  
  
  )
}

export default Sheets


