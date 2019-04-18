var dado, punteggio_dado, user1, punteggio_user1, punteggio_cpu;

dado = [1,2,3,4,5,6];
punteggio_dado = [];

user1 = prompt('Inserisci il tuo nome per iniziare il lancio dei dadi:');

//effettuo i lanci e assegno il lancio al relativo punteggio_dado[]
for (var i = 0; i < 2; i++) {
  var lancio_1 = Math.floor(Math.random() * 6);
  var lancio_2 = Math.floor(Math.random() * 6);
  var lancio_cpu1 = Math.floor(Math.random() * 6);
  var lancio_cpu2 = Math.floor(Math.random() * 6);
  punteggio_dado[0] = [dado[lancio_1]];
  punteggio_dado[1] = [dado[lancio_2]];
  punteggio_dado[2] = [dado[lancio_cpu1]];
  punteggio_dado[3] = [dado[lancio_cpu2]];
}

//punteggio dei giocatori dato dalla somma dei lanci
console.log(punteggio_dado[0] + " " + punteggio_dado[1] + " " + punteggio_dado[2] + " " + punteggio_dado[3]);

punteggio_user1 = punteggio_dado[0] + punteggio_dado[1];
punteggio_cpu = punteggio_dado[2] + punteggio_dado[3];
console.log(punteggio_user1,punteggio_cpu);

//stampo il risultato del vincitore
if(punteggio_user1 > punteggio_cpu){
  document.writeln(user1 + " ha vinto");
}else if(punteggio_user1 == punteggio_cpu){
  document.writeln("pareggio");
}else {
  document.writeln("Cpu ha vinto,ritenta sarei più fortunato");
}
