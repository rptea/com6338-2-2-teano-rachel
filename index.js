// Your code here
function greet() {
    var name = prompt('What is your name?');
    alert('Hello, ' + name);

    var ageInput = prompt('How old are you?');
    var age = parseInt(ageInput);

    var passedBirthday = confirm('Has your birthday passed this year?');
    const currentYear = new Date().getFullYear();
    let birthYear = currentYear - age;
    let beforeBirthday = currentYear - age - 1;

    if (passedBirthday == true) {
        alert('You were born in ' + birthYear);
    } else {
        alert('You were born in ' + beforeBirthday);
    }
}