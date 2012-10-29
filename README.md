<h1>Responsive Images Library</h1>
==================================

<p>Library for delivering images based on screen size. Uses Modernizrs mq() for detecting breakpoints falling back to standard JS .innerwidth for getting screen size.</p>

<p>It can support as many breakpoints as you need just add the required width as a data attribute. </p>

<h3>Installation</h3>

<p>Applying the solution to images/elements is very easy, simply add a class of "responsive-image" to the element and add the following data attributes</p>
<ul>
	<li>data-320="path/to/image"</li>
	<li>data-768="path/to/image"</li>
	<li>data-1024="path/to/image"</li>
	<li>data-1220="path/to/image"</li>
	<li>data-1440="path/to/image"</li>
</ul>

<h3>Dependencies</h3>

<h4><a href="http://modernizr.com/">Modernizr.js</a></h4>
<p>A Library for feature detection. Using Modernizr.mq which tests a given media query, live against the current state of the window</p>
