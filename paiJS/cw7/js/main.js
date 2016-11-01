//Autor: Kacper Łukawski
/*
  Pisane zgodnie z JavaScript Standard Style 
  http://standardjs.com/index.html
 */
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

function closePage () {
  window.close()
}

function quadraticForm (form) {
  var a = parseInt(form.elements[0].value), 
      b = parseInt(form.elements[1].value),
      c = parseInt(form.elements[2].value),
      results = {
        null: '&Delta; < 0',
        false: 'Coś poszło nie tak',
      }, qRes = quadratic(a, b, c)
  document.getElementById('qResult').innerHTML = (qRes === null || qRes === false) ? results[qRes] : qRes
  return false
}

function divForm (form) {
  var x = parseInt(form.elements[0].value),
      y = parseInt(form.elements[1].value),
      dRes = isDivisible(x, y),
      mssg = "Liczba " + x + " jest podzielna przez " + y
  document.getElementById('dResult').innerHTML = (dRes === true) ? mssg : "Brak podzielności"
  return false
}

function city () {
  var city = document.getElementById('miasto')
  alert(city.value)
}

function add () {
  var a = parseInt(document.getElementById('zmienna_1').value),
      b = parseInt(document.getElementById('zmienna_2').value),
      result = document.getElementById('rozwiazanie')
  result.value = a + b
}

function swap () {
  var temp = 0,
      a = document.getElementById('zmienna_a'),
      b = document.getElementById('zmienna_b')
  temp = a.value
  a.value = b.value
  b.value = temp
}

function goToPage (url) {
  location.href = url.value
}

function newWindow () {
  window.open('./okienko.html', '_blank', 'width=200, height=200')
}