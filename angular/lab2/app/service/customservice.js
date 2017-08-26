var customerservice = function () {
         info=[{name:'Explore over 45,000 courses ',images:'explore.svg'},
                   {name:'taught by expert instructors',images:'enroll.svg'},
                   {name:'playing football',images:'sport.png'},
                   {name:'reading book',images:'book.png'},
                   {name:'my name is Samir', images:'learn.svg'}];
         this.getInfo = function(){
             return info;
         }
    }

app.service("customerservice", customerservice);
