describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    // mo ta tung test case con
    it('Contain testing forms', () => {
        cy.contains(/testing forms/i)
        
        cy.getDataTest('subscribe-form').should('be.visible')
        cy.getDataTest('subscribe-button').should('be.visible')
    }) 

    it ('Get non existent element', () => {
        cy.getDataTest('subscribeform').should('be.visible')
        cy.getDataTest('subscribebutton').should('be.visible')
    })


    it('Enter correct email format', () => {
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')

        cy.get('@subscribe-input').type('test@gmail.com')
        cy.contains(/Successfully subbed: test@gmail.com!/i).should('not.exist')

        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: test@gmail.com!/i).should('exist')
        cy.wait(1500)
        cy.contains(/Successfully subbed: test@gmail.com!/i).should('not.exist')

    })

    it('Enter incorrect email format', () => {
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')

        cy.get('@subscribe-input').type('test@gmail.io')
        cy.contains(/invalid email: test@gmail.io!/i).should('not.exist')


        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid email: test@gmail.io!/i).should('exist')

        cy.wait(1500)
        cy.contains(/invalid email: test@gmail.io!/i).should('not.exist')
    })

    it ('Enter nothing', () => {
        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
    })
})