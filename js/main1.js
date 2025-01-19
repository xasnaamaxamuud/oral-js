// index and mobile and gym
let cart = [];

// Universal Add to Cart Functionality
const buttons = document.querySelectorAll('.add-to-cart');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        const productName = button.getAttribute('data-name');
        const productDescription = button.getAttribute('data-description');
        const productImage = button.getAttribute('data-image');
        addToCart({ id: productId, name: productName, description: productDescription, image: productImage });
    });
});

// Add to Cart Function
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Update Cart Button and Modal
function updateCart() {
    const cartButton = document.querySelector('#cart-button');
    cartButton.innerHTML = `<i class="fas fa-shopping-cart mr-2"></i> Cart (${cart.length})`;

    updateCartModal();
}

// Update Cart Modal Content
function updateCartModal() {
    const cartItemsList = document.querySelector('#cart-items');
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('flex', 'justify-between');
        li.innerHTML = `
            <div class="flex space-x-4">
                <img src="${item.image}" class="w-24 h-24 object-cover rounded-md" alt="${item.name}">
                <div>
                    <h4 class="text-lg font-medium">${item.name}</h4>
                    <p class="text-sm text-gray-500">${item.description}</p>
                </div>
            </div>
            <button class="text-red-500 remove-item" data-id="${item.id}">Remove</button>
        `;
        cartItemsList.appendChild(li);
    });

    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = e.target.getAttribute('data-id');
            removeFromCart(itemId);
        });
    });
}

// Remove Item from Cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

// Modal Open/Close Functionality
document.querySelector('#cart-button').addEventListener('click', () => {
    document.querySelector('#cart-modal').classList.toggle('hidden');
});
document.querySelector('#close-modal').addEventListener('click', () => {
    document.querySelector('#cart-modal').classList.add('hidden');
});


     
       // Toggling the mobile menu
       document.getElementById('menu-toggle').addEventListener('click', function() {
        var mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });


        // log in js
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('email').value.trim(); // Get email value
    const password = document.getElementById('password').value; // Get password value

    // Allow login without password
    if (username === "xusnimaxamuud123@gmail.com") {
        alert("Welcome back!");
        window.location.href = "./index.html"; // Redirect to the main page
    } else {
        alert("Invalid username or email!");
    }
}



      
// kitcken

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 30,
    breakpoints: {
        768: {
            perView: 1
        },
        1024: {
            perView: 2
        }
    }
}).mount();



    // chart page
        // Function to show the modal
        function openModal() {
            document.getElementById('signUpModal').classList.remove('hidden');
        }

        // Close the modal when 'Close' button is clicked
        document.getElementById('closeModalBtn').addEventListener('click', function () {
            document.getElementById('signUpModal').classList.add('hidden');
        });

        // Handle form submission
        document.getElementById('signUpForm').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('You have successfully signed up!');
            document.getElementById('signUpModal').classList.add('hidden');
        });
// chapterska inta kabilabnayaan





function showChapter(chapter) {
    // Hide both chapters first
    document.getElementById("chapter1").classList.add("hidden");
    document.getElementById("chapter2").classList.add("hidden");
    document.getElementById("chapter3").classList.add("hidden");
    document.getElementById("chapter4").classList.add("hidden");
    document.getElementById("chapter5").classList.add("hidden");
    document.getElementById("chapter6").classList.add("hidden");
    document.getElementById("chapter7").classList.add("hidden");
    document.getElementById("chapterContent").classList.add("hidden");
   
    

    
  
    
   
    
    // Show the selected chapter
    document.getElementById("chapter" + chapter).classList.remove("hidden");
}


//ch1


function checkEvenOrOdd() {
    let num = prompt("Enter a number to check if it's even or odd:");
    num = Number(num);

    if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
    }

    let result = num % 2 === 0 ? "even" : "odd";
    document.getElementById('result').textContent = `The number ${num} is ${result}.`;
}






// Multiply two numbers
function multiplyNumbers() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let product = num1 * num2;
    document.getElementById('result').textContent = `The product of ${num1} and ${num2} is ${product}.`;
}

