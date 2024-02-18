document.addEventListener('DOMContentLoaded', function() {
    const originalArrayDiv = document.getElementById('original-array');
    const bubbleSortStepsDiv = document.getElementById('bubble-sort-steps');
    const insertionSortStepsDiv = document.getElementById('insertion-sort-steps');
    const selectionSortStepsDiv = document.getElementById('selection-sort-steps');
    const mergeSortStepsDiv = document.getElementById('merge-sort-steps');
    const quickSortStepsDiv = document.getElementById('quick-sort-steps');
    const bubbleSortButton = document.getElementById('bubble-sort-button');
    const insertionSortButton = document.getElementById('insertion-sort-button');
    const selectionSortButton = document.getElementById('selection-sort-button');
    const mergeSortButton = document.getElementById('merge-sort-button');
    const quickSortButton = document.getElementById('quick-sort-button');
    const originalArray = [5, 15, 9, 8, 5, 2, 0, 3, 11, 12];

    // Display original array
    originalArray.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');
        elementDiv.textContent = element;
        originalArrayDiv.appendChild(elementDiv);
    });
// Bubble Sort Button Click Handler
    bubbleSortButton.addEventListener('click', function() {
        const bubbleSortSteps = bubbleSort(originalArray.slice());
        displaySortingSteps(bubbleSortSteps, bubbleSortStepsDiv, 'bubble-sort-steps-count');
    });

// Insertion Sort Button Click Handler
    insertionSortButton.addEventListener('click', function() {
        const insertionSortSteps = insertionSort(originalArray.slice());
        displaySortingSteps(insertionSortSteps, insertionSortStepsDiv, 'insertion-sort-steps-count');
    });

// Selection Sort Button Click Handler
    selectionSortButton.addEventListener('click', function() {
        const selectionSortSteps = selectionSort(originalArray.slice());
        displaySortingSteps(selectionSortSteps, selectionSortStepsDiv, 'selection-sort-steps-count');
    });

// Merge Sort Button Click Handler
    mergeSortButton.addEventListener('click', function() {
        const mergeSortSteps = mergeSort(originalArray.slice());
        displaySortingSteps(mergeSortSteps, mergeSortStepsDiv, 'merge-sort-steps-count');
    });

// Quick Sort Button Click Handler
    quickSortButton.addEventListener('click', function() {
        const quickSortSteps = quickSort(originalArray.slice());
        displaySortingSteps(quickSortSteps, quickSortStepsDiv, 'quick-sort-steps-count');
    });

    // Function to display sorting steps and return the total number of steps
    function displaySortingSteps(steps, stepsDiv, stepsCountId) {
        let stepCount = 0;
        const stepsCountDiv = document.getElementById(stepsCountId);
        const interval = setInterval(() => {
            if (stepCount < steps.length) {
                displayStep(steps[stepCount], stepCount, steps.length - 1 === stepCount, stepsDiv);
                stepCount++;
                stepsCountDiv.textContent = `Total Steps: ${stepCount}`;
            } else {
                clearInterval(interval);
            }
        }, 500); // Change the delay time if needed

        return steps.length;
    }

    // Function to display a sorting step
    function displayStep(step, stepIndex, isLastStep, stepsDiv) {
        const currentArray = step.slice(0, -1); // Get the array from the step data
        const activeIndex = step.slice(-1)[0]; // Get the index of the active element from the step data

        // Clear previous steps
        stepsDiv.innerHTML = '';

        // Display current step
        currentArray.forEach((element, index) => {
            const elementDiv = document.createElement('div');
            elementDiv.classList.add('element');
            elementDiv.textContent = element;

            // Check if element is already sorted from the end
            let isSorted = true;
            // Check if all elements to the left of the current element are less than or equal to it
            for (let i = 0; i < index; i++) {
                if (currentArray[i] > element) {
                    isSorted = false;
                    break;
                }
            }
            // Check if all elements to the right of the current element are greater than or equal to it
            for (let i = index + 1; i < currentArray.length; i++) {
                if (currentArray[i] < element) {
                    isSorted = false;
                    break;
                }
            }
            if (isLastStep && index === activeIndex) {
                elementDiv.classList.add('sorted');
            } else if (isSorted) {
                elementDiv.classList.add('sorted');
            }

            // Highlight the active element
            if (index === activeIndex && !isLastStep) {
                elementDiv.classList.add('active');
            }
            stepsDiv.appendChild(elementDiv);
        });
    }
});