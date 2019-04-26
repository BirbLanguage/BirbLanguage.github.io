let code_blocks;

function intro(){
	window.scrollTo(0,0);
	title.innerHTML = "What is BirbLang?";
	text_stuff.innerHTML = "Are you or a loved one a birb? Are you or said loved one interested in learning to code? Well you're in luck! BirbLang is a programming language designed to be used by all birbs alike, allowing for them to finally have the opportunity to code programs to their heart's desire.<br><br>Using terminology that birbs would understand, including floof, flying, seed, megafloof, ultrafloof, and more, the language is simple to be understood by the brains of the fluff balls we know as birbs, providing them with an opportunity known by no one before! <br><br>Additionally, BirbLang is designed to be similar to most popular languages, such as Python or Ruby, and so includes features such as while loops, conditionals, variables, and even the ability to solve whatever math equation birbs require to build that nest they were trying to make. This makes for no difference between what us mere humans are capable of doing with our simple programming languages, and puts both species at the same level for coding.";
}

function getting_started(){
	window.scrollTo(0,0);
	title.innerHTML = "Getting Started";
	text_stuff.innerHTML = "Getting started with BirbLang is simple! All you would need to do is download the interpreter <span class='index' onclick='download()'>here</span>, fire it up, and start coding! The interpreter itself will be consistently checked for bugs and updated with new features <del>if I don't get lazy with it</del>, so be sure to check back every once in a while in case anything has changed.<br><br>Learning to use BirbLang can be done through this website, as it will go through every feature it has to offer for the birbs interested in starting to code.";
}

function download(){
	window.scrollTo(0,0);
	title.innerHTML = "Download";
	text_stuff.innerHTML = "The download link for the interpreter is below, and if it doesn't work just send me a message via carrier pigeon to see what could be done about it (my email should also work though).<br><br>For those wondering, the interpreter is written in Python using Tkinter to create the GUI layout. The github repo is <a href='https://github.com/BirbLanguage/BirbLang-Interpreter'>here</a> for those who want to check it out.<br><br><a class='download' href='BirbLang.exe' download><div class='download-box-thing'>Download BirbLang Interpreter</div></a><br><i>Note: Because this is a website hosted on Github and run by some guy on the internet who is by no means qualified to be making websites, the download may trigger some anti-virus softwares upon installation or when trying to run the program. To get past this, just ignore their message (if the option is there), and it should work (trust me, I don't even know how to create a virus, and there would be no reason for me to make one anyway).</i><br><br><h3><i>Changelog</i></h3><h4><u>BirbLang 1.0.1</u></h4>Apparently a single line of code was breaking the entire thing, so that's fixed now<br><h4><u>BirbLang 1.0.0</u></h4><h6>This is version 1.0 because I said so.</h6>BirbLang 1.0! This is the first version I feel is able to execute <i>most</i> of the commands and functions quite well, so its definitely the version most suitable for birb kind. Most bugs from any of the previous versions have been fixed, so while loops, conditional statements, math equations, and array references should be able to work fine.";
}

function program_setup(){
	window.scrollTo(0,0);
	title.innerHTML = "Setting Up Your Program";
	text_stuff.innerHTML = "BirbLang programs must have 2 elements within them - <i>hatch egg</i> and <i>slep</i>. <br><br><i>hatch egg</i> indicates the start of the program, so anything before it will be ignored and the actual execution will start following that line. Similarly, <i>slep</i> ends the program, and anything following that will not be run.<br><br><b>Example:</b><br><div class = 'code'>squawk \"This will not run\"<br>hatch egg<br>squawk \"Hello World!\"<br>slep<br>squawk \"This also won't run\"</div><div class = 'output'>Output:<br>Hello World!</div><i>Note: hatch egg and slep must be on their own, so no comments should be placed on the same line as them</i>";
	highlightAll();
}

