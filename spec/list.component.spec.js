import { ListComponent } from '../src/list.component.js';

describe('A ListComponent', function() {
    let listComponent;
    let targetElement;
    let apiServiceMock;

    beforeEach(function() {
        targetElement = document.createElement('div');

        // Create a mock implementation of an ApiService object
        apiServiceMock = {
            getList: function() { return Promise.resolve([1, 2, 3]); }
        };
        // Let jasmine spy on calls to the getList method and use the given
        // implementation
        spyOn(apiServiceMock, 'getList').and.callThrough();

        listComponent = new ListComponent(targetElement, apiServiceMock);
    });

    it('should create three child divs', async function() {
        await listComponent.getAndShowData();
        expect(apiServiceMock.getList).toHaveBeenCalledTimes(1);
        let divs = targetElement.querySelectorAll('div');
        expect(divs.length).toBe(3);
    });
});