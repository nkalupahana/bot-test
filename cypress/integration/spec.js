describe('Visits the App', function() {
    it('Visits the App', function() {
        cy.visit("https://google.com")
        cy.wait(5000)
    })
})

describe('Checks the App', function() {
    it('Checks Team Numbers (Basic)', function() {
        cy.get("#leftNumbers")
            .children("span[onclick]")
            .should('have.length', 3)
            .each(function(val) {
                val = val[0];
                expect(Number(val.innerHTML)).to.be.gt(0);
                expect(val.onclick.toString()).to.contain(val.innerHTML);
                expect(val.onclick.toString().toLowerCase()).to.contain("team");
            })

        cy.get("#rightNumbers")
            .children("span[onclick]")
            .should('have.length', 3)
            .each(function(val) {
                val = val[0];
                expect(Number(val.innerHTML)).to.be.gt(0);
                expect(val.onclick.toString()).to.contain(val.innerHTML);
                expect(val.onclick.toString().toLowerCase()).to.contain("team");
            })


        cy.get("#leftNumbers")
            .children(".material-icons")
            .should('have.length', 1)
            .contains('fullscreen')
            .each(function(val) {
                val = val[0];
                expect(val.onclick.toString().toLowerCase()).to.contain("alliance");
            })

        cy.get("#leftNumbers")
            .children(".material-icons")
            .should('have.length', 1)
            .contains('fullscreen')
            .each(function(val) {
                val = val[0];
                expect(val.onclick.toString().toLowerCase()).to.contain("alliance");
            })

    })

    it('Checks Graphs (Basic)', function() {
        cy.get("#matchView-left-view").children(".js-plotly-plot").each(function(_x, _y, collection) {}).then(function(collection) {
            cy.get("#matchView-right-view").children(".js-plotly-plot").each(function(_x, _y, collection) {}).then(function(collection2) {
                expect(collection.length).to.eq(collection2.length)
            })
        })
    })

    it('Checks Tables (Basic)', function() {
        cy.get("#matchView-left-view > .container > table > tbody").children().each(function(_x, _y, collection) {}).then(function(collection) {
            cy.get("#matchView-right-view > .container > table > tbody").children().each(function(_x, _y, collection) {}).then(function(collection2) {
                expect(collection.length).to.eq(collection2.length)
            })
        })
    })

})