// Subtract two numbers
function subtractNumbers() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let difference = num1 - num2;
    document.getElementById('result').textContent = `The difference between ${num1} and ${num2} is ${difference}.`;
}

let count = 0;  // Variable to track the number of clicks

function sayHello() {
    count++;  // Increment the count each time the button is clicked
    document.getElementById("message").innerText = "Hello World " + count + "!";
}

// ch2

function calculate() {
    const num1 = parseFloat(prompt("Enter first number:"));
    const num2 = parseFloat(prompt("Enter second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('arithmeticResult').textContent = 'Please enter valid numbers.';
        return;
    }

    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num2 !== 0 ? (num1 / num2) : 'Cannot divide by zero';

    document.getElementById('arithmeticResult').innerHTML = `
        Addition: ${addition} <br>
        Subtraction: ${subtraction} <br>
        Multiplication: ${multiplication} <br>
        Division: ${division}
    `;
}


//Arithmetic Operations

function clearResult() {
    document.getElementById("result").innerText = "";
}

// Function to validate if the input is a valid number
function getValidNumber(promptMessage) {
    let num;
    while (true) {
        num = parseFloat(prompt(promptMessage));
        // Check if the input is a valid number and not NaN
        if (!isNaN(num)) {
            return num;
        } else {
            alert("Please enter a valid number.");
        }
    }
}

// Addition of two numbers
function getValidNumber(promptMessage) {
    let num;
    while (true) {
        num = parseFloat(prompt(promptMessage));
        // Check if the input is a valid number and not NaN
        if (!isNaN(num)) {
            return num;
        } else {
            alert("Please enter a valid number.");
        }
    }
}

// Addition of two numbers
function addNumbers() {
    let num1 = getValidNumber("Enter the first number:");
    let num2 = getValidNumber("Enter the second number:");
    let sum = num1 + num2;
    alert("Sum: " + sum);
}

// Subtraction of two numbers
function subtractNumbers() {
    let num1 = getValidNumber("Enter the first number:");
    let num2 = getValidNumber("Enter the second number:");
    let difference = num1 - num2;
    alert("Difference: " + difference);
}

// Multiplication of two numbers
function multiplyNumbers() {
    let num1 = getValidNumber("Enter the first number:");
    let num2 = getValidNumber("Enter the second number:");
    let product = num1 * num2;
    alert("Product: " + product);
}

// Division of two numbers
function divideNumbers() {
    let num1 = getValidNumber("Enter the first number:");
    let num2 = getValidNumber("Enter the second number:");
    if (num2 === 0) {
        alert("Cannot divide by zero.");
    } else {
        let quotient = num1 / num2;
        alert("Quotient: " + quotient);
    }
}

// Modulus of two numbers
function modulusNumbers() {
    let num1 = getValidNumber("Enter the first number:");
    let num2 = getValidNumber("Enter the second number:");
    if (num2 === 0) {
        alert("Cannot divide by zero.");
    } else {
        let remainder = num1 % num2;
        alert("Remainder: " + remainder);
    }
}

// Exponentiation of two numbers
function exponentiateNumbers() {
    let base = getValidNumber("Enter the base number:");
    let exponent = getValidNumber("Enter the exponent:");
    let result = Math.pow(base, exponent);
    alert("Result: " + result);
}


// Comparison Operators
function getValidPositiveNumber(promptMessage) {
    let num;
    while (true) {
        num = prompt(promptMessage);
        // Check if the input is a number and not negative or empty
        if (!isNaN(num) && num >= 0 && num !== "") {
            return parseFloat(num);
        } else {
            alert("Please enter a valid positive number (no letters, no negative numbers).");
        }
    }
}

// Equal (==) comparison
function checkEqual() {
    let num1 = getValidPositiveNumber("Enter the first number:");
    let num2 = getValidPositiveNumber("Enter the second number:");
    let result = (num1 == num2);
    alert("Equal (==): " + result);
}

// Strict Equal (===) comparison
function checkStrictEqual() {
    let num1 = getValidPositiveNumber("Enter the first number:");
    let num2 = getValidPositiveNumber("Enter the second number:");
    let result = (num1 === num2);
    alert("Strict Equal (===): " + result);
}

// Not Equal (!=) comparison
function checkNotEqual() {
    let num1 = getValidPositiveNumber("Enter the first number:");
    let num2 = getValidPositiveNumber("Enter the second number:");
    let result = (num1 != num2);
    alert("Not Equal (!=): " + result);
}

// Strict Not Equal (!==) comparison
function checkStrictNotEqual() {
    let num1 = getValidPositiveNumber("Enter the first number:");
    let num2 = getValidPositiveNumber("Enter the second number:");
    let result = (num1 !== num2);
    alert("Strict Not Equal (!==): " + result);
}

// Greater Than (>) comparison
function checkGreaterThan() {
    let num1 = getValidPositiveNumber("Enter the first number:");
    let num2 = getValidPositiveNumber("Enter the second number:");
    let result = (num1 > num2);
    alert("Greater Than (>): " + result);
}

// Less Than (<) comparison
function checkLessThan() {
    let num1 = getValidPositiveNumber("Enter the first number:");
    let num2 = getValidPositiveNumber("Enter the second number:");
    let result = (num1 < num2);
    alert("Less Than (<): " + result);
}

// Greater Than or Equal (>=) comparison
function checkGreaterOrEqual() {
    let num1 = getValidPositiveNumber("Enter the first number:");
    let num2 = getValidPositiveNumber("Enter the second number:");
    let result = (num1 >= num2);
    alert("Greater Than or Equal (>=): " + result);
}

// Less Than or Equal (<=) comparison
function checkLessOrEqual() {
    let num1 = getValidPositiveNumber("Enter the first number:");
    let num2 = getValidPositiveNumber("Enter the second number:");
    let result = (num1 <= num2);
    alert("Less Than or Equal (<=): " + result);
}


// logical op

function checkAnd() {
    let a = prompt("Is A true or false?");
    let b = prompt("Is B true or false?");
    let result = (a.toLowerCase() === 'true') && (b.toLowerCase() === 'true');
    alert(`Logical AND (A && B) = ${result}`);
}

function checkOr() {
    let a = prompt("Is A true or false?");
    let b = prompt("Is B true or false?");
    let result = (a.toLowerCase() === 'true') || (b.toLowerCase() === 'true');
    alert(`Logical OR (A || B) = ${result}`);
}

function checkNot() {
    let a = prompt("Is A true or false?");
    let result = !(a.toLowerCase() === 'true');
    alert(`Logical NOT (!A) = ${result}`);
}


//betwise

function getNumber(promptMessage) {
    const input = prompt(promptMessage);
    return parseInt(input);
}

function performAND() {
    const a = getNumber("Enter number one:");
    const b = getNumber("Enter number two:");
    const result = a & b;
    alert(`a & b: ${result}`);
}

function performOR() {
    const a = getNumber("Enter number one:");
    const b = getNumber("Enter number two:");
    const result = a | b;
    alert(`a | b: ${result}`);
}

function performXOR() {
    const a = getNumber("Enter number one:");
    const b = getNumber("Enter number two:");
    const result = a ^ b;
    alert(`a ^ b: ${result}`);
}

function performNOT() {
    const a = getNumber("Enter number one:");
    const result = ~a;
    alert(`~a: ${result}`);
}

function performLeftShift() {
    const a = getNumber("Enter number one:");
    const result = a << 1;
    alert(`a << 1: ${result}`);
}

function performRightShift() {
    const a = getNumber("Enter number one:");
    const result = a >> 1;
    alert(`a >> 1: ${result}`);
}

// asigment op
function addAssignment() {
    let a = parseInt(prompt("Enter the initial number:"));
    const b = parseInt(prompt("Enter the number to add:"));
    a += b;
    alert(`After a += b, a is now: ${a}`);
}

function subtractAssignment() {
    let a = parseInt(prompt("Enter the initial number:"));
    const b = parseInt(prompt("Enter the number to subtract:"));
    a -= b;
    alert(`After a -= b, a is now: ${a}`);
}

function multiplyAssignment() {
    let a = parseInt(prompt("Enter the initial number:"));
    const b = parseInt(prompt("Enter the number to multiply:"));
    a *= b;
    alert(`After a *= b, a is now: ${a}`);
}

function divideAssignment() {
    let a = parseInt(prompt("Enter the initial number:"));
    const b = parseInt(prompt("Enter the number to divide by:"));
    a /= b;
    alert(`After a /= b, a is now: ${a}`);
}

function modulusAssignment() {
    let a = parseInt(prompt("Enter the initial number:"));
    const b = parseInt(prompt("Enter the number for modulus:"));
    a %= b;
    alert(`After a %= b, a is now: ${a}`);
}
// ternary op
    // 1. Check if a number is even or odd
    function checkEvenOdd() {
        const number = parseInt(prompt("Enter a number:"));
        const result = (number % 2 === 0) ? `${number} is even.` : `${number} is odd.`;
        alert(result);
    }

    // 2. Check if age is adult (18 or older)
    function checkAdult() {
        const age = parseInt(prompt("Enter your age:"));
        const result = (age >= 18) ? "You are an adult." : "You are not an adult.";
        alert(result);
    }

    // 3. Check letter grade based on score
    function checkGrade() {
        const score = parseInt(prompt("Enter your score (0-100):"));
        const result = (score >= 90) ? 'A' :
                       (score >= 80) ? 'B' :
                       (score >= 70) ? 'C' :
                       (score >= 60) ? 'D' : 'F';
        alert(`Your grade is: ${result}`);
    }

    // 4. Check if it's suitable weather for an activity
    function checkWeather() {
        const temperature = parseInt(prompt("Enter the temperature in °C:"));
        const result = (temperature > 20) ? "It's a nice day for outdoor activities." : "It's better to stay indoors.";
        alert(result);
    }

    // 5. Check string length
    function checkLength() {
        const text = prompt("Enter a string:");
        const result = (text.length > 10) ? "The string is long." : "The string is short.";
        alert(result);
    }
    
    // ch3

        // 1. Check if a number is even or odd
        function checkEvenOrOdd() {
            const number = parseInt(prompt("Enter a number:"));
            if (number % 2 === 0) {
                alert(`${number} is an even number.`);
            } else {
                alert(`${number} is an odd number.`);
            }
        }

        // 2. Check if the user is eligible to vote
        function checkAgeEligibility() {
            const age = parseInt(prompt("Enter your age:"));
            if (age >= 18) {
                alert("You are eligible to vote.");
            } else {
                alert("You are not eligible to vote.");
            }
        }

        // 3. Grade a student based on their score
        function gradeStudent() {
            const score = parseInt(prompt("Enter your score (0-100):"));
            let grade;
            if (score >= 90) {
                grade = 'A';
            } else if (score >= 80) {
                grade = 'B';
            } else if (score >= 70) {
                grade = 'C';
            } else if (score >= 60) {
                grade = 'D';
            } else {
                grade = 'F';
            }
            alert(`Your grade is: ${grade}`);
        }

        // 4. Choose a favorite color using switch
        function favoriteColor() {
            const color = prompt("Enter a color (red, green, blue):").toLowerCase();
            switch (color) {
                case 'red':
                    alert("You chose red.");
                    break;
                case 'green':
                    alert("You chose green.");
                    break;
                case 'blue':
                    alert("You chose blue.");
                    break;
                default:
                    alert("Unknown color.");
            }
        }

        // 5. Count from 1 to 10 using a for loop
        function countToTen() {
            let result = "";
            for (let i = 1; i <= 10; i++) {
                result += i + " ";
            }
            alert(`Counting to ten: ${result}`);
        }

        // 6. Count while less than 10 using a while loop
        function countWhileLessThanTen() {
            let count = 1;
            let result = "";
            while (count < 10) {
                result += count + " ";
                count++;
            }
            alert(`Counting while less than 10: ${result}`);
        }

        // 7. Repeat asking for numbers until zero is entered
        function repeatUntilZero() {
            let number;
            do {
                number = parseInt(prompt("Enter a number (0 to exit):"));
                if (number !== 0) {
                    alert(`You entered: ${number}`);
                }
            } while (number !== 0);
        }

        // 8. Example of breaking a loop
        function breakInLoop() {
            let result = "";
            for (let i = 1; i <= 10; i++) {
                if (i === 6) break; // Break when i is 6
                result += i + " ";
            }
            alert(`Counting until 6: ${result}`);
        }

        // 9. Example of continuing in a loop
        function continueInLoop() {
            let result = "";
            for (let i = 1; i <= 10; i++) {
                if (i % 2 === 0) continue; // Skip even numbers
                result += i + " ";
            }
            alert(`Odd numbers from 1 to 10: ${result}`);
        }

        // 10. Sum of first N numbers
        function sumNumbers() {
            const n = parseInt(prompt("Enter a positive integer:"));
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                sum += i;
            }
            alert(`The sum of the first ${n} numbers is: ${sum}`);
        }

        // 11. Calculate factorial
        function calculateFactorial() {
            const n = parseInt(prompt("Enter a non-negative integer:"));
            let factorial = 1;
            for (let i = 1; i <= n; i++) {
                factorial *= i;
            }
            alert(`The factorial of ${n} is: ${factorial}`);
        }

        // 12. Print Fibonacci series
        function printFibonacci() {
            const n = parseInt(prompt("Enter the number of Fibonacci terms:"));
            let a = 0, b = 1, result = "";
            for (let i = 1; i <= n; i++) {
                result += a + " ";
                const temp = a;
                a = b;
                b = temp + b;
            }
            alert(`Fibonacci series: ${result}`);
        }

        // 13. Reverse a string
        function reverseString() {
            const str = prompt("Enter a string to reverse:");
            let reversed = "";
            for (let i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            alert(`Reversed string: ${reversed}`);
        }

        // 14. Find the maximum number
        function findMaxNumber() {
            const numbers = prompt("Enter numbers separated by commas:").split(",").map(Number);
            let maxNumber = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] > maxNumber) {
                    maxNumber = numbers[i];
                }
            }
            alert(`The largest number is: ${maxNumber}`);
        }

        // 15. Count down from N
        function countDown() {
            const n = parseInt(prompt("Enter a number to count down from:"));
            let result = "";
            for (let i = n; i >= 1; i--) {
                result += i + " ";
            }
            alert(`Counting down from ${n}: ${result}`);
        }

        // 16. Determine age group
        function ageGroup() {
            const age = parseInt(prompt("Enter your age:"));
            if (age < 13) {
                alert("You are a child.");
            } else if (age < 20) {
                alert("You are a teenager.");
            } else if (age < 65) {
                alert("You are an adult.");
            } else {
                alert("You are a senior.");
            }
        }
        

