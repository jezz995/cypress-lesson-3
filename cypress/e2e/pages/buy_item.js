export class BuyItem {

    product_button = 'ADD TO CART'
    ///product_item = '.inventory_item_name' 

    productItem(productElement){
        ///cy.get(this.product_item)
        cy.get().click()
    }
    
    cartButton(){
        cy.contains(this.product_button)
    }
    
}