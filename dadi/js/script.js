//Gioco dei dadi

//Genero un numero random per l utente
let user_number = Math.floor(Math.random()* 6 + 1 );

//Genero un numero random per il pc
let pc_number = Math.floor(Math.random() * 6 + 1);

// Confronto i due numeri 

if(user_number > pc_number){
    console.log(`Numero utente ${user_number}, numero pc ${pc_number}ai vinto) `)
}
else if (user_number < pc_number) { 
    console.log(`Numero utente ${user_number}, numero pc ${pc_number }ai vinto) `)

}
else {

    console.log('Pareggio')
}