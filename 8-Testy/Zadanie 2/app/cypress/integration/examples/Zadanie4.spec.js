/**-----------TESTOWANIE APLIKACJI-ZADANIE 4--------------- */
describe("app test", () => {
  it("initial value should be 0", () => {
    cy.visit("http://localhost:3000");
    const counterVal = cy.get(".counterVal");
    counterVal.contains("Count : 0");
  });
  it("initial value should be 10", () => {
    // nie dotyczy
  });
  it("should be buttons + and - ", () => {
    cy.visit("http://localhost:3000");
    const add = cy.get(".add");
    add.contains("+");
    const substract = cy.get(".substract");
    substract.contains("-");
  });
  it("state should properly changes", () => {
    cy.visit("http://localhost:3000");
    const add = cy.get(".add");
    add.click();
    let counterVal = cy.get(".counterVal");
    counterVal = cy.get(".counterVal");
    counterVal.contains("Count : 1");
    const substract = cy.get(".substract");
    substract.click();
    counterVal = cy.get(".counterVal");
    counterVal.contains("Count : 0");
  });
  it("state should properly changes after input value in input field ", () => {
    cy.visit("http://localhost:3000");
    const input = cy.get("#num");
    input.type(5);
    const submit = cy.get(".click");
    submit.click();
    let counterVal = cy.get(".counterVal");
    counterVal.contains("Count : 5");
  });
  it("state should set 0 after reset ", () => {
    cy.visit("http://localhost:3000");
    const add = cy.get(".add");
    add.click();
    add.click();
    add.click();
    let counterVal = cy.get(".counterVal");
    counterVal.contains("Count : 3");
    let reset = cy.get(".Reset");
    reset.click();
    counterVal = cy.get(".counterVal");
    counterVal.contains("Count : 0");
  });
});
