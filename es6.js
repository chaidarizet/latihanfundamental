function halo(nama) { 
    console.log('Halo, aku '+nama);}
function hai(nama) { 
    console.log(`Hai, aku ${nama}`); 
    console.log(`Usiaku ${7*3}`);}
halo('Andi');
// Halo, aku Andi
hai('Arif');

let x = function () { 
    console.log('Hai ini X!');
};
let y = function (callback) { 
    console.log('Halo ini Y!'); callback();
}; y(x);

let merk = 'Yamaha';
let tahun = 2015;
let mio = { merk: merk,
prod: tahun
}
let vixion = { merk, tahun
}
console.log(mio); console.log(vixion);