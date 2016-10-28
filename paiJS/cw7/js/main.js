var clickCount = 0

function pierwszyKlik () {
  alert('Kliknięcie numer ' + clickCount++ + '!')
}

function napis (imie, nazwisko, wiek) {
  var napis = 'Nazywasz się ' + imie + ' ' + nazwisko + ' i masz ' + wiek + ' lat.'
  return napis
}

function reloadPage () {
  location.reload()
}

function changeBg () {
  document.body.style.backgroundColor = 'green'
}
