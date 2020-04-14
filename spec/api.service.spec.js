import { ApiService } from '../src/api.service.js';

describe('ApiService', function() {
	var apiService;

	beforeEach(function() {
		apiService = new ApiService();
	});

	it('should have a method getList', function() {
		expect('getList' in apiService).toBeTrue();
	});

	it('should asynchronously return a list of length 3', async function() {
		let data = await apiService.getList();
		expect(data).toBeDefined();
		expect(data.length).toEqual(3);
	});

	it('should asynchronously return the first three cardinal numbers in German', async function() {
		let data = await apiService.getList();
		expect(data).toEqual(['eins', 'zwei', 'drei']);
	})
});