// ch4

 // Global variable
 let globalVariable = "I am a global variable!";

// 1. Function to show the global variable
function showGlobalVariable() {
    alert(globalVariable);
}

// 2. Function to change the global variable
function changeGlobalVariable() {
    globalVariable = "Global variable has been changed!";
    alert(globalVariable);
}

// 3. Function demonstrating local variable
function localVariableExample() {
    let localVariable = "I am a local variable!";
    alert(localVariable);
}

// 4. Function to calculate sum using local variables
function calculateSum() {
    let a = parseFloat(prompt("Enter first number:"));
    let b = parseFloat(prompt("Enter second number:"));
    let sum = a + b; // Local variable
    alert(`The sum of ${a} and ${b} is: ${sum}`);
}

// 5. Function trying to use a local variable outside its scope
function useLocalVarOutside() {
    try {
        alert(localVariable); // This will throw an error
    } catch (error) {
        alert("Error: " + error.message);
    }
}
// kuwa cusub
function greetUser() {
    const name = prompt("What is your name?");
    if (name) {
        document.getElementById("message").innerHTML = `Hello, ${name}! Welcome to our page!`;
    } else {
        document.getElementById("message").innerHTML = "Hello, stranger!";
    }
}

// Function to add two numbers
function addTwoNumbers() {
    const num1 = parseInt(prompt("Enter the first number:"));
    const num2 = parseInt(prompt("Enter the second number:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("message").innerHTML = "Please enter valid numbers.";
    } else {
        const sum = num1 + num2;
        document.getElementById("message").innerHTML = `The sum of ${num1} and ${num2} is ${sum}.`;
    }
}

// Function to check if a number is prime
function checkPrimeNumber() {
    const number = parseInt(prompt("Enter a number to check if it's prime:"));
    
    if (isNaN(number) || number < 2) {
        document.getElementById("message").innerHTML = "Please enter a valid number greater than 1.";
        return;
    }
    
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    document.getElementById("message").innerHTML = isPrime
        ? `${number} is a prime number.`
        : `${number} is not a prime number.`;
}

// Function to check if a string is a palindrome
function checkPalindrome() {
    const str = prompt("Enter a word or phrase to check if it's a palindrome:");
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    if (cleanedStr === reversedStr) {
        document.getElementById("message").innerHTML = `${str} is a palindrome!`;
    } else {
        document.getElementById("message").innerHTML = `${str} is not a palindrome.`;
    }
}

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius() {
    const fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));
    
    if (isNaN(fahrenheit)) {
        document.getElementById("message").innerHTML = "Please enter a valid number.";
    } else {
        const celsius = (fahrenheit - 32) * (5 / 9);
        document.getElementById("message").innerHTML = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    }
}

