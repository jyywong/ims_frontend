describe('Lab dashboard tests', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('input:first').type('jon');
		cy.get('input:last').type('testpassword');
		cy.get('button').should('have.text', 'Log In').click();
	});
	it('Can be opened', () => {
		cy.contains('Moon MS');
	});
	it('Removes correct member', () => {
		cy.get('[data-testid="Remove member"]').click();
		cy.get('[data-testid="Checkbox 3"]').click();
		cy.contains('Remove selected members').click();
		cy.contains('Yes').click();
		cy.contains('Tracy Woods').should('not.exist');
		cy.contains('jon');
		cy.contains('Successfully removed lab member');
	});
	it('Correctly add new member');
	it('Removes correct inventory', () => {
		cy.contains('Remove Inventory').click();
		cy.get('[data-testid="Checkbox 22"]').click();
		cy.contains('Remove Selected Items').click();
		cy.contains('Yes').click();
		cy.wait(200);
		cy.contains('engage distributed initiatives');
		// Unsure why TestInventory 1 exists but is not visible
		cy.contains('testing new inventory').should('not.be.visible');
		cy.contains('Successfully deleted inventory');
	});
	it('Correctly adds new inventory', () => {
		cy.contains('Add inventory').click();
		cy.get('[data-testid="Inventory name input"]').type('New test inventory');
		cy.contains(/^Add$/).click();
		cy.contains('New test inventory');
		cy.contains('Successfully added new inventory');
	});
	it('Successfully changes lab name and description', () => {
		cy.contains('Edit Lab').click();
		cy.get('input[id="New Lab Name"]').type('New lab name');
		cy.get('input[id="New Lab Description"]').type('New lab desc');
		cy.contains('Save').click();
		cy.contains('New lab name');
		cy.contains('New lab desc');
		cy.contains('Lab successfully edited');
	});
});
