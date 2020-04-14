/**
 * A component that fetches data from a service and adds it as children to an element in the DOM.
 */
export class ListComponent {
	/**
	 * Creates a new ListComponent object
	 * 
	 * @param {DOMElement} targetElement 
	 * @param {ApiService} apiService 
	 */
	constructor(targetElement, apiService) {
		this._targetElement = targetElement;
		this._apiService = apiService;
	}

	/**
	 * Asynchonously get data from the API and add it to the DOM.
	 */
	async getAndShowData() {
		await this._getData();
		this._showData();
	}

	async _getData() {
		this._data = await this._apiService.getList();
	}

	_showData() {
		for (let dataItem of this._data) {
			let div = document.createElement('div');
			div.innerText = dataItem;
			this._targetElement.appendChild(div);
		}
	}
}