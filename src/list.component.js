export class ListComponent {
	constructor(targetElement, apiService) {
		this._targetElement = targetElement;
		this._apiService = apiService;
	}

	async getAndShowData() {
		await this.getData();
		this.showData();
	}

	async getData() {
		this._data = await this._apiService.getList();
	}

	showData() {
		for (let dataItem of this._data) {
			let div = document.createElement('div');
			div.innerText = dataItem;
			this._targetElement.appendChild(div);
		}
	}
}