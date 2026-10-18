<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
	<title>404</title>
</head>
<body>

<h1>404: Not Found</h1>

<p>The document you are looking for was not found. This could be due to a
mistake on the part of the person who created the link, or it could be due
to this being the domain upon which I hosted my personal website many years
ago and the effects of link rot. For a very long time I issued redirects to my now-not-very-new personal
website, but now I've started to use this domain for other projects, so
I'm not doing that now any more.</p>

<p>You might like to try <a href="http://dorward.me.uk<?php 
	print htmlspecialchars($_SERVER['REQUEST_URI']);
?>">http://dorward.me.uk<?php 
	print htmlspecialchars($_SERVER['REQUEST_URI']);
?></a>.</p>

</body>
</html>
