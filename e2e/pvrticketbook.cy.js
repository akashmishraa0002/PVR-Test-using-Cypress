describe('test pvr', () => {
  it('book ticket', () => {

    // visit website 
    cy.visit('https://www.pvrcinemas.com/')

    // verify homepage
    cy.contains('City').should('be.visible')

    //select city
    cy.contains('Delhi-NCR').click();

    cy.xpath("//li[@class='pointer my-1']//span[contains(text(),'Delhi')]").click()

    // select movie
    cy.contains('DHURANDHAR').click();

    //select movie date
    cy.xpath("//h5[normalize-space()='20']").click()

    //select movie timing
    cy.contains("11:20 PM").click();

    // accept conditions 
    cy.xpath("//button[normalize-space()='Accept']").click();
    cy.contains('Terms & Conditions', { timeout: 15000 })
      .should('be.visible');

    cy.get('.sc-kCuUfV.iBvycX.reject-terms')
      .contains('Accept')
      .should('be.visible')
      .click();

    // select single seats

    // wait until seat layout API finishes
    cy.get('.all-seats', { timeout: 30000 })
      .should('be.visible');

    // // wait until at least 1 seat is rendered
    // cy.get('.all-seats span', { timeout: 30000 })
    //   .should('have.length.greaterThan', 0);

    // select first available seat
    cy.xpath("//span[@id='GL.Gold|Q:13']").click()

    // proceed for payment
    cy.get(".sc-bbbBoY.kbsOBB.btn-proceeded").click();
    cy.get("div[class='proccedcustombutton d-flex align-items-center justify-content-center'] span")
      .should("have.text", "Skip & Proceed").click()

    cy.get(".fb-card-inn .Reco-item-desc").contains("large nachos combo ")

    cy.xpath("//button[normalize-space()='Continue']").click()



  })
})