// var ism = 'Abduazim'
// let result = ism.charAt(5)
// console.log(result);

let ism = prompt('ism kiriting')


let harf = prompt('harf kiriting').toLowerCase();

if(ism.includes(harf)){
    alert(`${ism} Ismining ichida ${harf} harfi mavjud`)
}
else{
    alert(`${ism} Ismining ichida ${harf} harfi mavjud emas`)
}
