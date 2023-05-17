function getData(){
    fetch('https://fakestoreapi.com/products')
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach((product) => {
        console.log(data)
        let output = `
        <div class="product-grid">
                <img src="${product.image}" alt="">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <h4>${product.price}</h4>
                <span>${product.category}</span>
            </div>`;
            document.getElementById("productContainer").innerHTML += output;
        });
    })
}
getData();