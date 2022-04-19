
import Product from "./classes/Product.js";


/* const mouse = new Product('Anker Vertical Mouse', 'compy vertical mouse', 40.99, '', 'black', 'pc accessory', 0)
 */
const products = [
    new Product('SSD 1TB Crucial Disk', 'Super fast SSD drive', 49.99, 'PC Hardware', './assets/img/ssd.jpg'),
    new Product('Aoc 24inc Monitor', 'ultra thin monitor', 149.99, 'PC Monitors', './assets/img/monitor.jpg'),
    new Product('Corsair ATX Case', 'Small form factor atx desktop pc case', 99.99, 'PC Accessories', './assets/img/case.jpg'),
    new Product('Anker Vertical mouse', 'Comfy vertical mouse', 29.99, 'PC accessories', './assets/img/mouse.jpg'),
    new Product('Lenovo Idea pad', 'Modern 8gb ram ultra thin laptop', 549.99, 'Laptops', './assets/img/laptop.webp'),
    new Product('Walking desk', 'Get fit with the best walking desk', 649.99, 'Office equipment', './assets/img/desk.webp'),
]

/**
 * 
 * @param {*} product 
 * @returns 
 */
function generateProducts(product) {
    return `
    <div class="product">

        <img src="${product.image}" alt="${product.name}">

        <div class="product_details">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        </div>
    
        <div class="price">
            ${product.price}&euro;
        </div>

        <button class="btn btn_dark buy-now" data-product-name="${product.name}" data-product-price="${product.price}">Buy Now</button>

        <div class="favourites">
            <i class="fa-solid fa-heart fa-xl favourite"></i>
            <a class ="like_button fw-bold ">
                <i class="fa-solid fa-thumbs-up fa-xl like" ></i>
            </a>
        </div>
        <div class="likes_counter">
          Piace a <b class="js_likes">${parseInt(product.likes)}</b> persone
      </div>

        </div>
        `   
    }
    
    /*   DA SPOSTARE SU UNA VOLTA CAPITO COME IMPLEMENTARLO CON .increaseLikes()
         */
        

        /**
         * Generate Products cards inside the dom element 
         * @param {array} products_array A list of products
         * @param {object} dom_element a dom element
         */
        function generateProductsCard(products_array, dom_element) {
            products_array.forEach(product => {
                
                const markup = generateProducts(product)
                dom_element.insertAdjacentHTML('beforeend', markup)
                
            });
            
        }
        
        
        const productElement = document.querySelector('.products')
        generateProductsCard(products, productElement)
        
        const cart = []
        document.querySelectorAll('.buy-now').forEach(element => {
            
            element.addEventListener('click', function () {
                
                const name = this.getAttribute('data-product-name');
                const price = parseFloat(this.getAttribute('data-product-price'));
                const purchased_product = {
                    name, price
                }
                cart.push(purchased_product)
       console.log(cart)
       
       //show cart items inside the cart dom element
       
       document.querySelector('.cart').insertAdjacentHTML('beforeend', `<li>${purchased_product.name} &euro;${purchased_product.price}</li>`)
       document.querySelector('.cart-wrapper').classList.add('rotate')
       
       //loop over the cart items and sum prices
       let sum = 0
       cart.forEach(element => {
           sum += element.price
        })
        console.log(sum)
        //show total 
        document.querySelector('.total').innerHTML =`Total: &euro; ${sum.toFixed(2)}`
        
    })
    
})

document.querySelectorAll('.favourite').forEach(element => {
    
    element.addEventListener('click', function () {
        element.classList.toggle('color_red')
        
        
    })
})


let counterElement = document.querySelectorAll('.js_likes')

const likeButton = document.querySelectorAll('.like_button')
likeButton.forEach((element, index) => {
    // console.log(index);
    element.addEventListener('click', function (event) {
        event.preventDefault()
        // console.log(this);
        this.classList.add('color_blue')
        const likesNumber = products[index].increaseLikes()
        
        if(this.classList.contains('color_blue')) {
            counterElement[index].innerHTML = likesNumber
        } else {
            counterElement[index].innerHTML = likesNumber - 1
        }
        
        
        
    })
})





