app.filter("uptoage", function(){
    return function(input, myage){
        myage = myage || 20;
        arr = [];
        for(i=0; i<input.length; i++){
            if(input[i].age >= myage) 
                arr.push(input[i]);
        }
        return arr;
    }
})