// Function to calculate factorial
function calculateFactorial() {
    const number = parseInt(prompt("Enter a number to calculate its factorial:"));
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    document.getElementById("message").innerHTML = `Factorial of ${number} is ${result}`;
}

// Function to calculate the length of a string
function getStringLength() {
    const str = prompt("Enter a string:");
    document.getElementById("message").innerHTML = `The length of "${str}" is ${str.length} characters.`;
}

// Function to calculate Body Mass Index (BMI)
function calculateBMI() {
    const weight = parseFloat(prompt("Enter your weight in kg:"));
    const height = parseFloat(prompt("Enter your height in meters:"));
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("message").innerHTML = "Please enter valid weight and height.";
    } else {
        const bmi = weight / (height * height);
        document.getElementById("message").innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
    }
}

// Function to sum an array of numbers
function sumArrayNumbers() {
    const input = prompt("Enter numbers separated by commas:");
    const numbers = input.split(",").map(num => parseFloat(num.trim()));
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    document.getElementById("message").innerHTML = `The sum of the numbers is ${sum}.`;
}

// Function to reverse a string
function reverseString() {
    const str = prompt("Enter a string to reverse:");
    const reversed = str.split('').reverse().join('');
    document.getElementById("message").innerHTML = `Reversed string: ${reversed}`;
}

