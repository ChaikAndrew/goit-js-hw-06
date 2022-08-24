const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault(); // no reset window

    const formData = new FormData(event.currentTarget);
    const emailEl = event.currentTarget.email.value;
    const passwordEl = event.currentTarget.password.value;

    if (emailEl === '' || passwordEl === '') {
        //подключённый алерт вместо стандартного
        Swal.fire({
            title: 'Упс...',
            text: 'Ви маєте ввести дані в поля: Email та Password!',
        })
        // стандарный алерт
        // alert(' You need to enter email and password ');
        return
    }
    else {
        Swal.fire({
            title: 'Вітаємо',
            text: 'Ви успішно зареєструвалися',
        })   
    }
    
    // formData.forEach((value, name) => {
    //     console.log('onFormSubmit: name ->', name);
    //     console.log('onFormSubmit: value ->', value); 
    // });

     console.log({ email: emailEl, password: passwordEl});
     formEl.reset();
}




