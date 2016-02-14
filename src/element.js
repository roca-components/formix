/*eslint-env browser */
export default class Formix extends HTMLFormElement {
	attachedCallback() {
		this.addEventListener("submit", this.onSubmit.bind(this));
	}

	onSubmit(ev) {
		ev.preventDefault();
	}
}
