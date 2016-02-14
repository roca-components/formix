/*eslint-env browser */
import MyElement from "./element";

export default MyElement;

document.registerElement("my-element", {
	prototype: MyElement.prototype
});
