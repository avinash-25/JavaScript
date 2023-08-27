var person ={
    firstname: 'john',
    lastname: 'wick',getFullName: function(){
        var fullname = this.firstname +''+this.getFullName;
        return fullname;
    }
}

var logname = function(lang1,lang2){
    console.log('logged : '+this.getFullName());
    console.log('arguments : '+lang1+''+ lang2);
}

logname.call(person,['Mandrien','Aloeince']);