const form = document.querySelector('#userDataForm');
function resetForm(){
    form.reset();
}
form.addEventListener('submit', event =>{
    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const tNumber = document.getElementById("telephonNumber").value;
    const uEmail = document.getElementById("email").value;
    const uAdress = document.getElementById("userAddress").value;

    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^([a-zA-Z0-9_-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const telephonRegex = /^\d{9}$/;
    const addressRegex = /^([a-zA-Z#№\d]+,\s?){2}[a-zA-Z\d]+,\s?\d{5}$/;

    //check user name
    if(!nameRegex.test(fName)){
        event.preventDefault();
        event.stopPropagation();
        document.getElementById("firstName").classList.add('is-invalid');
    } else {
        document.getElementById("firstName").classList.remove('is-invalid');
        document.getElementById("firstName").classList.add('is-valid');
    }

    if(!nameRegex.test(lName)){
        event.preventDefault();
        event.stopPropagation();
        document.getElementById("lastName").classList.add('is-invalid');
    } else {
        document.getElementById("lastName").classList.remove('is-invalid');
        document.getElementById("lastName").classList.add('is-valid');
    }

    //check user telephon number
    if(!telephonRegex.test(tNumber)){
        event.preventDefault();
        event.stopPropagation();
        document.getElementById("telephonNumber").classList.add('is-invalid');
    }else {
        document.getElementById("telephonNumber").classList.remove('is-invalid');
        document.getElementById("telephonNumber").classList.add('is-valid');
    }

    //user adress
    if(!addressRegex.test(uAdress)){
        event.preventDefault();
        event.stopPropagation();
        document.getElementById("userAddress").classList.add('is-invalid');
    }else {
        document.getElementById("userAddress").classList.remove('is-invalid');
        document.getElementById("userAddress").classList.add('is-valid');
    }

    //check user email
    if(!emailRegex.test(uEmail)){
        event.preventDefault();
        event.stopPropagation();
        document.getElementById("email").classList.add('is-invalid');
    } else {
        document.getElementById("email").classList.remove('is-invalid');
        document.getElementById("email").classList.add('is-valid');
    }
}, false);