// Function to evaluate a student's grade
function evaluateGrade() {
    const grade = parseFloat(prompt("Enter the grade (0-100):"));
    
    let result;
    if (grade >= 90) {
        result = "A";
    } else if (grade >= 80) {
        result = "B";
    } else if (grade >= 70) {
        result = "C";
    } else if (grade >= 60) {
        result = "D";
    } else {
        result = "F";
    }

    document.getElementById("message").innerHTML = `Your grade is: ${result}`;
}

// Function to multiply two numbers
function multiplyTwoNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const product = num1 * num2;
    document.getElementById("message").innerHTML = `The product of ${num1} and ${num2} is ${product}.`;
}

// Function to calculate the area of a circle
function calculateCircleArea() {
    const radius = parseFloat(prompt("Enter the radius of the circle:"));
    const area = Math.PI * radius * radius;
    document.getElementById("message").innerHTML = `The area of the circle with radius ${radius} is ${area.toFixed(2)}.`;
}

// Function to convert kilograms to pounds
function convertKgToPounds() {
    const kg = parseFloat(prompt("Enter weight in kilograms:"));
    const pounds = kg * 2.20462;
    document.getElementById("message").innerHTML = `${kg} kg is equal to ${pounds.toFixed(2)} pounds.`;
}

// Function to calculate birth year
function calculateBirthYear() {
    const age = parseInt(prompt("Enter your age:"));
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    document.getElementById("message").innerHTML = `You were born in ${birthYear}.`;
}



