describe('Inventory dashboard tests', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('input:first').type('jon');
		cy.get('input:last').type('testpassword');
		cy.get('button').should('have.text', 'Log In').click();
		cy.contains('engage distributed initiatives').click({ force: true });
	});
	it('Can be opened', () => {
		cy.contains('Moon MS');
	});
	it('Correctly adds new item', () => {
		cy.contains('Add items').click();
		cy.get('input[id="Item name"]').type('New test item');
		cy.get('input[id="Manu"]').type('New test manu');
		cy.get('input[id="info"]').type('Test notes');
		cy.get('input[id="Initial amount"]').type('6');
		cy.get('input[id="Minimum amount"]').type('4');
		cy.contains('Create').click();
		cy.contains('New test item');
		cy.contains('6');
		cy.contains('Successfully created new item');
	});
	it('Removes correct member', () => {
		cy.contains('Delete items').click();
		cy.get('[data-testid="Checkbox 3"]').click();
		cy.contains('Remove selected items').click();
		cy.contains('Yes').click();
		cy.contains('Testing api again').should('not.be.visible');
		cy.contains('Successfully deleted items');
	});
	it('Correctly adds new notice');
});
