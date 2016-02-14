/*eslint-env browser */
export default class MyElement extends HTMLElement {
	createdCallback() {
		let header = document.createElement("p");
		header.textContent = "Hello World";
		this.insertBefore(header, this.firstChild);

		this.footer = document.createElement("p");
		this.appendChild(this.footer);

		// monitor content changes
		let observer = new MutationObserver(this.update);
		observer.observe(this, { childList: true });
	}

	attachedCallback() {
		let update = this.update.bind(this);
		update();
		this.addEventListener("click", update);
	}

	detachedCallback() {
	}

	attributeChangedCallback(attr, before, after) {
	}

	update() {
		this.footer.textContent = new Date();
	}
}
