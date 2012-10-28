<h1>Responsive Images Library</h1>
==================================

<p>Library for delivering images based on screen size. Uses matchmedia.js for detecting breakpoints falling back to standard JS .innerwidth() for getting screen width.</p>

<p>It currently supports the breakpoints:</p>

<ul>
	<li>320px</li>
    <li>768px</li>
    <li>1024px</li>
    <li>1220px</li>
    <li>1440px</li>
</ul>

<h3>Dependencies</h3>

<h4><a href="https://github.com/fofr/matchMedia.js">MatchMedia.js</a></h4>
<p>A Library for testing matching media queries with CSS transitions.</p>


<h3>Installation</h3>

<p>Applying the solution to images/elements is very easy, simply add a class of "responsive-image" to the element and add the following data attributes</p>
<ul>
	<li>data-threetwenty="path/to/image"</li>
	<li>data-sevensixeight="path/to/image"</li>
	<li>data-tentwentyfour="path/to/image"</li>
	<li>data-twelvetwenty="path/to/image"</li>
	<li>data-fourteenforty="path/to/image"</li>
</ul>

