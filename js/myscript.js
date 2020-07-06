var nome = prompt('Ciao, qual\è il tuo nome?');
var cognome = prompt('E il tuo cognome?');
var colore = prompt('E il tuo colore preferito?');
document.getElementById('pw-result') .innerHTML = 'Allora la tua password è' + ' ' + nome + cognome + colore + 19 + '.' + ' ' + 'Non la perdere!';