// ch5

// Exit the page
function exitPage() {
    window.location.href = 'chapters.html'; // URL of the chapters page
}

// Array Constructor Example
function arrayConstructor() {
    const moha = new Array("Lia", "Mohamuud", "Axmed");
    document.getElementById("message").innerHTML = moha.join(", ");
}

// Array Literal Example
function ArrayLiteral() {
    const Names = ["Moha", "Maymun", "Ridu"];
    document.getElementById("message").innerHTML = Names.join(", ");
}

// Empty Array Example
function emptyArray() {
    const magacyo = [];
    magacyo[0] = "First";
    magacyo[1] = "Second";
    document.getElementById("message").innerHTML = magacyo.join(", ");
}

// Array.from() Example
function arrayFromStr() {
    const qalin = Array.from("Xusni");
    document.getElementById("message").innerHTML = qalin.join(", ");
}

// Initializer Example
function initializer() {
    const myXusni = new Array(5).fill("Empty");
    document.getElementById("message").innerHTML = myXusni.join(", ");
}

// Spread Operator Example
function spreadOperator() {
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    document.getElementById("message").innerHTML = arr2.join(", ");
}

// Array.of() Example
function myArray() {
    const myName = Array.of(1, 2, 3);
    document.getElementById("message").innerHTML = myName.join(", ");
}

