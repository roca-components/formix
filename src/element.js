/*eslint-env browser */
import http from "./http";

export default class Formix extends HTMLFormElement {
	attachedCallback() {
		this.refresh();
		this.addEventListener("submit", this.onSubmit.bind(this));
	}

	onSubmit(ev) {
		let uri = this.getAttribute("action");
		let method = this.getAttribute("method") || "GET";
		method = method.toUpperCase();
		let payload = serialize(this);

		http(method, uri, payload).
			then(html => {
				this.innerHTML = html;
				this.refresh();
			});
			// TODO: error handling

		ev.preventDefault();
	}

	refresh() {
		let counter = document.createElement("p");
		counter.textContent = "total: " + this.querySelectorAll("li").length;
		this.insertBefore(counter, this.firstChild);
	}
}

// XXX: too simplistic; edge cases? -- TODO: move into separate library
function serialize(form) {
	let fields = form.querySelectorAll("input, select, textarea");
	return [].reduce.call(fields, (memo, field) => {
		let name = field.getAttribute("name");
		if(name) {
			memo[name] = memo[name] || [];
			memo[name].push(field.value);
		}
		return memo;
	}, {});
}
