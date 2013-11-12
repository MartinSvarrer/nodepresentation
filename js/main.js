(function () {
	Reveal.initialize({
		history: true,
		// Optional libraries used to extend on reveal.js
		dependencies: [
			{ src: 'libs/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
			{ src: 'libs/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: 'libs/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: 'libs/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
			{ src: 'libs/reveal/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
			{ src: 'libs/reveal/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
		]
	});
})();