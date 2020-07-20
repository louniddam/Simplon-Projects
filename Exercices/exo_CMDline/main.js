//REQUIRE
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contact = [];




console.log("Hey sir, i'm your directory !");
console.log("Enter /help for display my different command")
console.log("Otherwise simply enter a command to start using me")

//FUNCTIONS ----------------------------------------------------------------------------------------
function help(){
    console.log('There is the detail of different command avaialble');
    console.log('/help: Display all the comman available');
    console.log('/stop: Quit your loved directory');
    console.log('/add: Add a new contact in your directory');
    console.log('/list: List allthe contacts you have in your loved directory');
    rl.question('/delete: Delete one of your contact by specifying his ID \n', (answer) => {
    choix(answer);
  });
}

function stop(){
    rl.close();
}

function add(){
    console.log("Let's add a new contact !")
    rl.question('What is the first-name of your contact?\n', (firstname) => {
        rl.question(`What is the last-name of ${firstname}?\n`, (lastname) => {
            rl.question('What is the last-name of your contact?\n', (number) => {

                // let regFirstName = new RegExp(/^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$/);
                // let testFirstName = regFirstName.test(firstname);
                // let regLastName = new RegExp(/^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$/);
                // let testLastName = regLastName.test(firstname);
                // let regNumber = new RegExp(/^\+[1-9]{1}[0-9]{3,14}$/);
                // let testNumber = regNumber.test(number);

                // if(testFirstName === true && testLastName === true && testNumber === true){
                    contact.push({
                        firstname : firstname,
                        lastname : lastname,
                        number : number
                    })
                // } 

                console.log("Le contact " + firstname + " " + lastname + " a été ajouté avec le numero: " + number)

                rl.question('Retapez une nouvelle commande \n', (answer) => {
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
        contact.splice((id-1),1)
        rl.question('Retapez une nouvelle commande \n', (answer) => {
            choix(answer);
          });
        });
}

function list(){
          console.log("Here is the list of your contacts :")
          console.log("-----------------------------------\n")
          for(i = 0; i < contact.length; i++){
              console.log("ID: " + (i+1) + " ==> " + contact[i].firstname + " "+ contact[i].lastname)
              console.log(`phone: ${contact[i].number} \n`)
          }
          rl.question('Retapez une nouvelle commande \n', (answer) => {
            choix(answer);
          });
    
}

function newTry(){
    console.log("Je n'ai pas compris votre commande");
    rl.question('Retapez une nouvelle commande \n', (answer) => {
        choix(answer);
      });
}

//---------------------------------------------------------------------------------------------------

rl.question('', (answer) => {
    choix(answer);
  });

function choix(answer){
    switch (answer) {
        case '/help':
          help();
          break;
        case '/add':
          add();
          break;
        case '/list':
          list();
          break;
          case '/delete':
            errase();
            break;
            case '/stop':
                stop();
                break;
        default:
          newTry();
          break;
      }
}

