describe("User can see experience", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#cv-tab").click();
    });

    it("displays basic information", () => {
        cy.get("#basics").within(() => {
            cy.get(".name").should("contain", "Roberto Maisto");
            cy.get(".label").should("contain", "Junior Developer");
            cy.get(".email").should("contain", "maisto_roberto@hotmail.it");
        });
     });

     it("displays previous work experience", () => {
        cy.get("#work").within(() => {
            cy.get(".name").should("contain", "Synlab CAM Polidiagnostico");
            cy.get(".position").should("contain", "Graphic designer");
            cy.get(".summary").should("contain", "Use the Adobe package...");
        });
     });

});