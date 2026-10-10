fetch("http://localhost:8080/api/products")
    .then(response => response.json())
    .then(products => {

        let output = "";

        if (products.length === 0) {
            output = "<p>No products available.</p>";
        } else {

            products.forEach(product => {

                output += `
                    <div class="product">
                        <h3>${product.name}</h3>
                        <p>Brand: ${product.brand}</p>
                        <p>Category: ${product.category}</p>
                        <p>Skin Type: ${product.skinType}</p>
                        <p>Price: ₹${product.price}</p>
                    </div>
                `;

            });
        }

        document.getElementById("productList").innerHTML = output;
    })
    .catch(error => {
        console.log("Error:", error);
    });
function register() {

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {

        alert("Registration successful!");

        window.location.href = "login.html";

    })
    .catch(error => {

        document.getElementById("message").innerText =
            "Registration failed!";

        console.log(error);
    });
}
function login() {

    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {

        alert("Login successful!");

        window.location.href = "dashboard.html";

    })
    .catch(error => {

        document.getElementById("message").innerText =
            "Login failed!";

        console.log(error);
    });
}
function addReview() {

    let review = {
        productId: Number(document.getElementById("productId").value),
        userId: Number(document.getElementById("userId").value),
        rating: Number(document.getElementById("rating").value),
       comment: document.getElementById("comment").value
    };

    fetch("http://localhost:8080/api/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then(response => response.json())
    .then(data => {

        document.getElementById("message").innerText =
            "Review added successfully!";

        console.log(data);
    })
    .catch(error => {

        document.getElementById("message").innerText =
            "Review failed!";

        console.log(error);
    });
}
function getReviews() {

    let productId = document.getElementById("productId").value;

    fetch("http://localhost:8080/api/reviews/product/" + productId)
        .then(response => response.json())
        .then(reviews => {

            let output = "";

            reviews.forEach(review => {

                output += `
                    <div class="product">
                        <p>Rating: ${review.rating} / 5</p>
                        <p>${review.comment}</p>
                    </div>
                `;
            });

            if (reviews.length === 0) {
                output = "<p>No reviews found.</p>";
            }

            document.getElementById("reviewList").innerHTML = output;
        })
        .catch(error => {
            console.log(error);
        });
}
function addRoutine() {

    let routine = {
        userId: Number(document.getElementById("userId").value),
        name: document.getElementById("name").value,
        morningRoutine: document.getElementById("morningRoutine").value,
        nightRoutine: document.getElementById("nightRoutine").value,
        status: document.getElementById("status").value
    };

    fetch("http://localhost:8080/api/routines", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(routine)
    })
    .then(response => response.json())
    .then(data => {

        document.getElementById("message").innerText =
            "Routine added successfully!";

        console.log(data);
    })
    .catch(error => {

        document.getElementById("message").innerText =
            "Routine failed!";

        console.log(error);
    });
}
function getArticles() {

    fetch("http://localhost:8080/api/articles")
        .then(response => response.json())
        .then(articles => {

            let output = "";

            articles.forEach(article => {

                output += `
                    <div class="product">
                        <h2>${article.title}</h2>
                        <p>${article.content}</p>
                    </div>
                `;
            });

            if (articles.length === 0) {
                output = "<p>No articles available.</p>";
            }

            document.getElementById("articleList").innerHTML = output;
        })
        .catch(error => {
            console.log(error);
        });
}

getArticles();