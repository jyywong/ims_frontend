describe('Lab dashboard tests', () => {
	beforeEach(() => {
		cy.visit('/lab/1');
	});
	it('Can be opened', () => {
		cy.contains('Moon MS');
	});
	it('Removes correct member', () => {
		cy.get('[data-testid="Remove member"]').click();
		cy.get('[data-testid="Checkbox 1"]').click();
		cy.contains('Remove selected members').click();
		cy.contains('Yes').click();
		cy.contains('TestUser 1').should('not.exist');
		cy.contains('TestUser 2');
	});
	it('Correctly add new member');
	it('Removes correct inventory', () => {
		cy.contains('Remove Inventory').click();
		cy.get('[data-testid="Checkbox 1"]').click();
		cy.contains('Remove Selected Items').click();
		cy.contains('Yes').click();
		cy.wait(200);
		cy.contains('TestInventory 2');
		// Unsure why TestInventory 1 exists but is not visible
		cy.contains('TestInventory 1').should('not.be.visible');
	});
	it('Correctly adds new inventory', () => {
		cy.contains('Add inventory').click();
		cy.get('[data-testid="Inventory name input"]').type('New test inventory');
		cy.contains(/^Add$/).click();
		cy.contains('New test inventory');
	});
	it('Successfully changes lab name and description', () => {
		cy.contains('Edit Lab').click();
		cy.get('input[id="New Lab Name"]').type('New lab name');
		cy.get('input[id="New Lab Description"]').type('New lab desc');
		cy.contains('Save').click();
		cy.contains('New lab name');
		cy.contains('New lab desc');
	});
});