function output(){
	window.scrollTo(0,0);
	title.innerHTML = "Output";
	text_stuff.innerHTML = "In BirbLang, there are 2 ways to output text.<br>The first way is by using the <i>squawk</i> function, which outputs text with a newline following it.<br><i>chirp</i> works the same as <i>squawk</i>, but will output text without a newline following it.<br>Both functions can take numbers, strings (text surrounded by either double quotes or single quotes), booleans (a value of either True or False), previously defined variables, and math equations.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>squawk 'Hello'<br>chirp 'World'<br>chirp '!'<br>slep</div><div class = 'output'>Output:<br>Hello<br>World!</div><br>Both functions can also output specific elements within an array by specifying the index of the element.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>squawk [5,1,6] at 2<br>slep</div><div class = 'output'>Output:<br>6</div>";
	highlightAll();
}

function comments(){
	window.scrollTo(0,0);
	title.innerHTML = "Comments";
	text_stuff.innerHTML = "Comments within codes are pieces of text within your program <b>that are not executed</b>. It is often good practice to place comments within your code as it is very easy to forget how your program works and it would make it easier for others reviewing your code to understand what certain parts were meant to do.<br>Similar to Python, comments in BirbLang are defined by using a <i>#</i>, with anything following the # being ignored by the program.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>squawk 'Hello World!'<br># squawk 'This will not be executed'<br>slep</div><div class = 'output'>Output:<br>Hello World!</div>";
	highlightAll();

}

function variables(){
	window.scrollTo(0,0);
	title.innerHTML = "Variables";
	text_stuff.innerHTML = "In programming, variables are essentially containers that hold a certain value to be used later. To declare a variable in BirbLang, the following syntax is used:<br><div class = 'code'>new birb variable_name is value</div><br>This declaration gives <i>variable_name</i> a value of <i>value</i>, and can be called again later on to return its value.<br><br><b>Example</b><br><div class = 'code'>hatch egg<br>new birb num is 5<br>squawk num<br>slep</div><div class = 'output'>Output:<br>5</div><br>To reassign a value to a variable, the following syntax can be used:<br><div class = 'code'>variable_name is now new_value</div><br><i>Note: to be able to reassign a value, the variable must be declared <b>before the reassignment</b>, otherwise an error will be raised.</b></i><br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb num is 5<br>squawk num<br>num is now 7<br>squawk num<br>slep</div><div class = 'output'>Output:<br>5<br>7</div>";
	highlightAll();
}

function data_types(){
	window.scrollTo(0,0);
	title.innerHTML = "Data Types";
	text_stuff.innerHTML = "Data types are basically the different types of values that can be used throughout your program. In BirbLang, the different data types are as follows:<br><b>String</b> - Any length of text enclosed within either \"double quotes\" or 'single quotes' (excluding newlines<br><b>Int</b> - An int (short for integer) is a whole number represented without double or single quotation marks. This data type can be put in math equations involving other ints or floats, and can also be multiplied by strings as a way of repeating that string a certain number of times.<br><b>Float</b> - Similar to ints, floats (floating point numbers) are decimal numbers, represented as <i>x.y</i>. These numbers can be put in equations with ints, but unlike them cannot be multiplied by strings.<br><b>Boolean</b> - A boolean is a data type capable of holding 1 of 2 values, either True or False. This value can be used within conditionals to test a condition without having to write out a condition.<br><b>Lists</b> - Lists are a collection of different values stored within a single data type. As with Python, data types in BirbLang are defined by a set of values separated by commas all encased within square brackets [].<br><br><i>breed of variable_name</i> is BirbLang's way for finding the data type of a value and will print the value's respective type. <i>breed of variable_name is now data_type</i> changes the data type of the value of the variable provided.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb foo is \"Hello\"<br>breed of foo<br>breed of foo is now list<br>squawk foo<br>slep</div><div class = 'output'>Output:<br>&lt;class 'str'&gt;<br>['H','e','l','l','o']</div>";
	highlightAll();
}

