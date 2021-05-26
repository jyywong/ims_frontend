describe('Item inventory tests', () => {
	beforeEach(() => {
		cy.visit('/1/item/1');
	});
	it('Can be opened', () => {
		cy.contains('Moon MS');
	});
	it('Edit item form works correctly', () => {
		cy.contains('Edit Item').click();
		cy.get('input[id="Item name"]').type('New item');
		cy.get('input[id="Item desc"]').type('New test desc');
		cy.get('input[id="Item manu"]').type('New test manu');
		cy.get('textarea[id="Item notes"]').type('New test notes');
		cy.contains('Save').click();
		cy.contains('New item');
		cy.contains('New test desc');
		cy.contains('New test manu');
		cy.contains('New test notes');
	});
	it('Request an order form works correctly');
	it('Add a restock works correctly');
});
