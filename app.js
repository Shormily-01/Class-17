/* result calculation start*/
document.write('<h2>HW:01_Result Calculation:</h2><br>')

var Bangla=85;

if(Bangla >= 80 && Bangla <= 100){
    document.write('Bangla = A+')
}else if(Bangla >= 70 && Bangla <= 79){
    document.write('Bangla = A')
}else if(Bangla >= 60 && Bangla <= 69){
    document.write('Bangla = A-')
}else if(Bangla >= 50 && Bangla <= 59){
    document.write('Bangla = B')
}else if(Bangla >= 40 && Bangla <= 49){
    document.write('Bangla = C')
}else if(Bangla >= 33 && Bangla <= 39){
    document.write('Bangla = D')
}else{
    document.write('Bangla= Fail')
}

document.write('<br><br>')

var English=76;

if(English >= 80 && English <= 100){
    document.write('English = A+')
}else if(English >= 70 && English <= 79){
    document.write('English = A')
}else if(English >= 60 && English <= 69){
    document.write('English = A-')
}else if(English >= 50 && English <= 59){
    document.write('English = B')
}else if(English >= 40 && English <= 49){
    document.write('English = C')
}else if(English >= 33 && English <= 39){
    document.write('English = D')
}else{
    document.write('English= Fail')
}

document.write('<br><br>')

var G_Math=66;

if(G_Math >= 80 && G_Math <= 100){
    document.write('G_Math = A+')
}else if(G_Math >= 70 && G_Math <= 79){
    document.write('G_Math = A')
}else if(G_Math >= 60 && G_Math <= 69){
    document.write('G_Math = A-')
}else if(G_Math >= 50 && G_Math <= 59){
    document.write('G_Math = B')
}else if(G_Math >= 40 && G_Math <= 49){
    document.write('G_Math = C')
}else if(G_Math >= 33 && G_Math <= 39){
    document.write('G_Math = D')
}else{
    document.write('G_Math= Fail')
}

document.write('<br><br>')

var ICT=20;

if(ICT >= 80 && ICT <= 100){
    document.write('ICT = A+')
}else if(ICT >= 70 && ICT <= 79){
    document.write('ICT = A')
}else if(ICT >= 60 && ICT <= 69){
    document.write('ICT = A-')
}else if(ICT >= 50 && ICT <= 59){
    document.write('ICT = B')
}else if(ICT >= 40 && ICT <= 49){
    document.write('ICT = C')
}else if(ICT >= 33 && ICT <= 39){
    document.write('ICT = D')
}else{
    document.write('ICT= Fail')
}
/* //result calculation end*/

/*calculatator fuction start*/
document.write('<br><h2>HW:02_Calculator Function:</h2><br>')

function sum(a,b) {
    document.write(a+b+'<br>');
}
sum(10,60)

function substract (a,b) {
    document.write(a-b+'<br>');
}
substract(60,10)

function multiplication (a,b) {
    document.write(a*b +'<br>');
}
multiplication(7,8)

function division (a,b) {
    document.write(a/b +'<br>');
}
division(100,8)

function modulus (a,b) {
    document.write(a % b +'<br>');
}
modulus(50,3)

function pow (a,b) {
    document.write(a**b +'<br>');
}
pow(5,2)

function increment (a) {
    document.write(++a +'<br>');
}
increment(70)

function decrement (a) {
    document.write(--a);
}
decrement(80)
/*calculatator fuction end*/

/*increment/decrement start*/
document.write('<br><h2>HW:03_Icrement & Decrement:</h2><br><h3>Increment_(1 - 100)</h3><br>')

for (let i = 1; i <= 100; i++){
    document.write(i+'<br>')
}
document.write('<h3>Decrement_(100 - 1)</h3><br>')
for (let i = 100; i >= 1; i--){
    document.write(i+'<br>')
}
/*increment/decrement end*/

/*Odd/even start*/
document.write('<h2>HW:04_Odd & Even number in 1 - 100:</h2><br><h3>Even number:</h3>')
for (let i = 1; i<=100; i++){
    if(i % 2 == 0)
    document.write(i+'<br>');
}

document.write('<h3>Odd number:</h3><br>')

for (let i = 1; i<=100; i++){
    if(i % 2 !== 0)
    document.write(i+'<br>');
}
/*Odd/even end*/