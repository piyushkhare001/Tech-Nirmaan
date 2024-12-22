/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { FaLink } from "react-icons/fa";
import Accordion, {
    
  } from '@mui/material/Accordion';
  import AccordionSummary from '@mui/material/AccordionSummary';
  import AccordionDetails, {

  } from '@mui/material/AccordionDetails';
  import Typography from '@mui/material/Typography';
  import { FaChevronDown } from "react-icons/fa";


  const startupProblems = [
    {
      category: "Basic Maths (4 problems)",
      problems: [
		{ title: "Palindrome Number", link: "https://leetcode.com/problems/palindrome-number/" },
	
		{ title: "Count Digits | Practice | GeeksforGeeks", link: "https://practice.geeksforgeeks.org/problems/count-digits-in-a-number/0" },
{ title: "Frequency of the Most Frequent Element", link: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/" },
{ title: "Reverse Integer", link: "https://leetcode.com/problems/reverse-integer/" },


      ],
    },
    {
      category: "Arrays (16 problems)",
      problems: [
		{ title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
		{ title: "Single Number", link: "https://leetcode.com/problems/single-number/description/" },
		{ title: "Max Consecutive Ones", link: "https://leetcode.com/problems/max-consecutive-ones/description/" },
		{ title: "Missing Number", link: "https://leetcode.com/problems/missing-number/description/" },
		{ title: "Move Zeroes", link: "https://leetcode.com/problems/move-zeroes/description/" },
		{ title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/" },
		{ title: "Check if Array Is Sorted and Rotated", link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/" },
		{ title: "Assign Cookies", link: "https://leetcode.com/problems/assign-cookies/description/" },
		{ title: "Pascal's Triangle", link: "https://leetcode.com/problems/pascals-triangle/description/" },
		{ title: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/description/" },
		{ title: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/description/" },
		{ title: "Majority Element", link: "https://leetcode.com/problems/majority-element/description/" },
		{ title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/" },
		{ title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/" },
		{ title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/description/" },
		{ title: "Merge Sorted Array", link: "https://leetcode.com/problems/merge-sorted-array/description/" },
		
      ],
    },
    {
      category: "Strings (9 problems)",
      problems: [
		{ title: "Length of Last Word", link: "https://leetcode.com/problems/length-of-last-word/" },
		{ title: "Find the Index of the First Occurrence in a String", link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
		{ title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/" },
		{ title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/" },
		{ title: "Roman to Integer", link: "https://leetcode.com/problems/roman-to-integer/" },
		{ title: "Minimum Add to Make Parentheses Valid", link: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/" },
		{ title: "Permutation in String", link: "https://leetcode.com/problems/permutation-in-string/" },
		{ title: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/" },
		{ title: "Kth Distinct String in an Array", link: "https://leetcode.com/problems/kth-distinct-string-in-an-array/" },
		
		
      ],
    },

	{
		category: "Sortings (5 problems)",
		problems: [
			{ title: "Bubble Sort", link: "https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/practice-problems/algorithm/bubble-sort-15-8064c987/" },
			{ title: "Selection Sort", link: "https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/practice-problems/" },
			{ title: "Insertion Sort", link: "https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/practice-problems/algorithm/monk-and-nice-strings-3/" },
			{ title: "Merge Sort", link: "https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/practice-problems/algorithm/maximum-length-subsequence-f5f9c13d/" },
			{ title: "Quick Sort", link: "https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/practice-problems/algorithm/biggest-cake-possible-6d5915e7/" },
			
		 
		  
		],
	  },

	
  ];

  const serviceBasedProblems = [
    {
      category: "Basic Maths (10 problems)",
      problems: [
		{ title: "Palindrome Number", link: "https://leetcode.com/problems/palindrome-number/description/" },
		{ title: "Count Digits", link: "https://www.geeksforgeeks.org/problems/count-digits5716/1" },
		{ title: "Add Digits", link: "https://leetcode.com/problems/add-digits/description/" },
		{ title: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/description/" },
		{ title: "Roman to Integer", link: "https://leetcode.com/problems/roman-to-integer/description/" },
		{ title: "Divide Two Integers", link: "https://leetcode.com/problems/divide-two-integers/description/" },
		{ title: "Integer to Roman", link: "https://leetcode.com/problems/integer-to-roman/description/" },
		{ title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/description/" },
		{ title: "Reverse Integer", link: "https://leetcode.com/problems/reverse-integer/description/" },
		{ title: "Program for Armstrong Numbers", link: "https://www.geeksforgeeks.org/program-for-armstrong-numbers/" },
		
      ],
    },
    {
      category: "Arrays (16 problems)",
      problems: [
		{ title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
		{ title: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/" },
		{ title: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/" },
		{ title: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/" },
		{ title: "Min Cost Climbing Stairs", link: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
		{ title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/" },
		{ title: "Find First and Last Position of Element in Sorted Array", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
		{ title: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
		{ title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/" },
		{ title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/" },
		{ title: "Majority Element", link: "https://leetcode.com/problems/majority-element/" },
		{ title: "Find Subsequence of Length K With the Largest Sum", link: "https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/" },
		{ title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/" },
		{ title: "Find Original Array From Doubled Array", link: "https://leetcode.com/problems/find-original-array-from-doubled-array/" },
		{ title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/" },
		{ title: "Check if Array Is Sorted and Rotated", link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/" },
		
      ],
    },

	{
		category: "Strings (14 problems)",
		problems: [
			{ title: "Isomorphic Strings", link: "https://leetcode.com/problems/isomorphic-strings/description/" },
			{ title: "Word Pattern", link: "https://leetcode.com/problems/word-pattern/description/" },
			{ title: "Reverse String", link: "https://leetcode.com/problems/reverse-string/description/" },
			{ title: "Is Subsequence", link: "https://leetcode.com/problems/is-subsequence/description/" },
			{ title: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/description/" },
			{ title: "Check Distances Between Same Letters", link: "https://leetcode.com/problems/check-distances-between-same-letters/description/" },
			{ title: "Detect Capital", link: "https://leetcode.com/problems/detect-capital/description/" },
			{ title: "Count Pairs Of Similar Strings", link: "https://leetcode.com/problems/count-pairs-of-similar-strings/description/" },
			{ title: "Palindrome String", link: "https://www.geeksforgeeks.org/problems/palindrome-string0817/1" },
			{ title: "Largest Odd Number in String", link: "https://leetcode.com/problems/largest-odd-number-in-string/description/" },
			{ title: "Count the Number of Vowel Strings in Range", link: "https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/" },
			{ title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/description/" },
			{ title: "Remove Outermost Parentheses", link: "https://leetcode.com/problems/remove-outermost-parentheses/description/" },
			{ title: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/description/" },
			
		],
	  },



	  {
		category: "Searchings & Sortings: (7 problems)",
		problems: [
			{ title: "Bubble Sort", link: "https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/practice-problems/algorithm/bubble-sort-15-8064c987/" },
			{ title: "Selection Sort", link: "https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/practice-problems/" },
			{ title: "Insertion Sort", link: "https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/practice-problems/algorithm/monk-and-nice-strings-3/" },
			{ title: "Merge Sort", link: "https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/practice-problems/algorithm/maximum-length-subsequence-f5f9c13d/" },
			{ title: "Quick Sort", link: "https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/practice-problems/algorithm/biggest-cake-possible-6d5915e7/" },
			{ title: "Linear Search Algorithm", link: "https://www.geeksforgeeks.org/linear-search/" },
			{ title: "Binary Search Algorithm", link: "https://www.geeksforgeeks.org/binary-search/" },
			
		],
	  },


	  
	  {
		category: "Recursions: (4 problems)",
		problems: [
			{ title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/description/" },
{ title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/description/" },
{ title: "Find the K-th Character in String Game I", link: "https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/" },
{ title: "Power of Two", link: "https://leetcode.com/problems/power-of-two/description/" },

		],
	  },




	  
	  {
		category: "Linkedlist: (6  problems)",
		problems: [

			{ title: "Middle of the Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/description/" },
			{ title: "Remove Linked List Elements", link: "https://leetcode.com/problems/remove-linked-list-elements/description/" },
			{ title: "Delete Node in a Linked List", link: "https://leetcode.com/problems/delete-node-in-a-linked-list/description/" },
			{ title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/description/" },
			{ title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/description/" },
			{ title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/description/" },
			
		],
	  },




	  {
		category: "Stacks and Queues: (7  problems)",
		problems: [

			{ title: "Implement Stack Using Array", link: "Implement Stack Using Array" },
			{ title: "Implement Queue Using Array", link: "https://www.geeksforgeeks.org/array-implementation-of-queue-simple/" },
			{ title: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/description/" },
			{ title: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/description/" },
			{ title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/description/" },
			{ title: "Min Stack", link: "https://leetcode.com/problems/min-stack/description/" },
			{ title: "Clear Digits", link: "https://leetcode.com/problems/clear-digits/description/" },
			
		],
	  },




	  {
		category: "Trees: (11  problems)",
		problems: [
			{ title: "Binary Tree Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/description/" },
			{ title: "Binary Tree Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/description/" },
			{ title: "Binary Tree Postorder Traversal", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/description/" },
			{ title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/description/" },
			{ title: "Same Tree", link: "https://leetcode.com/problems/same-tree/description/" },
			{ title: "Height of Binary Tree", link: "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1" },
			{ title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/description/" },
			{ title: "Search in a Binary Search Tree", link: "https://leetcode.com/problems/search-in-a-binary-search-tree/description/" },
			{ title: "Insert into a Binary Search Tree", link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/description/" },
			{ title: "Binary Search", link: "https://leetcode.com/problems/binary-search/description/" },
			{ title: "Minimum Element in BST", link: "https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1" },
			

		],
	  },








  ];

  const productBasedProblems = [
    {
      category: "Arrays (16 problems)",
      problems: [
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
		{ title: "Spirally traversing a matrix", link: "https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1" },
		{ title: "Trapping Rain Water", link: "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1" },
		
      ],
    },
    {
      category: "Strings (14 problems)",
      problems: [
		{ title: "Reverse String", link: "https://leetcode.com/problems/reverse-string/description/" },
		{ title: "Palindrome String", link: "https://www.geeksforgeeks.org/problems/palindrome-string0817/1" },
		{ title: "Count the Number of Vowel Strings in Range", link: "https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/" },
		{ title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/description/" },
		{ title: "Remove Outermost Parentheses", link: "https://leetcode.com/problems/remove-outermost-parentheses/description/" },
		{ title: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/description/" },
		{ title: "Find the Index of the First Occurrence in a String", link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/" },
		{ title: "Permutation in String", link: "https://leetcode.com/problems/permutation-in-string/description/" },
		{ title: "Sort Characters by Frequency", link: "https://leetcode.com/problems/sort-characters-by-frequency/description/" },
		{ title: "Lexicographically Smallest Equivalent String", link: "https://leetcode.com/problems/lexicographically-smallest-equivalent-string/description/" },
		{ title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/description/" },
		{ title: "Distinct Subsequences", link: "https://leetcode.com/problems/distinct-subsequences/description/?envType=problem-list-v2&envId=string" },
		{ title: "Word Break", link: "https://leetcode.com/problems/word-break/?envType=problem-list-v2&envId=string" },
		{ title: "Number of Distinct Substrings in a String", link: "https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/" },
		
      ],
    },
    {
      category: "Recursions  (10 problems)",
      problems: [
		{ title: "Subset Sums", link: "https://www.geeksforgeeks.org/problems/subset-sums2234/1" },
		{ title: "Letter Combinations of a Phone Number", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/" },
		{ title: "Generate Parentheses", link: "https://leetcode.com/problems/generate-parentheses/description/" },
		{ title: "Subsets", link: "https://leetcode.com/problems/subsets/description/" },
		{ title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/description/" },
		{ title: "Fibonacci Numbers", link: "https://leetcode.com/problems/fibonacci-number/description/" },
		{ title: "Word Search", link: "https://leetcode.com/problems/word-search/description/" },
		{ title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/description/" },
		{ title: "M Coloring Problem", link: "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1" },
		{ title: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/" },
		
      ],
    },



    {
		category: "Greedy Algorithms  (10 problems)",
		problems: [
			{ title: "Assign Cookies", link: "https://leetcode.com/problems/assign-cookies/description/" },
			{ title: "Lemonade Change", link: "https://leetcode.com/problems/lemonade-change/description/" },
			{ title: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/description/" },
			{ title: "N Meetings in One Room", link: "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1" },
			{ title: "Delete Greatest Value in Each Row", link: "https://leetcode.com/problems/delete-greatest-value-in-each-row/description/" },
			
		  
		],
	  },



	  
	  {
		category: "Stacks and Queues  (10 problems)",
		problems: [
			{ title: "Implement Stack using Array", link: "" },
			{ title: "Implement Queue using Array", link: "" },
			{ title: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/description/" },
			{ title: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/description/" },
			{ title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/description/" },
			{ title: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/description/" },
			{ title: "Min Stack", link: "https://leetcode.com/problems/min-stack/description/" },
			{ title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/description/" },
			{ title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/description/" },
			
		  
		],
	  },




	  {
		category: "Backtracking  (4 problems)",
		problems: [
			{ title: "Subset Sum Problem", link: "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1" },
			{ title: "N-Queens", link: "https://leetcode.com/problems/n-queens/description/" },
			{ title: "Remove Invalid Parentheses", link: "https://leetcode.com/problems/remove-invalid-parentheses/description/" },
			{ title: "Permutations", link: "https://leetcode.com/problems/permutations/description/?envType=problem-list-v2&envId=backtracking" },
			
			
		  
		],
	  },





	  {
		category: "Sliding Window  (9 problems)",
		problems: [
			{ title: "Minimum Positive Sum Subarray", link: "https://leetcode.com/problems/minimum-positive-sum-subarray/description/?envType=problem-list-v2&envId=sliding-window" },
			{ title: "Find X Sum of All K-Long Subarrays I", link: "https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/description/?envType=problem-list-v2&envId=sliding-window" },
			{ title: "Maximum Strong Pair XOR I", link: "https://leetcode.com/problems/maximum-strong-pair-xor-i/description/?envType=problem-list-v2&envId=sliding-window" },
			{ title: "Shortest Subarray with OR at Least K I", link: "https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/description/?envType=problem-list-v2&envId=sliding-window" },
			
			
			
		  
		],
	  },


	  {
		category: "Binary Trees  (4 problems)",
		problems: [
			{ title: "Binary Tree Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/description/" },
			{ title: "Binary Tree Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/description/" },
			{ title: "Binary Tree Postorder Traversal", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/description/" },
			{ title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/description/" },
			{ title: "Same Tree", link: "https://leetcode.com/problems/same-tree/description/" },
			{ title: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/description/" },
			{ title: "Height of Binary Tree", link: "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1" },
			{ title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/description/" },
			
			
			
		  
		],
	  },





	  {
		category: "BST  (5 problems)",
		problems: [
			{ title: "Search in a Binary Search Tree", link: "https://leetcode.com/problems/search-in-a-binary-search-tree/description/" },
			{ title: "Insert into a Binary Search Tree", link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/description/" },
			{ title: "Binary Search", link: "https://leetcode.com/problems/binary-search/description/" },
			{ title: "Minimum Element in BST", link: "https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1" },
			{ title: "Kth Smallest Element in a BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/" },
			
			
		  
		],
	  },




	  
	  {
		category: "Graphs  (13 problems)",
		problems: [
			{ title: "Number of Enclaves", link: "https://leetcode.com/problems/number-of-enclaves/description/" },
			{ title: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/description/" },
			{ title: "Word Ladder II", link: "https://leetcode.com/problems/word-ladder-ii/description/" },
			{ title: "Is Graph Bipartite?", link: "https://leetcode.com/problems/is-graph-bipartite/description/" },
			{ title: "Course Schedule II", link: "https://leetcode.com/problems/course-schedule-ii/description/" },
			{ title: "Find Eventual Safe States", link: "https://leetcode.com/problems/find-eventual-safe-states/description/" },
			{ title: "Shortest Path in Binary Matrix", link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/description/" },
			{ title: "Path with Minimum Effort", link: "https://leetcode.com/problems/path-with-minimum-effort/description/" },
			{ title: "Cheapest Flights Within K Stops", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/description/" },
			{ title: "Making a Large Island", link: "https://leetcode.com/problems/making-a-large-island/description/" },
			{ title: "BFS Traversal of Graph", link: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1" },
			
			
			
		  
		],
	  },





	  
	  {
		category: "DP (16 problems)",
		problems: [
			{ title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/description/" },
			{ title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/description/?envType=problem-list-v2&envId=dynamic-programming" },
			{ title: "Unique Paths II", link: "https://leetcode.com/problems/unique-paths-ii/description/" },
			{ title: "House Robber", link: "https://leetcode.com/problems/house-robber/description/" },
			{ title: "House Robber II", link: "https://leetcode.com/problems/house-robber-ii/description/" },
			{ title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/description/" },
			{ title: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/description/" },
			{ title: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-subsequence/description/" },
			{ title: "Palindrome Partitioning II", link: "https://leetcode.com/problems/palindrome-partitioning-ii/description/" },
			{ title: "Minimum Falling Path Sum", link: "https://leetcode.com/problems/minimum-falling-path-sum/description/" },
			{ title: "Best Time to Buy and Sell Stock II", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/" },
			{ title: "Longest Palindromic Subsequence", link: "https://leetcode.com/problems/longest-palindromic-subsequence/description/" },
			{ title: "Minimum Cost to Cut a Stick", link: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/description/" },
			
			
		  
		],
	  },



	  	  
	  {
		category: "Bit Manipulation: (5 problems)",
		problems: [
			{ title: "Power of Two", link: "https://leetcode.com/problems/power-of-two/description/" },
			{ title: "Partition to K Equal Sum Subsets", link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/?envType=problem-list-v2&envId=bit-manipulation" },
			{ title: "Subsets", link: "https://leetcode.com/problems/subsets/description/?envType=problem-list-v2&envId=bit-manipulation" },
			{ title: "Flipping an Image", link: "https://leetcode.com/problems/flipping-an-image/description/?envType=problem-list-v2&envId=bit-manipulation" },
			{ title: "Swap Two Numbers", link: "https://www.geeksforgeeks.org/problems/swap-two-numbers3844/1" },
			
			
			
		  
		],
	  },


	  {
		category: "Trie: (3 problems)",
		problems: [
			{ title: "Lexicographical Numbers", link: "https://leetcode.com/problems/lexicographical-numbers/description/?envType=problem-list-v2&envId=trie" },
			{ title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/description/?envType=problem-list-v2&envId=trie" },
			{ title: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/description/" },
			
		  
		],
	  },


	  
	  {
		category: "Segment tree: (3 problems)",
		problems: [
			{ title: "Reverse Pairs", link: "https://leetcode.com/problems/reverse-pairs/description/?envType=problem-list-v2&envId=segment-tree" },
			{ title: "Range Module", link: "https://leetcode.com/problems/range-module/description/?envType=problem-list-v2&envId=segment-tree" },
			{ title: "Falling Squares", link: "https://leetcode.com/problems/falling-squares/description/?envType=problem-list-v2&envId=segment-tree" },
			
		  
		],
	  },






  ];

  const Roadmaps = () => {

	const [selectedCategory, setSelectedCategory] = useState("Startup");
	const renderProblems = (problems : any) => (
		problems.map((topic: { category: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; problems: any[]; }, index: React.Key | null | undefined) => (
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
			  <Typography className=''>{topic.category}</Typography>
			</AccordionSummary>
			<AccordionDetails className="bg-stone-950">
			  <Typography>
				<span className="flex flex-col gap-5 ">
				  {topic.problems.map((problem: { link: string | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, idx: React.Key | null | undefined) => (
					<span key={idx}>
					  <a href={problem.link} target="_blank" rel="noopener noreferrer" className="text-white  hover:text-blue-300 flex justify-between h-auto bg-neutral-800 p-4 rounded-md">
						● {problem.title}       <FaLink />
					  </a>
					</span>
				  ))}
				</span>
			  </Typography>
			</AccordionDetails>
		  </Accordion>
		))
	  );
  return (
<>
<div className="m-10 overflow-y-auto bg-neutral-900 h-full w-[45rem] p-20 scrollbar-hidden ml-[5rem]">
      {/* Category Selector */}
      <div className="flex ml-[6.1rem] gap-6 mb-6">
        {["Startup", "Service Base", "Product Base"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Render Accordion Group Based on Selected Category */}
      {selectedCategory === "Startup" && (
        <>
          <h2 className="text-xl max-sm:text-md max-sm:m-4 text-zinc-400  text-center max-w-2xl m-9">
           Complete Dsa Roadmap to crack Startup 
          </h2>
          {renderProblems(startupProblems)}
        </>
      )}

      {selectedCategory === "Service Base" && (
        <>
          <h2 className="text-xl max-sm:text-md max-sm:m-4 text-zinc-400  text-center max-w-2xl m-9">
		  Complete Dsa Roadmap to crack Service Base Company 
          </h2>
          {renderProblems(serviceBasedProblems)}
        </>
      )}

      {selectedCategory === "Product Base" && (
        <>
          <h2 className="text-xl max-sm:text-md max-sm:m-4 text-zinc-400 text-center max-w-2xl m-9">
		  Complete Dsa Roadmap to crack Product Base Company 
          </h2>
          {renderProblems(productBasedProblems)}
        </>
      )}
    </div>

</>
  );
};

export default Roadmaps;
