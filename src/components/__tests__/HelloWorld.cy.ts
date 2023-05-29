import SpinerVue from "../SpinnerVue.vue"

describe("SpinerVue", () => {
    it("playground", () => {
        cy.mount(SpinerVue, { props: { msg: "Hello mars spinner" } })
    })

    it("renders properly", () => {
        cy.mount(SpinerVue, { props: { msg: "Hello mars spinner" } })
        cy.get("h1").should("contain", "Hello mars spinner")
    })
})
