<h1>Responsive Images Library</h1>
==================================

<p>Library for delivering images based on screen size. Supporting breakpoints:</p>

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
	<li>data-threetwenty="path/to/image"</li>
	<li>data-threetwenty="path/to/image"</li>
</ul>

<p>Example Image Element</p>
<pre><code>
	<img class="responsive-image" src="http://www.placehold.it/320x320" data-threetwenty="http://www.placehold.it/320x320" data-sevensixeight="http://www.placehold.it/768x768" data-tentwentyfour="http://www.placehold.it/1024x768" data-twelvetwenty="http://www.placehold.it/1220x768" data-fourteenforty="http://www.placehold.it/1440x768">
</code></pre>

<p>Example BackgroundImage Element</p>
<code>
	<section class="responsive-image" style="background: url('http://www.placehold.it/360x360') 0 0 no-repeat;" data-threetwenty="http://www.placehold.it/320x320" data-sevensixeight="http://www.placehold.it/768x768" data-tentwentyfour="http://www.placehold.it/1024x768" data-twelvetwenty="http://www.placehold.it/1220x768" data-fourteenforty="http://www.placehold.it/1440x768">
</code>