// Adding Items to Array Example
function adding() {
    const fruits = ["Apple", "Banana"];
    fruits.push("Mango");
    fruits.unshift("Orange");
    document.getElementById("message").innerHTML = fruits.join(", ");
}

// Updating Array Example
function updating() {
    const fruits = ["Canbo", "Tufaax", "Zeytuun"];
    fruits[2] = "Xasnaa";
    document.getElementById("message").innerHTML = fruits.join(", ");
}

// Removing Items from Array Example
function remove() {
    const magacyo = ["Xamdi", "Xafso", "Amino"];
    magacyo.shift();
    document.getElementById("message").innerHTML = magacyo.join(", ");
}

// Splice Remove Example
function spliceRemove() {
    const numbers = ["Xamda", "Hawa", "Qadro", "Fowziyo"];
    numbers.splice(0, 2);
    document.getElementById("message").innerHTML = numbers.join(", ");
}

// Pop Remove Example
function popRemove() {
    const tusale = ["Ari", "Geel", "Dameer"];
    tusale.pop();
    document.getElementById("message").innerHTML = tusale.join(", ");
}

// Loop Through Properties of an Object Example
function loopThroughProperties() {
    const user = {
        name: 'Siham',
        adu_level: 'Bachelor',
        gra_status: 'Active'
    };
    let outputText = "<b>Looping through user object:</b><br>";
    for (let key in user) {
        outputText += `${key}: ${user[key]}<br>`;
    }
    document.getElementById("message").innerHTML = outputText;
}

// Normal Object Example
function normalObject() {
    const user = {
        name: "Xusni",
        age: 20,
        city: "Mogadishu"
    };
    document.getElementById("message").innerHTML = `Name: ${user.name}<br>Age: ${user.age}<br>City: ${user.city}`;
}

// Data Object Example
function dataPer() {
    const data = {
        user: {
            name: "Mohamed Ali",
            age: 20
        },
        hobbies: ["Reciting Quran", "Praying", "Reading", "Swimming"]
    };
    document.getElementById("message").innerHTML = `Name: ${data.user.name}, Age: ${data.user.age}<br>Hobbies: ${data.hobbies.join(", ")}`;
}

// JSON String Example
function jsonString() {
    const jsonString = `{"name":"Mohamed Ali","age":30}`;
    const jsonObject = JSON.parse(jsonString);
    document.getElementById("message").innerHTML = `Name: ${jsonObject.name}, Age: ${jsonObject.age}`;
}

