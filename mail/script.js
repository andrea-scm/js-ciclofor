//array di email
var mail = ["mail1@gmail.com","mail2@gmail.com","mail3@gmail.com","mail4@gmail.com","mail5@gmail.com","mail6@gmail.com","mail7@gmail.com"];
var user_mail = prompt('Inserisci la tua e-mail');
var idonea;

document.writeln("Lista e-mail presenti nella lista:<br>");
//ciclo for per verificare se l'email inserita dall'utente è presente,inoltre stampo le email presenti nella lista in caso bisogna verificare
for (var i = 0; i < mail.length; i++) {
  if (user_mail == mail[i]){
    idonea = true;
  }
  document.writeln(mail[i] + "<br>");
}

if (idonea == true){
  alert("L'email è idonea");
}else {
  alert("L'email non è presente nella lista");
}
