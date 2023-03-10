// fetch("products.json")
//     .then((res) => res.json())
//     .then((data) => console.log(data));

const productDiv = document.getElementById("all-products")
fetch("products.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            productDiv.innerHTML += `
            <div class="col-lg-4 mt-4">
                        <div class="single-product">
                            <img class="w-100" src="${data[i].image}" alt="">
                            <h5 class="mt-4">$<span id="productPrice">${data[i].price}</span></h5>
                            <h3>${data[i].name}</h3>
                            <p>${data[i].text}</p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    `
        }
    });

