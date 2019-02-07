/*
//Zadanie 1
var celsiy = 36.6;
alert(9/5*celsiy+32);
var name = 'Василий';
var admin;
admin=name;
console.log(admin);
var virA1 = 1000 + "108";
console.log(virA1);
console.log(typeof (virA1));
*/
//Zadanie 2
/*var a=parseInt(prompt('Введите а'));
var b=parseInt(prompt('Введите б'));
if(a>=0 && b>=0)alert(a-b);
else if(a<0 && b<0)alert(a*b);
else alert(a+b);

var x=10;
var y=5;
switch (a) {
    case 10: console.log(a++);
    case 11: console.log(a++);
    case 12: console.log(a++);
    case 13: console.log(a++);
    case 14: console.log(a++);
    default: console.log(a);
}

var x=parseInt(prompt('Введите а'));
var y=parseInt(prompt('Введите б'));
var oper=prompt('Введите операцию');
function plus(a,b) {
    return a+b;
}
function minus(a,b) {
    return a-b;
}
function umno(a,b) {
    return a*b;
}
function del(a,b) {
    return a/b;
}
function mathOperation(arg1, arg2, operation){
   var res;
    switch (operation) {
        case 'plus': res=plus(arg1,arg2); break;
        case 'minus': res=minus(arg1,arg2); break;
        case 'umno': res=umno(arg1,arg2); break;
        case 'del': res=del(arg1,arg2); break;
        default: res=null;
    }
    return res;
}
alert(mathOperation(x,y,oper));
*/
//Zadanie 3
/*
var cont1=2;
var cont2;
var vivoldi;
while (cont1<=100)
{
    cont2=2;
    vivoldi=true;
    while (cont2<cont1&&vivoldi){

          if(cont1%cont2==0){
            vivoldi=false;
        }
        cont2++;
    }
    if(vivoldi){console.log(cont1);}
    cont1++;
}
var cont1=0;
var cont2=0;
do{
    if(cont1==0)console.log(cont1 + ' - это ноль' );
    else if(cont2==1)console.log(cont1 + '- нечетное число');
    else {console.log(cont1 + '- четное число'); cont2=0;}
    cont1++; cont2++;
}while(cont1<=10)


for (var i = 0; i < 10; console.log(i++)){}

for(var i=0, str='';i<21;i++){
    for(var j=1;j<=i;j++) str=str+'*';
    console.log(str);
    str='';
}
*/

//Zadanie 4
/*
function digitobj(digit) {
    var obj = {}
    if (digit > 0 && digit <= 999) {
        if (digit >= 100) obj.sot = parseInt(digit / 100);
        else obj.sot = 0;
        if (digit >= 10) obj.des = parseInt((digit-obj.sot*100) / 10);
        else obj.des = 0;
        if (digit >= 1) obj.edin = parseInt(digit -obj.sot*100-obj.des*10);
        else obj.edin = 0;
}
    return obj;
}
var vvod=+prompt('Введите число');
var res=digitobj(vvod);
if(res.edin!=undefined)console.log(res);
else console.log('Неудачно');
*/
/*
var game = {
    count: 0,
    gameIsRunning: true,
    tryes: [],
    random: function(min, max) {
        return Math.round(min + Math.random() * (max - min));
    },
    checkAnswer: function(random) {
        var answer = +prompt('Укажите число (-1 – закончить игру)');
        while(this.gameIsRunning) {
            if(answer === -1) {
                this.gameIsRunning = false;
            } else if (answer == 0 && isNaN(answer)) {
                alert('Вы не ввели число!\nВыход.');
                this.gameIsRunning = false;
            } else if (answer == random) {
                alert('Поздравляем, вы угадали число!');
                this.tryes.push(answer);
                this.gameIsRunning = false;
            } else {
                this.count++;
                this.tryes.push(answer);
                answer = +prompt('Не угадали.\nУкажите другое чило(-1 – закончить игру)\nПопыток:' + this.count);
            }
        }
    },
    gettry: function(){
        var trynext=true;
        var mytry = +prompt('Укажите попытку') - 1;
        while(trynext) {
            if (this.tryes[mytry] == undefined) mytry = +prompt('Такой попытки не существует. Укажите другой номер') - 1;
            else {
                trynext=false;
                alert('Вы указывали число ' + this.tryes[mytry]);
            }
        }
    }
}


game.checkAnswer(game.random(1, 4));
game.gettry();
/*