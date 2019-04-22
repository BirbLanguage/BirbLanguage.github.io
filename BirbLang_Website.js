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
	text_stuff.innerHTML = "The download link for the interpreter is below, and if it doesn't work just send me a message via carrier pigeon to see what could be done about it (my email should also work though).<br><br>For those wondering, the interpreter is written in Python using Tkinter to create the GUI layout. The github repo is <a href='https://github.com/BirbLanguage/BirbLang-Interpreter'>here</a> for those who want to check it out.<br><br><a class='download' href='BirbLang.exe' download><div class='download-box-thing'>Download BirbLang Interpreter</div></a>";
}

function program_setup(){
	window.scrollTo(0,0);
	title.innerHTML = "Setting Up Your Program";
	text_stuff.innerHTML = "BirbLang programs must have 2 elements within them - <i>hatch egg</i> and <i>slep</i>. <br><br><i>hatch egg</i> indicates the start of the program, so anything before it will be ignored and the actual execution will start following that line. Similarly, <i>slep</i> ends the program, and anything following that will not be run.<br><br><b>Example:</b><br><div class = 'code'>squawk \"This will not run\"<br>hatch egg<br>squawk \"Hello World!\"<br>slep<br>squawk \"This also won't run\"</div><div class = 'output'>Output:<br>Hello World!</div><i>Note: hatch egg and slep must be on their own, so no comments should be placed on the same line as them</i>";
}

function output(){
	window.scrollTo(0,0);
	title.innerHTML = "Output";
	text_stuff.innerHTML = "In BirbLang, there are 2 ways to output text.<br>The first way is by using the <i>squawk</i> function, which outputs text with a newline following it.<br><i>chirp</i> works the same as <i>squawk</i>, but will output text without a newline following it.<br>Both functions can take numbers, strings (text surrounded by either double quotes or single quotes), booleans (a value of either True or False), previously defined variables, and math equations.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>squawk 'Hello'<br>chirp 'World'<br>chirp '!'<br>slep</div><div class = 'output'>Output:<br>Hello<br>World!</div><br>Both functions can also output specific elements within an array by specifying the index of the element.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>squawk [5,1,6] at 2<br>slep</div><div class = 'output'>Output:<br>6</div>";
}

function comments(){
	window.scrollTo(0,0);
	title.innerHTML = "Comments";
	text_stuff.innerHTML = "Comments within codes are pieces of text within your program <b>that are not executed</b>. It is often good practice to place comments within your code as it is very easy to forget how your program works and it would make it easier for others reviewing your code to understand what certain parts were meant to do.<br>Similar to Python, comments in BirbLang are defined by using a <i>#</i>, with anything following the # being ignored by the program.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>squawk 'Hello World!'<br># squawk 'This will not be executed'<br>slep</div><div class = 'output'>Output:<br>Hello World!</div>";
}

function variables(){
	window.scrollTo(0,0);
	title.innerHTML = "Variables";
	text_stuff.innerHTML = "In programming, variables are essentially containers that hold a certain value to be used later. To declare a variable in BirbLang, the following syntax is used:<br><div class = 'code'>new birb variable_name is value</div><br>This declaration gives <i>variable_name</i> a value of <i>value</i>, and can be called again later on to return its value.<br><br><b>Example</b><br><div class = 'code'>hatch egg<br>new birb num is 5<br>squawk num<br>slep</div><div class = 'output'>Output:<br>5</div><br>To reassign a value to a variable, the following syntax can be used:<br><div class = 'code'>variable_name is now new_value</div><br><i>Note: to be able to reassign a value, the variable must be declared <b>before the reassignment</b>, otherwise an error will be raised.</b></i><br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb num is 5<br>squawk num<br>num is now 7<br>squawk num<br>slep</div><div class = 'output'>Output:<br>5<br>7</div>";
}

function data_types(){
	window.scrollTo(0,0);
	title.innerHTML = "Data Types";
	text_stuff.innerHTML = "Data types are basically the different types of values that can be used throughout your program. In BirbLang, the different data types are as follows:<br><b>String</b> - Any length of text enclosed within either \"double quotes\" or 'single quotes' (excluding newlines<br><b>Int</b> - An int (short for integer) is a whole number represented without double or single quotation marks. This data type can be put in math equations involving other ints or floats, and can also be multiplied by strings as a way of repeating that string a certain number of times.<br><b>Float</b> - Similar to ints, floats (floating point numbers) are decimal numbers, represented as <i>x.y</i>. These numbers can be put in equations with ints, but unlike them cannot be multiplied by strings.<br><b>Boolean</b> - A boolean is a data type capable of holding 1 of 2 values, either True or False. This value can be used within conditionals to test a condition without having to write out a condition.<br><b>Lists</b> - Lists are a collection of different values stored within a single data type. As with Python, data types in BirbLang are defined by a set of values separated by commas all encased within square brackets [].<br><br><i>breed of variable_name</i> is BirbLang's way for finding the data type of a value and will print the value's respective type. <i>breed of variable_name is now data_type</i> changes the data type of the value of the variable provided.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb foo is \"Hello\"<br>breed of foo<br>breed of foo is now list<br>squawk foo<br>slep</div><div class = 'output'>Output:<br>&lt;class 'str'&gt;<br>['H','e','l','l','o']</div>";
}

