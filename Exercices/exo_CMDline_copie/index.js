//On a d'abord besoin de récupérer la méthode readline à l'aide de require 
const readline = require('readline');
const { constants } = require('buffer');
//On cree une instance pour pouvoir intéragir avec l'utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

//Je crée un tableau vide dans lequelle iront mes contacts
let contact = [];


//On pose une question à l'utilisateur grace a la fonction question. Elle prend en parametres la réponse de l'utilisateur
//   rl.question('What do you think of Node.js? ', (answer) => {
    
//   });


//TEXTE BIENVENU
console.log("Hey sir, i'm your directory !");
console.log("Enter /help for display my different command")
console.log("Otherwise simply enter a command to start using me")
rl.question('', (answer) => {
    choix(answer);
});

  //FUNCTIONS  -- Qui sont les commandes dont pourra se servir l'utilisateur
  function stop(){
    rl.close();
  }

  function add(){
      console.log("Let's add a new contact !");
    rl.question('What is the first-name of your contact?\n', (firstname) => {
        rl.question('What is the last-name of ' + firstname +"\n", (lastname)  => {
            rl.question('What is the number of ' + firstname +' '+ lastname + "\n", (number) => {
                contact.push({
                    firstname: firstname,
                    lastname: lastname,
                    number: number
                })
                console.log("Le contact " + firstname + " " + lastname + " a été ajouté avec le numero: " + number)
                rl.question('What do you want to do now master?\n', (answer) => {
                    choix(answer);
                });
            });
        });
    });
  }

  function errase(){
    console.log("There is the instructions for delete a contact. Get the ID of the contact you want to delete with the command /list.")
    console.log("Then with de command /delete enter the ID of the contact you want to delete and confirm your choice.\n")
    rl.question('What is the ID of the contact you want to delete ?\n', (id) => {
        contact.slice((id - 1),1)
    });
    rl.question('What do you want to do now master?\n', (answer) => {
        choix(answer);
    });
  }

  function help(){
    console.log('There is the detail of different command avaialble');
    console.log('/help: Display all the comman available');
    console.log('/stop: Quit your loved directory');
    console.log('/add: Add a new contact in your directory');
    console.log('/list: List allthe contacts you have in your loved directory');
    rl.question('What do you want to do now master?\n', (answer) => {
        choix(answer);
    });
  }

  function list(){
    console.log("Here is the list of your contacts :")
    console.log("-----------------------------------\n")
    for(i = 0; i < contact.length; i++){
        console.log("ID: " + (i+1) + " ==> " + contact[i].firstname + " " + contact[i].lastname )
        console.log("phone: " + contact[i].number)
    }
    rl.question('What do you want to do now master?\n', (answer) => {
        choix(answer);
    });
  }

  //SWITCH CASE -- On va faire ici nos conditions qui vont comparer l'input de l'utilisateur   
  function choix(answer){
    switch (answer) {
        case "/help":
          help();
          break;
        case "/add":
          add();
          break;
        case "/list":
          list();
          break;
        case "/delete":
           errase();
          break;
        case "/list":
            stop();
                break;
        default:
          console.log("Je n'ai pas compris la commande, veuillez recommencer\n")
          break;
      }
  }