function math_stuff(){
	window.scrollTo(0,0);
	title.innerHTML = "Math Equations & Operators";
	text_stuff.innerHTML = "BirbLang supports the 6 basic math operators - <i>addition</i>, <i>subtraction</i>, <i>multiplication</i>, <i>division</i>, <i>exponents</i>, and <i>roots</i>. The table below shows how each operator can be used:<br><table><tr><th><i>Math Operator</i></th><th><i>BirbLang Operator</i></th><th><i>Math Syntax</i></th><th><i>BirbLang Syntax</i></th></tr><tr><td>+</td><td>floof</td><td>x + y</td><td>floof x by y</td></tr><tr><td>-</td><td>unfloof</td><td>x - y</td><td>unfloof x by y</td></tr><tr><td>×</td><td>megafloof</td><td>x × y</td><td>megafloof x by y</td></tr><tr><td>÷</td><td>megaunfloof</td><td>x ÷ y</td><td>megaunfloof x by y</td></tr><tr><td>^</td><td>ultrafloof</td><td>x ^ y</td><td>ultrafloof x by y</td></tr><tr><td>√</td><td>ultraunfloof</td><td><sup>y</sup>√x</td><td>ultraunfloof x by y</td></tr></table><br>These operators can be used when setting values to variables, printing something out, or for checking conditions.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb bar is ultrafloof 6 by 2<br>squawk floof bar by 3<br>slep</div><div class = 'output'>Output:<br>39</div><br>Additionally, single variables can be incremented and decremented without the need to write the entire equation, but just by using <i>floof variable_name</i> or <i>unfloof variable_name</i><br><br><b>Example</b><br><div class = 'code'>hatch egg<br>new birb foo is 5<br>floof foo<br>squawk foo<br>slep</div><div class = 'output'>Output:<br>6</div><br>Multiple equations can be calculated together by surrounding individual equations within (). Any equations surrounded within brackets will be calculated first, and the result of the calculation will just replace that value within the equation.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb foo is 6<br>new birb bar is 4<br>squawk megafloof foo by (ultraunfloof bar by 2)<br>slep</div><div class = 'output'>Output:<br>12.0</div>";
	highlightAll();
}

function lists(){
	window.scrollTo(0,0);
	title.innerHTML = "Lists";
	text_stuff.innerHTML = "As mentioned <span class = 'index' onclick = 'data_types()'>here</span>, lists are a collection of different elements placed within a single value or variable. BirbLang supports a couple different ways of manipulating these lists.<br><br><i>peck variable_name</i> and <i>peck variable_name at index</i> will remove an element within the array at either the end of the list or the index specified, respectively. In the case that the index provided is not within the list, then an error will be raised.<br><i>feed variable_name value</i> and <i>feed variable_name value at index</i> will do essentially the opposite, and insert a value within either the end of the list or the index specified, respectively.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb spam is [5,1,7,2]<br>peck spam at 1<br>feed spam 5 at 2<br>squawk spam<br>slep</div><div class = 'output'>Output:<br>[5,7,5,2]</div>";
	highlightAll();
}

function conditionals(){
	window.scrollTo(0,0);
	title.innerHTML = "Conditionals";
	text_stuff.innerHTML = "Conditionals in programming are statements which test whether a certain condition is true or false, and will return either value accordingly. For example, the conditional <i>5 > 2</i> would return a boolean value of True because the statement is, in fact, true.<br><br>As with most other languages, BirbLang can test a variety of different conditions.<br><b>x is floofier than y</b> will return true if the value of <i>x</i> is greater than the value of <i>y</i>.<br><b>x is floofier than or just as floofy as y</b> will return True if <i>x</i> is greater than or equal to the value of <i>y</i>.<br><b>x is not as floofy as y</b> will return True if the value of <i>x</i> is less than the value of <i>y</i> (or, for strings and lists, if the value of <i>x</i> is not equal to the value of <i>y</i>).<br><b>x is not as floofy or just as floofy as y</b> will return true if the value of <i>x</i> is less than or equal to the value of <i>y</i>.<br><b>x is just as floofy as y</b> will return True if the value of <i>x</i> is equal to the value of <i>y</i> (this works with strings and lists as well).<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb egg is 5<br>squawk egg is floofier than 2<br>squawk 2 is floofier than egg<br>slep</div><div class = 'output'>Output:<br>True<br>False</div><br>Additionally, multiple conditions can be tested as one large condition by separating each condition with either <i>or</i> or <i>and</i>. Conditions separated with <i>or</i> will return True if 1 of out any of the conditions returns True, while conditions separated by <i>and</i> will only return True if all conditions evaluate to True as well (otherwise, it will return False).<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb foo is 5<br>squawk foo is floofier than 2 or foo is not as floofy as 3<br>squawk foo is floofier than 2 and foo is not as floofy as 3<br>slep</div><div class = 'output'>Output:<br>True<br>False</div>";
  highlightAll();
}