// User Info Example
function userInfo() {
    const user = {
        firstName: "Xusni",
        lastName: "Mahamuud",
        age: 20
    };
    document.getElementById("message").innerHTML = `First Name: ${user.firstName}<br>Last Name: ${user.lastName}<br>Age: ${user.age}`;
}

// First Name Example with Object Constructor
function firstName() {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    const xusni = new User("Mahamed", "Cabdi", 20);
    xusni.email = "mohamed.ali@email.com";
    document.getElementById("message").innerHTML = `First Name: ${xusni.firstName}<br>Age: ${xusni.age}<br>Email: ${xusni.email}`;
}



  // ch6


    // Function 1: Change All Elements
    function changeAllElements() {
    document.getElementById("output").textContent = "All elements have been changed!";
  }

  // Function 2: Change Attributes
  function changeAttributes() {
    const output = document.getElementById("output");
    output.setAttribute("class", "highlighted");
    output.textContent = "Attributes have been changed!";
  }

  // Function 3: Change Styles
  function changeStyles() {
    const output = document.getElementById("output");
    output.style.backgroundColor = "lightblue";
    output.style.color = "darkblue";
    output.style.fontWeight = "bold";
  }

  // Function 4: Remove Element
  function removeElement() {
    const output = document.getElementById("output");
    if (output.lastChild) {
      output.removeChild(output.lastChild);
    } else {
      output.textContent = "Nothing to remove!";
    }
  }

  // Function 5: Add New Element
  function addNewElement() {
    const output = document.getElementById("output");
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph added dynamically.";
    newElement.style.color = "green";
    output.appendChild(newElement);
  }

  // Function 6: React to Existing Event
  function reactToEvent() {
    const output = document.getElementById("output");
    output.textContent = "Reacted to a button click!";
  }

  // Function 7: Create Custom Event
  function createCustomEvent() {
    const output = document.getElementById("output");

    // Create the event
    const customEvent = new Event("customEvent");

    // Add a listener for the custom event
    output.addEventListener("customEvent", () => {
      output.textContent = "Custom event triggered!";
    });

    // Dispatch the custom event
    output.dispatchEvent(customEvent);
  }

  // ch7


  
   //
     // Event for button with id 'mybutton'
     document.getElementById("mybutton").addEventListener("click", function() {
        alert("Button 1 clicked!");
    });

    // Event for button with inline onclick attribute
    function myyfunction() {
        alert("Button 2 clicked!");
    }

    // Event for hover over an element
    document.getElementById("myelement").addEventListener("mouseover", function() {
        this.style.backgroundColor = "lightblue";
    });

    document.getElementById("myelement").addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
    });

    // Event for text input change
    document.getElementById("textinput").addEventListener("input", function() {
        document.getElementById("output").textContent = "You typed: " + this.value;
    });

    // Another input with a different output
    document.getElementById("textinputt").addEventListener("input", function() {
        document.getElementById("outputt").textContent = "You typed: " + this.value;
    });

    // Handling form submission
    document.getElementById("myform").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent form submission
        document.getElementById("outputtt").textContent = "Form submitted with: " + document.getElementById("textinputtt").value;
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Get the parent list element
        const parentList = document.getElementById('parentList');

        // Check if the element is found
        if (parentList) {
            // Add an event listener for clicks on list items
            parentList.addEventListener('click', function(event) {
                // Check if the clicked element is a list item (li)
                if (event.target && event.target.nodeName === "LI") {
                    // Show an alert with the text of the clicked item
                    alert("You clicked on " + event.target.innerText);
                }
            });
        } else {
            console.log("Element not found!");
        }
    });

    AOS.init();

    window.onscroll = function() {scrollFunction()};
 
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("scrollTopBtn").style.display = "block";
        } else {
            document.getElementById("scrollTopBtn").style.display = "none";
        }
    }
 
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
 

  function showChapterContent() {
    // Toggle the visibility of the chapter content
    var content = document.getElementById("chapterContent");
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block"; // Show the content
    } else {
      content.style.display = "none"; // Hide the content again
    }
  }


 

