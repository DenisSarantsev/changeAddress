document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('.chat-body__wrapper').addEventListener('wheel', function(event) {
		event.preventDefault();
		this.scrollTop -= event.deltaY;
	});
})