function math_stuff(){
	window.scrollTo(0,0);
	title.innerHTML = "Math Equations & Operators";
	text_stuff.innerHTML = "BirbLang supports the 6 basic math operators - <i>addition</i>, <i>subtraction</i>, <i>multiplication</i>, <i>division</i>, <i>exponents</i>, and <i>roots</i>. The table below shows how each operator can be used:<br><table><tr><th><i>Math Operator</i></th><th><i>BirbLang Operator</i></th><th><i>Math Syntax</i></th><th><i>BirbLang Syntax</i></th></tr><tr><td>+</td><td>floof</td><td>x + y</td><td>floof x by y</td></tr><tr><td>-</td><td>unfloof</td><td>x - y</td><td>unfloof x by y</td></tr><tr><td>×</td><td>megafloof</td><td>x × y</td><td>megafloof x by y</td></tr><tr><td>÷</td><td>megaunfloof</td><td>x ÷ y</td><td>megaunfloof x by y</td></tr><tr><td>^</td><td>ultrafloof</td><td>x ^ y</td><td>ultrafloof x by y</td></tr><tr><td>√</td><td>ultraunfloof</td><td><sup>y</sup>√x</td><td>ultraunfloof x by y</td></tr></table><br>These operators can be used when setting values to variables, printing something out, or for checking conditions.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb bar is ultrafloof 6 by 2<br>squawk floof bar by 3<br>slep</div><div class = 'output'>Output:<br>39</div><br>Additionally, single variables can be incremented and decremented without the need to write the entire equation, but just by using <i>floof variable_name</i> or <i>unfloof variable_name</i><br><br><b>Example</b><br><div class = 'code'>hatch egg<br>new birb foo is 5<br>floof foo<br>squawk foo<br>slep</div><div class = 'output'>Output:<br>6</div>";
}

function lists(){
	window.scrollTo(0,0);
	title.innerHTML = "Lists";
	text_stuff.innerHTML = "As mentioned <span class = 'index' onclick = 'data_types()'>here</span>, lists are a collection of different elements placed within a single value or variable. BirbLang supports a couple different ways of manipulating these lists.<br><br><i>peck variable_name</i> and <i>peck variable_name at index</i> will remove an element within the array at either the end of the list or the index specified, respectively. In the case that the index provided is not within the list, then an error will be raised.<br><i>feed variable_name value</i> and <i>feed variable_name value at index</i> will do essentially the opposite, and insert a value within either the end of the list or the index specified, respectively.<br><br><b>Example:</b><br><div class = 'code'>hatch egg<br>new birb spam is [5,1,7,2]<br>peck spam at 1<br>feed spam 5 at 2<br>squawk spam<br>slep</div><div class = 'output'>Output:<br>[5,7,5,2]</div>";
}

function examples(){
	window.scrollTo(0,0);
	title.innerHTML = "Examples";
	text_stuff.innerHTML = "Example #1: Factorial Calculator<br><div class = 'code'>hatch egg<br><br># Declares 2 variables, with factorial being user input<br>new birb factorial is mimic<br>breed of factorial is now int<br>new birb result is 1<br><br>chirp \"The factorial of \"<br>chirp factorial<br>chirp \" is \"<br><br># Declares a while loop which multiplies every number<br># between 1 and the number specified by the user<br>factorial is flying while it is floofier than 1<br>&emsp;result is now megafloof it by factorial<br>&emsp;unfloof factorial<br>stop flying<br><br>squawk result<br>slep</div><br>Example #2: Scientific Notation<br><div class = 'code'># Starts the program<br>hatch egg<br><br># Declares 2 variables - num and counter - with num being<br># user input (converted to a float) and counter being 0<br>new birb num is mimic<br>breed of num is now float<br>new birb counter is 0<br><br>chirp num<br>chirp ' = '<br><br># Declares a while loop which doesn't stop until<br># 10 > num >= 1<br>num is flying while it is not as floofy as 1.0 or it is floofier than or just as floofy as 10.0<br><br># Checks to see if num is less than 1 or greater than or<br># equal to 10, as to know whether to multiply or <br># divide it by 10<br>&emsp;num desires seed<br>&emsp;eat seed if num is not as floofy as 1.0<br>&emsp;&emsp;num is now megafloof it by 10<br>&emsp;&emsp;unfloof counter<br>&emsp;eat seed if num is floofier than or just as floofy as 10.0<br>&emsp;&emsp;num is now megaunfloof it by 10<br>&emsp;&emsp;floof counter<br>&emsp;num no longer desires seed # Ends the conditional<br>stop flying # Ends the while loop<br><br># Prints the result<br>chirp num<br>chirp ' * 10^'<br>chirp counter<br><br>slep<br># Terminates the program</div>";
}

window.onload = function(){
	title = document.getElementById("title");
	text_stuff = document.getElementById("text_stuff");
	intro();
}