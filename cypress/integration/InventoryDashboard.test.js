describe('Inventory dashboard tests', () => {
	beforeEach(() => {
		cy.visit('/inventory/1');
	});
	it('Can be opened', () => {
		cy.contains('Moon MS');
	});
	it('Correctly adds new item', () => {
		cy.contains('Add items').click();
		cy.get('input[id="Item name"]').type('New test item');
		cy.contains('Create').click();
		cy.contains('New test item');
	});
	it('Removes correct member', () => {
		cy.contains('Delete items').click();
		cy.get('[data-testid="Checkbox 1"]').click();
		cy.contains('Remove selected items').click();
		cy.contains('Yes').click();
		cy.contains('Sugar').should('not.be.visible');
	});
	it('Correctly adds new notice');
});
