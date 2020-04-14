export class ApiService {
	constructor() {

	}

	/**
	 * Returns the first three cardinal numbers in the German language.
	 */
	async getList() {
		return ['eins', 'zwei', 'drei'];
	}
}