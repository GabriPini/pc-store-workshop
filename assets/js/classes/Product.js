/**
 * product class
 * @license MIT
 * @author Gabriele
 */
 export default class Product {
    //special method constructor 
    is_available = false

    /**
     * 
     * @param {string} name  product name
     * @param {string} description product description
     * @param {float} price product price
     * @param {string} category product category
     * @param {string} image product image
     * @param {number} likes product likes count
     */
    constructor(name, description, price, category, image, likes = 0) {
        this.name = name
        this.description = description
        this.price = price
        this.image = image
        this.category = category
        this.likes = likes
    }
    // Class methods
     increaseLikes(){
         return element += 1
     }

}
//Named exports (one or more)
//export {Product}

//oppure
//Only one 
//export {Product as default}