// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.
    console.log(tasks);
    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.


function removeDuplicates() {
    'use strict'
    var sorted = tasks.slice().sort();
    var results = [];
    for(var i = 0; i < sorted.length-1; i++){
        delete tasks[i]
        if (sorted[i+1] != sorted[i]){
            tasks[i] = sorted[i];
            console.log(results);
        }
    }
    console.log(sorted[i])
    return false;

}
// Initial setup:
function init() {
    'use strict';
    if (input.id = 'submit') {
        document.getElementById('theForm').onsubmit = addTask;
    }else if(input.id = 'rmDupe')
    console.log(tasks);
} // End of init() function.
window.onload = init;