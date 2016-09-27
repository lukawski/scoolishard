function isEven(num){
    if(arguments.length > 1){
        var arr = [];
        for(var i = 0; i < arguments.length; i++){
            if(arguments[i] % 2 === 0){
                arr.push(true);
            } else {
                arr.push(false);
            }
        }
        
        return arr;
    } else {
        if(num % 2 === 0){
            return true;
        } else {
            return false;
        }
    }
}

document.write("<p>" + isEven(5, 4, 20, 35) + "<p>");