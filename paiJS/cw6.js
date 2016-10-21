var maxLength = 20, currentLength, leftLength

function checkLength (elmt, event) {
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