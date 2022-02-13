describe("User can see list of projects", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays the first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "My First Website");
      cy.get(".description").should("contain", "This was my first project.");
    });
  });

  it("displays the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "FizzBuzz");
      cy.get(".description").should(
        "contain",
        "FizzBuzz is a very simple programming task, used in software developer job interviews, to determine whether the job candidate can actually write code."
      );
    });
  });

  it("displays the third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "ATM Challenge");
      cy.get(".description").should(
        "contain",
        "We created a test account for an ATM with details and functions."
      );
    });
  });
});
