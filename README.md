# Sorting Algorithms Visualizer
This repository i will implementing how the bubble sort algorithm will work to sort array

## Description
bubble sort is a simple sorting algorithm that works by repeatedly iterating through the list of elements, comparing adjacent elements and swapping them if they are in the wrong order. This process is repeated until the list is sorted.

Here is the step-by-step algorithm for bubble sort:

Start with an unsorted list of n elements.
Iterate through the list n-1 times.
For each iteration, compare adjacent elements in the list.
If the adjacent elements are in the wrong order (i.e., the first element is greater than the second element), swap them.
Continue iterating through the list and swapping adjacent elements until you reach the end of the list.
After each iteration, the largest element in the list will be moved to its correct position.
Repeat the process (starting from step 3) for the remaining unsorted elements until the entire list is sorted.
Here is an example of how bubble sort works:

Suppose we have an unsorted list of integers: [5, 3, 8, 2, 9]

First iteration:
Compare 5 and 3. Since 5 is greater than 3, swap them. The list becomes [3, 5, 8, 2, 9].
Compare 5 and 8. Since they are in the correct order, do not swap them. The list remains [3, 5, 8, 2, 9].
Compare 8 and 2. Since 8 is greater than 2, swap them. The list becomes [3, 5, 2, 8, 9].
Compare 8 and 9. Since they are in the correct order, do not swap them. The list remains [3, 5, 2, 8, 9].
After the first iteration, the largest element (9) is in its correct position at the end of the list.

Second iteration:
Compare 3 and 5. Since they are in the correct order, do not swap them. The list remains [3, 5, 2, 8, 9].
Compare 5 and 2. Since 5 is greater than 2, swap them. The list becomes [3, 2, 5, 8, 9].
Compare 5 and 8. Since they are in the correct order, do not swap them. The list remains [3, 2, 5, 8, 9].
After the second iteration, the second largest element (8) is in its correct position at the second-to-last position in the list.

Third iteration:
Compare 3 and 2. Since 3 is greater than 2, swap them. The list becomes [2, 3, 5, 8, 9].
Compare 3 and 5. Since they are in the correct order, do not swap them. The list remains [2, 3, 5, 8, 9].
After the third iteration, the third largest element (5) is in its correct position at the third-to-last position in the list.

Fourth iteration:
Compare 2 and 3. Since they are in the correct order, do not swap them. The list remains [2, 3, 5, 8, 9].
After the fourth iteration, the fourth largest element (8) is in its correct position at the fourth-to-last position in the list.

Fifth iteration:
Compare 3 and 5. Since they are in the correct order, do not swap them. The list remains [2, 3, 5, 8, 9].
After the fifth and final iteration, the entire list is sorted in ascending order: [2, 3, 5, 8, 9]. It's worth noting that the bubble sort algorithm has a worst-case time complexity of O(n^2), meaning that as the number of elements in the list grows, the time it takes to sort the list increases at a rate that's proportional to the square of the number of elements. This makes it inefficient for large lists, but it's still useful for small lists or as a teaching tool for understanding the basic principles of sorting algorithms.

## Built With
* HTML
* CSS
 * Java Script

## Run Code
We can show the pages of the project from github-pages 

https://momen-odeh.github.io/Sorting-Algorithms-Visualizer/

## License
Copyright © 2023 [Momen Odeh](https://github.com/Momen-Odeh)<br />
