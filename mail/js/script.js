// EMAIL ARRAY

//definisco Array

let emails = ['red@mail.com', 'black@mail.com', 'green@mail.com', 'blue@mail.com'];

//Recupero pulsante dal DOM

const btn = document.getElementById('check');

//Aggiungo evento clcik al pulsante
btn.addEventListener('click', function() {

    //recupero i valori input da email
    let user_email = document.getElementById('email').value;

    //Definico una variabile  flag per il controllo della presenza della mail
    let check_email= false;

    //Ciclo Array

    for(i=0; i < emails.length; i++) {

        if(emails(i) = true ) {
            check_email = true;}
    }

    if (check_email){
        console.log('Mail trovata. Benevenuto');
    }
    else {
        console.log('Mail non trovata. Accesso vietato');

    }



}

)