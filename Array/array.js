// let buah = ['Jeruk','Nanas','Apel'];
// buah.shift();
// console.log(buah)
// buah.unshift('Lemon'); console.log(buah)

// var points = ['budi','joko','modar'];
// // console.log(points.sort(function(a,b){ return a-b}));
// // console.log(points.sort(function(a,b){ return b-a}));
// // points.splice(3,0, 'mangga');
// // points.splice(0,2, 'kelapa')
// // delete points[1];
// var points1 = points.slice(2);
// console.log(points1);

// let nama1 = ['Andi','Budi'];
// let nama2 = ['Caca','Dede','Euis'];
// let nama3 = nama1.concat(nama2); 
// let nama4 = nama2.concat(nama1);
// console.log(nama3) 
// console.log(nama4)

// var string ='kodok';
// console.log(string.split(''));
// let index = [''];


// function kata(string){
//     // for(i=)
//     if(string== string)
//     console.log(index.findIndex())
//     return true;
// }
// // else
// // {
// //     return false;
// // }
// console.log(kata);

// mencari nilai terbesar dan terkecil without min max

// var angka = [2,6,8,9,4]
// var terbesar = -Infinity
// function hitung (angka){
//     for (i=0; i>angka.length; i++){
//         for(j=i; j<angka; j++){
//             y = angka [i] - angka [j+1];
//             if(i>=j){
//                 console.log('nilai terbesar :' + y)
//             }else{
//                 console.log('nilai terkecil : ' + y)
//             }
//         }
//     }
// }

var angka = [2,6,8,9,4];
var besar=angka[0];
var kecil = angka[0];
// for (i=0; i<angka.length;i++)
// {
//     if (angka[i]>besar){
//     besar = angka[i];
// }

// if(angka[i]<kecil){
// }
// }console.log('nilai terkecil : '+ kecil)
// console.log('nilai terbesar : ' + besar)

for(i=0; i<angka.length; i++)
{
    for(j=i;j<angka.length; j++)
    {
        var kecil = angka[i]
        if(angka [i]> angka[j])
        {
            angka[i] = angka[j];
            angka[j]= kecil;
        }
    }
}console.log(angka)

