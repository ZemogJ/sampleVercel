const reviewForm = document.querySelector('#reviewForm');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const rememberMe = document.querySelector('#rememberMe');

const dataReviews = [];

reviewForm.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();
        const dataReviews = {
            id: Date.now(),
            username: username.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
            rememberMe: rememberMe.checked,
        }
        dataReviews.push(dataReviews);
        reviewForm.reset();
        console.table(dataReviews);
        const reviewsJSON = JSON.stringify( dataReviews, null, 2 );
        display.innerText = "\n" + reviewsJSON;

        localStorage.setItem("Data Riviews", reviewsJSON);
    }
);

retrieveBtn.addEventListener(
    'click',
    () => {
        // retrieve Data Riviews from local storage
        const reviews =  JSON.parse( localStorage.getItem("Data Riviews") );

        for (let review of reviews) {
            // create / insert a new table row
            const row = reviewsTable.insertRow();

            // create / insert cells inside new table row
            const idCell = row.insertCell();
            const usernameCell = row.insertCell();
            const emailCell = row.insertCell();
            const passwordCell = row.insertCell();
            const confirmPasswordCell = row.insertCell();
            const rememberMeCell = row.insertCell();

            // insert values to the table cells
            idCell.innerText = review.id;
            usernameCell.innerText = review.username;
            emailCell.innerText = review.email;
            passwordCell.innerText = review.password;
            confirmPasswordCell.innerText = review.confirmPassword;
            rememberMeCell.innerText = review.rememberMe;
        }
    }
);