function conditionals_but_not_really(){
	window.scrollTo(0,0);
	title.innerHTML = "If/Elif/Else Chains";
	text_stuff.innerHTML = "if/elif/else chains are a way of running specific lines of code under a certain condition, so that to allow for a better control of the flow of the program and to provide new ideas for the birb brain to conjure up.<br>In BirbLang, if/elif/else chains are declared by having a birb have the sudden desire to eat a seed, check whether the seed should be eaten, and if none of the birbs checks for the seed appear to pass, then the seed is thrown away.<br><br>The basic syntax for this chain is as follows:<br><div class = 'code'><i>variable_name</i> desires seed # Declares conditional block<br>eat seed if condition<br>&emsp;# code to be executed if the condition is true<br>eat seed if condition<br>&emsp; # if the previous condition returned false and this condition returned true, this code will run<br>throw seed away<br>&emsp; # If all other cases failed, this code will run<br><i>variable_name</i> no longer desires seed # Ends conditional block</div><br>In the example above, the first line will declare that the following code is apart of the conditional block, and will allow for if/elif/else statements to be tested.<br>Line 2 checks <i>condition</i>, and if it returns True, then the code within that block is executed and the rest of the code block is ignored.<br>Line 4 is the <i>elif</i> statement, and will run only if the first condition returned False. If it did, then it will test its condition, and run its block if it returns true.<br>Line 6 is the <i>else</i> case, and will run if every other previous case above it returned False. If they have, no condition is required to run it, and it will execute its code block automatically and skip to the end of the code block.<br>Line 8 will end the code block.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb num is 5<br>num desires seed<br>eat seed if it is floofier than 10<br>&emsp;chirp num<br>&emsp;squawk \" is greater than 10\"<br>eat seed if it is not as floofy or just as floofy as 10<br>&emsp;chirp num<br>&emsp;squawk \" is less than or equal to 10\"<br>throw seed away<br>&emsp;chirp num<br>&emsp;squawk \" is not greater than, equal to, or less than 10? OwO\"<br>num no longer desires seed<br>slep</div><div class = 'output'>Output:<br>5 is less than or equal to 10</div><i>Note: Replacing the value in any of the conditions with \"it\" will simply replace that value with the value of the variable originally declared at the start of the conditional statement, as to allow for a cleaner code.</i>";
	highlightAll();
}

function while_loop(){
	window.scrollTo(0,0);
	title.innerHTML = "While Loops";
	text_stuff.innerHTML = "While loops are similar to conditional blocks in that they rely on a condition to return True before being able to run, with the primary difference being that they will continue to loop through itself until that condition returns False.<br><br>The BirbLang syntax for a while loop is as follows:<br><div class = 'code'><i>variable_name</i> is flying while <i>condition</i><br>&emsp;# Code to run if the condition returns True<br>stop flying</div><br>Following the example above, <i>condition</i> will first be checked to see if it returns True. If it does, all the code in between the declaration of the loop and its corresponding <i>stop flying</i> will be executed. Once it reaches the end, it will loop back to the original declaration, check whether the condition is True, and will execute the code block once again if so. This loop will continue until <i>condition</i> evaluates to False, where it will then skip to the line following its corresponding <i>stop flying</i> statement.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb spam is 5<br>spam is flying while it is not as floofy as 8<br>&emsp;squawk spam<br>&emsp;floof spam<br>stop flying<br>slep</div><div class = 'output'>Output:<br>5<br>6<br>7</div><i>Note: As with if/elif/else statements, replacing any value within the conditional to \"it\" will simply replace it with the variable being run through the loop.</i>";
	highlightAll()
}

