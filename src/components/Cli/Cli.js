import React, { useState, useEffect } from 'react';
import Terminal from 'terminal-js-emulator';
import {Link} from 'react-router-dom';

const Cli = () =>{
    useEffect(()=>{
        let t1 = new Terminal('terminal');
        const date = new Date();
        // t1.setHeight("100vh");
        t1.setTextColor("#2ed327");
        t1.print('> Your session started at ' + date.toDateString() + ' ' + date.toLocaleTimeString());
        t1.print("> Welcome to the terminal of Visualgo !");
        t1.print("> Know about various algorithms here !");
        t1.print("_________________________________________________________");
        t1.print('Enter `Algorithms` to see the available Algorithm Commands :');
        t1.input('', command => {
            handleCommand(command, t1);
        });  
    },[]);

    const handleCommand = (command, t1) => {
        if (command === "Algorithms") {
            callAlgorithms(t1);
        } 
        else if (command === "Bubble Sort") {
            t1.print("================ Bubble Sort ================");
            callBubble(t1);
        } 
        else if (command === "Selection Sort") {
            t1.print("================ Selection Sort ================");
            callSelection(t1);
        } 
        else if (command === "Insertion Sort") {
            t1.print("================ Insertion Sort ================");
            callInsertion(t1);
        }
        else if (command === "Merge Sort") {
            t1.print("================ Merge Sort ================");
            callMerge(t1);
        }
        else if (command === "Quick Sort") {
            t1.print("================ Quick Sort ================");
            callQuick(t1);
        }
        else if (command === "Djisktra") {
            t1.print("================ Djisktra Pathfinding ================");
            callDjisktra(t1);
        }
        else if (command === "Linear Search") {
            t1.print("================ Linear Search ================");
            callLinear(t1);
        }
        else if (command === "Binary Search") {
            t1.print("================ Binary Search ================");
            callBinary(t1);
        }
        else {
            t1.print(command +" is not a right command");
        }
        t1.input('', command => {
            handleCommand(command, t1);
        });
    }

    //functions
    const callAlgorithms = (t1) =>{
         t1.print("$ Commands Available For Algorithms : ");
         t1.print("> Bubble Sort");
         t1.print("> Selection Sort");
         t1.print("> Insertion Sort");
         t1.print("> Merge Sort");
         t1.print("> Quick Sort");
         t1.print("> Djisktra");
         t1.print("> Linear Search");
         t1.print("> Binary Search");
    }

    const callBubble = (t1) =>{
         t1.print("> Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.");
         t1.print("==>Time Complexity : Best O(n), Worst O(n*n), Average O(n*n)");     
         t1.print("Used if :");
         t1.print("#complexity does not matter");
         t1.print("#short and simple code is preferred");
    }

    const callSelection = (t1) =>{
        t1.print("> Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration");
        t1.print("> and places that element at the beginning of the unsorted list.");
        t1.print("==>Time Complexity : Best O(n*n), Worst O(n*n), Average O(n*n)");     
        t1.print("Used if :");
        t1.print("#a small list is to be sorted");
        t1.print("#cost of swapping does not matter");
   }
   
   const callMerge = (t1) =>{
    t1.print("> Merge Sort is based on the principle of Divide and Conquer Algorithm.");
    t1.print("> Merge sort first divides the array into equal halves and then combines them in a sorted manner.");
    t1.print("==>Time Complexity : Best O(n*log n), Worst O(n*log n), Average O(n*log n)");     
    t1.print("Used if :");
    t1.print("#inversion count problem");
    t1.print("#external sorting");
   }
     
   const callInsertion = (t1) =>{
    t1.print("> Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.");
    t1.print("==>Time Complexity : Best O(n), Worst O(n*n), Average O(n*n)");     
    t1.print("Used if :");
    t1.print("#the array is has a small number of elements");
    t1.print("#there are only a few elements left to be sorted");
}

const callQuick = (t1) =>{
    t1.print("> Quicksort is a sorting algorithm based on the divide and conquer approach,");
    t1.print("Merge sort first divides the array into equal halves and then combines them in a sorted manner.");
    t1.print("==>Best O(n*log n), Worst O(n*n), Average O(n*log n)");     
    t1.print("Used if :");
    t1.print("#the programming language is good for recursion");
}

const callDjisktra = (t1) =>{
    t1.print("> Dijkstra's algorithm allows us to find the shortest path between any two vertices of a graph.");
    t1.print("==>Time Complexity : Best O(n), Worst O(n*n), Average O(n*n)");     
    t1.print("Used if :");
    t1.print("#complexity does not matter");
    t1.print("#short and simple code is preferred");
}

const callLinear = (t1) =>{
    t1.print("A sequential search is made over all items one by one.");
    t1.print("Every item is checked and if a match is found then that particular item is returned,");
    t1.print("otherwise the search continues till the end of the data collection.");
    t1.print("Time Complexity : Best O(1), Worst O(n), Average O(n)");
}

const callBinary = (t1) =>{
    t1.print(">Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array.");
    t1.print(">If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.");
    t1.print(">Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.");
    t1.print("==>Time Complexity : Best O(1), Worst O(log n), Average O(log n)");
}

    return(
        <React.Fragment>
      <div className={"cli"}>
      <div id="terminal"></div>
      {/* <button style="position: absolute; top: 10px; right: 10px" onclick="switchMode()">3D Mode</button> */}
      <Link to={"/"} className={"btn btn-success"}>Home</Link>
      </div>
      </React.Fragment>
    );
}
export default Cli;
