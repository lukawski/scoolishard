/* DOKUMENTACJA FUNKCJI
checkLength(param1, param2) - funkcja zlicza znaki wpisane do pola input, może pracować na kilku 
                              polach jednocześnie, wyświetla pozostałe znaki w wybranym przez użytkownika miejscu
                              na stronie, zapobiega wpisaniu w pole po przekroczeniu dozwolonej liczby znaków

param1:elemt - wymagany, element na którym wykonujemy funkcje
param2:maxLEngth - wymnagany, liczba reprezentująca maksymalną długość

Skrypt dołączamy do pliku html w sposób podany poniżej.

<script type="text/javascript" src="cw6.js"></script>

Aby wywołać funkcje do taga input w HTMLU dodajemy atrybut data-counter='id-elementu-wyświetlającego pozostałe znaki'. 
Elementowi wyświetlajacemu nadajemy id w sposób id='treść-atrybutu-data-counter-elementu-input'

Przykładowe wywołanie funkcji
<input type="text" name="check" onkeyup="checkLength(this, 20)" data-counter="counter"/>
<span class="counter" id="counter"></span>

Przykładowe wywołanie funkcji na kilku polach
<input type="text" name="check" onkeyup="checkLength(this, 20)" data-counter="counter"/>
<span class="counter" id="counter1"></span>

<input type="text" name="check" onkeyup="checkLength(this, 30)" data-counter="counter"/>
<span class="counter" id="counter2"></span>
*/

var currentLength, leftLength

function checkLength (elmt, maxLength) {
    currentLength = elmt.value.length
    leftLength = maxLength - currentLength
    document.getElementById(elmt.getAttribute('data-counter')).innerHTML = leftLength
    if(currentLength >= maxLength){
        document.getElementById(elmt.getAttribute('data-counter')).innerHTML = 0
        document.getElementById(elmt.getAttribute('data-counter')).style.color = 'red'
        elmt.value = elmt.value.substr(0, maxLength)
    } else {
        document.getElementById(elmt.getAttribute('data-counter')).style.color = ''
    }
}