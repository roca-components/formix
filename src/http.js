/*eslint-env browser */

// XXX: DEBUG; mocked for illustration purposes

const DEFAULT_ITEMS = ["foo", "bar", "baz"];
let userItems = [];

export default function http(method, uri, payload) {
	userItems.push(payload.name[0]);

	let items = DEFAULT_ITEMS.slice();
	while(items.length && Math.random() > 0.5) {
		let i = randomInt(0, items.length - 1);
		items.splice(i);
	}
	items = items.concat(userItems);

	let html = `<form is="form-ix" action="http://example.org" method="post">
				<input type="text" name="name">
				<button type="submit">add</button>
			<ul>` +
			items.map(item => `<li>${item}</li>`).join("") +
			`</ul>
			</form>`;

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(html);
		}, randomInt(100, 500));
	});
}

// XXX: DEBUG; only required for mock data
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
