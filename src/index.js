/*eslint-env browser */
import Formix from "./element";

export default Formix;

document.registerElement("form-ix", {
	prototype: Formix.prototype,
	extends: "form"
});
