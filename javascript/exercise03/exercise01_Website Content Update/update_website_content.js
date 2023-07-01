/**
 * Exercise: Web page content update
In this reading, you will learn how to capture user input and process it. You'll be introduced to a simple example that demonstrates how to manipulate information displayed based on user input.
 */

//To capture user input, you can use the built-in prompt() method, like this:
// let answer = prompt('What is your name?');


/**
 *  Once you have the user-provided input inside the answer variable, you can manipulate it any way you need to.
    For example, you can output the typed-in information on the screen, as an <h1> HTML element.
    Here's how you'd do that:
 */
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}
/**
 *  This is probably the quickest and easiest way to capture user input on a website, but doing it this way is not the most efficient approach, especially in more complex scenarios.
    This is where HTML forms come in.
    You can code a script which will take an input from an HTML form and display the text that a user types in on the screen.
 */
// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

//The next thing that you need to do is: set up an event listener. The event you're listening for is the change event. In this case, the change event will fire after you've typed into the input and pressed the ENTER key.
// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('change', function() {
//     console.log(input.value)
// })


//Now, the only thing that you still need to do to complete my code is to update the text content of the h1 element with the value you got from the input field.
//Here's the complete, updated code:
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})