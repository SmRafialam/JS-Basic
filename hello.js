/*
var bananaPrice = 35; 
console.log(typeof bananaPrice);

var myHobby = "Playing Basketball";
console.log(typeof myHobby);

var wasWorst = true;
    wasCold = false;
console.log(typeof wasCold);


var promise = "Promise me You won't leave me?";
console.log(promise.toLowerCase());
console.log(promise.indexOf('me'));
console.log(promise.split('You'));

var number1 = 3.5;
number2 = '3.5';
number2 = parseFloat(number2);
console.log(number1 + number2);

var number1 = 1.3;
number2 = 2.3;
total = number1 + number2;
total = total.toFixed(3);
console.log(total);

var number1 = 1.3;
number2 = 2.3;
number2++;
number1--;
console.log(number2);
console.log(number1);

var name1 = 'S. M.' ;
var name2 = 'Rafi';
var fullName= name1 + ' ' + name2;
console.log(fullName);

var num = -5;
var absoluteNumber = Math.abs(num);
console.log(absoluteNumber);

var num = 5.56789;
var absoluteNumber = Math.round(num);
console.log(absoluteNumber);

var num = 9.00009;
var absoluteNumber = Math.ceil(num);
console.log(absoluteNumber);

var num = 9.789;
var absoluteNumber = Math.floor(num);
console.log(absoluteNumber);

var num = 9.00009;
var absoluteNumber = Math.random(num);
console.log(absoluteNumber);

// PICK SOME RANDOM STUDENTS FROM 1 TO 100 IN CLASS
var number = Math.random() * 100;
var result = Math.round(number);
console.log(result);

var jobPaiso = true;
var savingsAmmount = 500000;
if(jobPaiso == true && savingsAmmount > 1000000){
    console.log("Aso tomar jonno patri khuji");
}
else if(jobPaiso == true){
    console.log("Accha kichudin shomoy nao");
}
else{
    console.log("Tomar kopale biye nai");
}

var date = new Date();
console.log(date);


var friendsAge = [15, 16, 17, 18, 19];

friendsAge[1] = 21;
friendsAge.push(15);
friendsAge.push(21);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);
friendsAge.unshift(10);
console.log(friendsAge);

var friends = ['Azom' ,'Mahe', 'Sishir', 'Mafi' , 'Naidu'];
var part = friends.slice(2,4);
console.log(part);

for(var i=0; i<=10; i++){
    console.log(i);
}

var num=5;
switch(num){
    case 1000:
        console.log('I am 1000');
        break;

    case 100:
        console.log('I am 100'); 
        
    case 20:
    case 10:
        console.log('I am either 20 or 10');
        break;
        
    default:
        console.log(`I don't know where u are`); 
        break;   
}


    function doubleIt(num){
        var result = num*2;
        console.log(result);
    }
    doubleIt(5);
    doubleIt(50);


    function doubleIt(num){
        var result = num*2;
        return result;
    }
    var first = doubleIt(10);
    var second = doubleIt(100);
    var total = first+second;
    console.log(first, second, total);
 
    //cntrl+/>>for multiline comment

    // function add(num1,num2){
    //     var result = num1+num2;
    //     return result;
    // }
    // var sum = add(5,100);
    // console.log(sum);



    var student={id:17201053, phone:8801792207880, name:Rafi}
    
//INCH_TO_FEET>>

    function inchToFeet(inch){
        var feet = inch/12;
        return feet;
    }
    var senior = [156, 178, 250];

    var nanaFeet = inchToFeet(senior[0]);
    console.log(nanaFeet);
    var dadaFeet = inchToFeet(senior[1]);
    console.log(dadaFeet);
    var chachaFeet = inchToFeet(senior[2]);
    console.log(chachaFeet);b

//LEAP_YEAR>>
    const year = 3656;
    let reminder = year%4;
    if(reminder == 0){
        console.log("your year is a leap year")
    }
    else{
        console.log("your year is not a leap year")
    }


    function isLeapYear(year){
        let reminder = year%4;
        if(reminder == 0){
            return true;
        }
        else{
            return false;
        } 
    }
    const check = isLeapYear(2000);
    console.log(check);
*/

    function checkLeapYear(year){
        if((0 == year%4) && (0 != year%100) || (0 == year%400)){
            console.log(year + 'is a leap year');
        }
        else{
            console.log(year + 'is not a leap year');
        }
    }

        //const year = prompt('Enter a year:');
        checkLeapYear(2096);

//FACTORIAL_iterial_way>>

        let factorial =1;
        for(i=1; i<=10; i++){
            factorial= factorial*i;
            console.log(i,factorial);

        }

        function Factorial(n){
            let Factorial =1;
            for(i=1; i<=n; i++){
            Factorial= Factorial*i;
            

        }
        return Factorial;
        }
        let checkFactorial = Factorial(10);
        console.log(checkFactorial);
        

    
        //FACTORIAL_Recursive_way
        //10! = 1*2*3*4*5*6*7*8*9*10
        //0! = 1
        //2! = 1*2
        //5! = 1*2*3*4*5
        //6! = 1*2*3*$*%*6 OR 5!*6 OR (6-1)!*6
        //n! = (n-1)!*n OR n*(n-1)!

        function testfactorial(n){
            if(n == 0){
                return 1;
            }
            else{
                return n * testfactorial(n-1);
            }
        }
        var result = testfactorial(20);
        console.log(result);

        //fibonacciSeries

        
        //fibo[2] = fibo[2-1] + fibo[2-2]
        //fibo[3] = fibo[3-1] + fibo[3-2]
        //fibo[4] = fibo[4-1] + fibo[4-2]
        //fibo[n] = fibo[n-1] + fibo[n-2]
        
        function fibonacci(n){
        var fibo = [0,1];
        for(i=2 ; i<=n ; i++){
           
            fibo[i] = fibo[i-1] + fibo[i-2];
            
        }
        return fibo;
    }
        var result = fibonacci(12);
        console.log(result);

//FibonacciInRecursiveWay

    function fibonaccii(n){
        if(n == 0){
            return 0;
        }
        else if(n==1){
            return 1;

        }
        else{
            return fibonaccii(n-1)+fibonaccii(n-2);
        }
    }
    var Result = fibonaccii(12);
    console.log(Result);

    //findPrimeNumber
    var n=17;
    for(i=0;i<n;i++){
        if(n%2==0){
            console.log('Not a prime number');
            break;
        }
        else{
            console.log('Is a prime number');
            break;
        }
    }
    
    function isPrime(n){
        for(i=0;i<n;i++){
            if(n%2==0){
                return 'not a prime number';
            }
        }
        return 'is a prime number';
    }
    var result = isPrime(78) ;
    console.log(result);
    




        