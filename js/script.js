//Prima soluzione
let nome = prompt('qual e il tuo nome?');
console.log(nome);
let cognome = prompt('qual e il tuo cognome?');
console.log(cognome);
let colore = prompt('qual e il tuo colore preferito ?');
console.log(colore);
let password = `${nome}${cognome}${colore}${23}`;
document.writeln(password);

//Seconda soluzione
document.getElementById('password_sicura').innerHTML = password;