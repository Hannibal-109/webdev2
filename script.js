

function newFunction() {
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener("mouseover", function () {
			this.classList.add("highlight");
		});
		links[i].addEventListener("mouseout", function () {
			this.classList.remove("highlight");
		});
	}
}
