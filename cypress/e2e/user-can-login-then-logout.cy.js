describe("User can login to system", () => {
  //positive test case
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit("http://127.0.0.1:8000/")
//Test1
    // cy.get(":nth-child(2) > .form-control").clear("s")
    // cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com")
    // cy.get(":nth-child(3) > .form-control").clear()
    // cy.get(":nth-child(3) > .form-control").type("password")
    // cy.get(".btn").click()
    // cy.get(".nav-link > .d-sm-none").should("have.text", "Hi, SuperAdmin")
    // cy.get(".navbar-right > :nth-child(2) > .nav-link").click()
    // cy.get(".navbar-right > :nth-child(2) > .nav-link").click()
    // cy.get(".text-danger").click()
    // cy.get("h4").should("have.text", "Login")
    // cy.get(".simple-footer").should("contain", "Copyright © Stisla 2018")
    // cy.get(":nth-child(2) > .form-control")
    /* ==== Generated with Cypress Studio ==== */

//test2 SELECTOR YANG BAGUS 
    // cy.get('[data-id="email"]').type("superadmin@gmail.com")
    // cy.get('[data-id="password"]').type("password")
    // cy.get('[data-id="submit"]').click()
    // cy.get('[data-id="username"]').click()
    // cy.get('[data-id="logout-btn"]').click()
//test3 cara cepat testing 
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  })
})