function examples(){
	window.scrollTo(0,0);
	title.innerHTML = "Examples";
	text_stuff.innerHTML = "Example #1: Factorial Calculator<br><div class = 'code'>hatch egg<br><br># Declares 2 variables, with factorial being user input<br>new birb factorial is mimic<br>breed of factorial is now int<br>new birb result is 1<br><br>chirp \"The factorial of \"<br>chirp factorial<br>chirp \" is \"<br><br># Declares a while loop which multiplies every number<br># between 1 and the number specified by the user<br>factorial is flying while it is floofier than 1<br>&emsp;result is now megafloof it by factorial<br>&emsp;unfloof factorial<br>stop flying<br><br>squawk result<br>slep</div><br>Example #2: Scientific Notation<br><div class = 'code'># Starts the program<br>hatch egg<br><br># Declares 2 variables - num and counter - with num being<br># user input (converted to a float) and counter being 0<br>new birb num is mimic<br>breed of num is now float<br>new birb counter is 0<br><br>chirp num<br>chirp ' = '<br><br># Declares a while loop which doesn't stop until<br># 10 > num >= 1<br>num is flying while it is not as floofy as 1.0 or it is floofier than or just as floofy as 10.0<br><br># Checks to see if num is less than 1 or greater than or<br># equal to 10, as to know whether to multiply or <br># divide it by 10<br>&emsp;num desires seed<br>&emsp;eat seed if num is not as floofy as 1.0<br>&emsp;&emsp;num is now megafloof it by 10<br>&emsp;&emsp;unfloof counter<br>&emsp;eat seed if num is floofier than or just as floofy as 10.0<br>&emsp;&emsp;num is now megaunfloof it by 10<br>&emsp;&emsp;floof counter<br>&emsp;num no longer desires seed # Ends the conditional<br>stop flying # Ends the while loop<br><br># Prints the result<br>chirp num<br>chirp ' * 10^'<br>chirp counter<br><br>slep<br># Terminates the program</div><br>Example #3: Trailing 0s of Factorial<br><div class = 'code'>hatch egg<br><br>new birb factorial is mimic<br>breed of factorial is now int<br>new birb result is 1<br>chirp factorial<br>chirp \"! = \"<br><br># Finds the factorial of a number<br>factorial is flying while it is floofier than 1<br>&emsp;result is now megafloof it by factorial<br>&emsp;unfloof factorial<br>stop flying<br><br>chirp result<br>chirp \" which has \"<br><br>new birb break is 0<br>new birb index is -1<br>new birb counter is 0<br>breed of result is now list<br><br># Loops through each 0 at the end of the number, incrementing a counter for each 0 there is<br>break is flying while it is not as floofy as 1<br>&emsp;new birb temp is result at index<br>&emsp;temp desires seed<br>&emsp;eat seed if temp is as floofy as 0<br>&emsp;&emsp;floof counter<br>&emsp;&emsp;unfloof index<br>&emsp;throw seed away<br>&emsp;&emsp;# Increments break by 1, breaking the loop<br>&emsp;&emsp;floof break<br>&emsp;temp no longer desires seed<br>stop flying<br><br>chirp counter<br>chirp \" trailing 0s\"<br><br>slep</div>";
	highlightAll();
}

function highlightAll() {
	let codes = document.querySelectorAll('.code');
	codes.forEach(x => {
		x.innerHTML = highlight(x.innerText);
	})
}

window.onload = function(){
	title = document.getElementById("title");
	text_stuff = document.getElementById("text_stuff");
	intro();
}
