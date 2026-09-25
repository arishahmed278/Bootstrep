var email = "arish@gmail.com";

function login() {

    var userEmail = document.getElementById("email").value;

    if (userEmail === email) {

        location.href = "dashboard.html";

    } else {

        alert("User not found! Enter correct email");

    }
}


var students = [

    {
        name: "Ali Khan",
        batch: 22,
        image: "images/avater.jpg"
    },

    {
        name: "Ahmed",
        batch: 19,
        image: "images/avater.jpg"
    },

    {
        name: "Hamza",
        batch: 32,
        image: "images/avater.jpg"
    },

    {
        name: "Usman",
        batch: 27,
        image: "images/avater.jpg"

    },

    {
        name: "Ahsan",
        batch: 21,
        image: "images/avater.jpg"
    },

    {
        name: "Bilal",
        batch: 25,
        image: "images/avater.jpg"
    },

    {
        name: "Zain",
        batch: 30,
        image: "images/avater.jpg"
    },

    {
        name: "Umar",
        batch: 18,
        image: "images/avater.jpg"
    }

];


var studentCards = document.getElementById("studentCards");


if (studentCards) {

    for (var i = 0; i < students.length; i++) {


        var col = document.createElement("div");

        col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

        var card = document.createElement("div");

        card.className = "card shadow h-100";


        var image = document.createElement("img");

        image.src = students[i].image;

        image.className = "card-img-top";

        image.style.height = "180px";



        var body = document.createElement("div");

        body.className = "card-body text-center";


        var studentName = document.createElement("h5");

        studentName.appendChild(
            document.createTextNode(students[i].name)
        );


        var batch = document.createElement("p");

        var bold = document.createElement("strong");

        bold.appendChild(
            document.createTextNode("Batch: ")
        );

        batch.appendChild(bold);

        batch.appendChild(
            document.createTextNode(students[i].batch)
        );


        var button = document.createElement("button");

        button.className = "btn btn-dark w-100";

        button.appendChild(
            document.createTextNode("View Details")
        );


        body.appendChild(studentName);

        body.appendChild(batch);


        body.appendChild(button);


        card.appendChild(image);


        card.appendChild(body);


        col.appendChild(card);


        studentCards.appendChild(col);

    }

}