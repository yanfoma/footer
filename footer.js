const docfooter = (document.currentScript || document._currentScript).ownerDocument;

class Footer extends HTMLElement {

	//Constructeur à faire plus tard

	connectedCallback() {
		var menu = docfooter.querySelector('#main-footer').content;
		const shadowRoot = this.attachShadow({mode: 'open'});
		const instance = document.importNode(menu, true);
		shadowRoot.appendChild(instance);
	}
}

window.customElements.define('main-footer', Footer);