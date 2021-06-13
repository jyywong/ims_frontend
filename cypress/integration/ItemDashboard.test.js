describe('Item inventory tests', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('input:first').type('jon');
		cy.get('input:last').type('testpassword');
		cy.get('button').should('have.text', 'Log In').click();
		cy.contains('engage distributed initiatives').click({ force: true });
		cy.contains('Testing api again').click({ force: true });
	});
	it('Can be opened', () => {
		cy.contains('Moon MS');
	});

	it('Request an order form works correctly', () => {
		cy.contains('Request an order').click();
		cy.get('input[id="Units required"]').clear().type('3');
		cy.get('input[id="datepicker"]').type('06/25/2021');
		cy.get('textarea[id="notes"]').type('n/a', { force: true });
		cy.contains('Submit').click();
		cy.get('p[id="Orders pending"]').should('have.text', '4');
	});
	it('Edit item form works correctly', () => {
		cy.contains('Edit Item').click();
		cy.get('input[id="Item name"]').clear().type('New item');
		cy.get('input[id="Item manu"]').clear().type('New test manu');
		cy.get('textarea[id="Item notes"]').clear().type('New test notes');
		cy.get('input[id="Min quantity"]').clear().type('7');
		cy.contains('Save').click();
		cy.contains('New item');
		cy.contains('New test manu');
		cy.contains('New test notes');
		cy.contains('7');
		cy.contains('Successfully edited item details');
		cy.contains('Cancel').click();
		cy.contains('Edit Item').click();
		cy.get('input[id="Item name"]').clear().type('Testing api again');
		cy.contains('Save').click();
	});
	it('Add a restock works correctly', () => {
		cy.get('div[id="Stock item"]').should('have.length', 3);
		cy.contains('Add a restock').click();
		cy.get('input[id="Units"]').type('4');
		cy.get('input[id="Manufacturing date"]').type('06/01/2021');
		cy.get('input[id="Expiry date"]').type('07/15/2021', { force: true });
		cy.get('textarea[id="Notes"]').type('N/a', { force: true });
		cy.contains('Save').click();
		cy.get('div[id="Stock item"]').should('have.length', 4);
		cy.contains('Successfully added a restock');
	});
});
