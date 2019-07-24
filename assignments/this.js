/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Within the global scope, a function using "this" will be refering to the entire content of the window as it object.
* 2. If one use a dot, "this" then represents the object and what comes after the dot is a property.
* 3. In a contructor function, this is only representive of the object which will enter through the parameter.
* 4. The use of call or apply will explicity define "this" as the  object entered as the argument.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function helloThere(name) {
    console.log('hello there ' + name)
    console.log(this);
}

helloThere("George")
// Principle 2

// code example for Implicit Binding

let goodbye = {
    saying: 'goodbye ',
    say: function(name) {
        console.log(this.saying + name);
        console.log(this);
    }
}

goodbye.say('George');

// Principle 3

// code example for New Binding
function goodDay (name){
    this.saying = "have a good day! ";
    this.name = name;
    this.say = function() {
        console.log(this.saying + this.name);
        console.log(this);
    }

};

const goodDayGeorge = new goodDay('George');
const goodDayPaul = new goodDay('Paul');
goodDayPaul.say ();
goodDayGeorge.say();



// Principle 4

// code example for Explicit Binding

goodDay.prototype.sayGoodDay = function() {
    console.log(this.saying + this.name);
    console.log(this);
}


goodDayGeorge.sayGoodDay.call(goodDayPaul);