describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    cy
    .get(':nth-child(3) > #button1')
    .should("be.visible");

    cy
    .get('#idExample')
    .click();

    cy.get('.comment.depth-1.even.thread-even > .comment-body .comment-reply-link.et_pb_button')
    .click();

    cy
    .get('#comment')
    .type("This is a test")

    cy.get('#author')
    .type("Kwame")

    cy.get('#email')
    .type("kamae123@baba.com")

    cy.get('#url')
    .type("google.com")

    cy
    .get('#submit')
    .should('be.visible')
    .click();

    cy.get('#error-page')
    .should('be.visible')
  



    //class="comment-reply-link et_pb_button"
    //.comment.depth-1.even.thread-even > .comment-body .comment-reply-link.et_pb_button


    
  })
})