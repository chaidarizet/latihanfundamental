// // // // var x = 'latihan programming';

// // // // console.log(x.length());

// // // // var angka = 10;
// // // // console.log(typeof(angka));
// // // // angka = angka.toString();
// // // // console.log(typeof(angka));

// // // // angka = parseInt(angka);
// // // // console.log(typeof(angka));


// // // // let c = parseInt('1234.5678'); 
// // // // let d = parseFloat('1234.5678'); 
// // // // let e = parseInt('Halo Dunia'); 
// // // // let f = parseFloat('Halo Dunia');
// // // // console.log(c) 
// // // // console.log(d) 
// // // // console.log(e) 
// // // // console.log(f)
// // // //float itu decimal, bisa angka dibelakang koma

// // // // Adding Strings & Numbers
// // // // var a = 'adapa apa disana';
// // // // var b = 20;

// // // // console.log ('sape lu '+a+' masasi?\n' +b);

// // // //number
// // // var g = 0.2 + 0.1;
// // // var h = (0.2 * 10 + 0.1 * 10) / 10;

// // // //artikmatika
// // // a++;
// // // a = a+ 1;

// // // a+=2;
// // // a= a+2;

// // // a*=2;
// // // a= a*2;

// // // // Basic math Object
// // // // Phi 3,14
// // // // abs mau ngambil seleisih pake abslout kalo mau itung adengan b tinggi nya berrapa
// // // // Power itu kuadrat pangkat
// // // // sqrt akar 2
// // // // CBRt cubic suare 3

// // // // Round, Ceil, floor
// // // // // math round pembulatan pembatasnya 0.5
// // // // floor udah pasti kebawah, gapeduli angka komakomaan
// // // // kalo ceil keatasnya..... untuk paging

// // // // RandomSource, max & min
// // // // Math.random
// // // // Random menghasilkan value acak 0 sampai 1

// // // // console.log(Math.round(4.7)); 
// // // // console.log(Math.round(4.4)); 
// // // // console.log(Math.floor(Math.random(*10)));
// // // // console.log(Math.ceil(4.4));

// // // // Random, max & min
// // // // console.log(Math.max(1,3,5)); 
// // // // console.log(Math.min(1,3,5));


// // // let a = new Date();
// // // console.log(a.getFullYear()) 
// // // console.log(a.getMonth()+1) //karena itung index y mulainya nol
// // // console.log(a.getDate()) 
// // // console.log(a.getDay()) 
// // // console.log(a.getHours()) 
// // // console.log(a.getMinutes()) 
// // // console.log(a.getSeconds()) 
// // // console.log(a.getMilliseconds())

// // // // Soal 1
// // var x = 4;
// // var y = 3;
// // var z = 2;

// // var w = Math.pow(((x+y*z)/(x*y)), z);
// // console.log(w);

// // // Soal 2
// // // var a = prompt('Silahkan masukkan angka berapapun:');
// // // alert('kuadrat dari ' +a +' =' +Math.pow(a, 2));


// // // Soal 3
// // console.log(Math.sqrt(8));

// // // Soal 4
// // // var day =360;
// // // var minggu = 7;
// // // var bulan = 30;

// // // var banyak_hari =485;  

// // // console.log(banyak_hari - day);
// // // console.log(banyak_hari-day/minggu);
// // // console.log(banyak_hari-day/bulan);
// // // console.log(banyak_hari-day/tahun);



// // // soal 5
// // var usia = 49;
// // var rasio = 14;

// // var satuan = 49/rasio;
// // var andi = satuan*4;
// // var budi = satuan*10;

// // console.log('Umur Andi 2 tahun lagi: '+ (andi +2));
// // console.log('Umur Budi 2 tahun lagi: ' + (budi +2));

// // // soal 6
// // var today = new Date();
// // console.log('Hari ini tanggal '+today);
// // console.log('Besok tanggal '+(today+1));
// // console.log('Kemarin tanggal '+(today-1));

// // // soal 7
// // var a = 'Halo Dunia';
// // var b = a.length;
// // var c = a.replace(/a/g, '').length;
// // console.log(a + ' memiliki huruf a sebanyak ' + (b-c));

// // // soal 8
// // // var jarak= 120;
// // // var mobila=60;
// // // var mobilb=40;
// // // var timing = 9;
// // // var detik = (120/(60/3600) + (40/3600));
// // // var tabrakan = timing + (Math.floor(detik/3600));
// // // var menittabrakan = Math.floor((detik%3600)/60);
// // // var detiktabrakan = ((lamaWaktuDetik%3600)%60);

// // // console.log('Total Lama Waktu tempuh dalam detik ' + detik);
// // // console.log('Tabrakan terjadi pada waktu jam ' + tabrakan + ' menit ' + menittabrakan + ' detik ' + detiktabrakan);

// //  //soal 8
// //  var jarak = 120;
// //  var kecepatanA = 60;
// //  var kecepatanB = 40;
// //  var pukulMulai = 9;

// //  var lamaWaktuDetik = (120/((60/3600) + (40/3600)));
// //  var jamTabrakan = pukulMulai + (Math.floor(lamaWaktuDetik/3600));
// //  var menitTabrakan = Math.floor((lamaWaktuDetik%3600)/60);
// //  var detikTabrakan = ((lamaWaktuDetik%3600)%60);

// //  console.log('Total Lama Waktu tempuh dalam detik ' + lamaWaktuDetik);
// //  console.log('Tabrakan terjadi pada waktu jam ' + jamTabrakan + ' menit ' + menitTabrakan + ' detik ' + detikTabrakan);

// // // soal 9
// // console.log(Math.floor(Math.random( 100)));

// // Hari 4 IF
// // if (1==1)
// // {
// //     console.log('nilai sama');    
// // }

// // == cek value/ compare
// // === cek tipe data
// // > membandingkan lebih besar
// // >= membandingkan value sampai sama dengan value

// // && harus semuanya bener
// // || satu aja yang true lgsg bisa true
// // console.log(1=='1');


// // var nilai = 90;
// // if(nilai > 80)
// // {
// //     console.log('pinter')
// //     var status ='lulus';
// // }else if (nilai >=60 && nilai <= 80)
// //     console.log('b aja');
// //     else
// //     {
// //         console.log('remed');
// //     }

// // Sqitch itu statemen
//     // var kendaraan = 'motor';

//     // switch(kendaraan)
//     // {
//     //     case 'mobil':
//     //     console.log('naik mbem');
//     //     break;

//     //     case 'motor':
//     //     console.log('naik motor');
//     //     break  ;
//     //     default:
//     //     console.log('grab');
//     // }


//     // let alaskaki = 'sepatu'; 
//     // let warna = 'merah';

//     //     switch (true) 
//     //     {
//     //         case (alaskaki == 'sepatu' && warna == 'merah'):
//     //                 console.log('Saya suka sepatu merah.');
//     //         break;
//     //         case (alaskaki == 'sepatu' && warna == 'biru'):
//     //                 console.log('Saya suka sepatu biru.');
//     //         break;
//     //         case (alaskaki == 'sandal' && warna == 'merah'):
//     //                 console.log('Saya suka sandal merah.');
//     //         break;
//     //         case (alaskaki == 'sandal' && warna == 'biru'):
//     //                 console.log('Saya suka sandal biru.');
//     //             break;
//     //         default:
//     //                 console.log('Tak suka alas kaki merah/biru.');
//     //     }

    // Soal 1 Switch
//         let alas = 'sendal';
//         let warna = 'merah';
//         let harga ='murah';
//             switch (true)
//             {
//                 case (alas == 'sendal' && warna == 'merah' && harga =='murah'):
//                         console.log('Saya suka sendal merah dan murah');
//                 break;
                
//                 case (alas == 'sendal' && warna == 'merah' && harga =='mahal'):
//                         console.log('Saya suka sendal merah dan mahal');
//                 break;
                
//                 case (alas == 'sendal' && warna == 'biru' && harga =='murah'):
//                         console.log('Saya suka sendal biru dan murah.');
//                 break;

//                 case (alas == 'sendal' && warna == 'biru' && harga =='mahal'):
//                         console.log('Saya suka sendal biru dan mahal.');
//                 break;


//                 case (alas == 'sepatu' && warna == 'biru' && harga == 'mahal'):
//                         console.log('Saya suka sepatu biru dan mahal.');
//                 break;

//                 case (alas == 'sepatu' && warna == 'biru' && harga == 'murah'):
//                         console.log('Saya suka sepatu biru dan murah.');
//                 break;
//                 case (alas == 'sepatu' && warna == 'merah' && harga =='mahal'):
//                         console.log('Saya suka sepatu merah dan mahal.');
//                 break;
//                 case (alas == 'sepatu' && warna == 'merah' && harga=='murah'):
//                         console.log('Saya suka sepatu merah dan mahal.');
//                     break;

        
//                     default:
//                         console.log('Tak suka alas kaki merah/biru dan mahal.');
//             }

// // Soal Nomor #10
// var a = prompt(' Masukkan angka :');
// var x= a%2;
// var y;

//     if(x == 0)
//     {
//         y =' genap';
//         }else{
//         y ='ganjil';
//     }

//     switch(y)
//     {
//         case 'ganjil':
//         alert('Angka' + a + 'tergolong ganjil');
//         break;

//         case 'genap':
//         alert('Angka' + a + 'tergolong genap');
//         default:
//         alert ('Angka tidak ada');
//     }

// // Soal Nomor 11
// var a = (new Date().getMonth());
//     b = a+1;
//     if( a == 0)
//         {
//         console.log('Saat ini bulan '+ b + ' : bulan Januari');
//         }
//     else if(a==1)
//         {
//             console.log('Saat ini bulan '+ b + ' : bulan Februari');
//         }
//     else if(a==2)
//         {
//             console.log('Saat ini bulan '+ b + ' : bulan Maret');
//         }
//     else if(a==3)
//         {
//             console.log('Saat ini bulan '+ b + ' : bulan April');
//         }
//     else if(a==4)
//         {
//             console.log('Saat ini bulan '+ b + ' : bulan Mei');
//         }
//     else if(a==5)
//         {
//             console.log('Saat ini bulan '+ b + ' : bulan Juni');
//         }
//     else if(a==6)
//         {
//             console.log('Saat ini bulan '+ b + ' : bulan Juli');
//         }
//     else if(a==7)
//         {
//             console.log('Saat ini bulan '+ b + ' : bulan Agustus');
//         }
//     else if(a==8)
//         {
//             console.log('Saat ini bulan '+ b + ' : bulan September');
//         }
//     else if(a==9)
//         {
//             console.log('Saat ini bulan '+ b + ' : bulan Oktober');
//         }
//     else if(a==10)
//         {
//             console.log('Saat ini bulan '+ b + ' : bulan November');
//         }
//     else if(a==11)
//         {
//             console.log('Saat ini bulan '+ b + ' : bulan Desember');
//         }

//     // Soal #12
//     var a = new Date();
//     var thn = a.getFullYear();
//     var bln = a.getMonth();
//     var hari =  a.getDay();
//     var tgl = a.getDate();
//     var jam = a.getHours();
//     var mnt = a.getMinutes();
//     var dtk = a.getSeconds();
//     var clock = jam +' : ' + mnt + ' : ' + dtk;
    
//     if(hari ==0)
//         {
//             console.log('Hari ini Minggu ' + tgl + ' ' + bln +' '
//                         + thn + ' Pukul' + clock);
//         }

//     else if(hari ==1)
//         {
//             console.log('Hari ini Senin, ' + tgl + ' ' + bln +' '
//                         + thn + ' Pukul ' + clock);
//         }
//     else if(hari ==2)
//         {
//             console.log('Hari ini Selasa, '+ tgl + ' ' + bln +' '
//                         + thn + ' Pukul ' + clock);
//         }
//     else if(hari ==3)
//         {
//             console.log('Hari ini Rabu, '+ tgl + ' ' + bln +' '
//                         + thn + ' Pukul ' + clock);
//         }
//     else if(hari ==4)
//         {
//             console.log('Hari ini Kamis, '+ tgl + ' ' + bln +' '
//                         + thn + ' Pukul ' + clock);
//         }
//     else if(hari ==5)
//         {
//             console.log('Hari ini Jumat, '+ tgl + ' ' + bln +' '
//                         + thn + ' Pukul ' + clock);
//         }
//     else if(hari ==6)
//         {
//             console.log('Hari ini Sabtu, ' + tgl + ' ' + bln +' '
//                         + thn + ' Pukul ' + clock);
//         }

//         // soal 13#
//         var m = 65 ;
//         var t = 2;
//         var imt = m / Math.pow(t, 2);
//         console.log(imt);

//         if(imt < 18.5)
//             {
//                 console.log('Berat badan kurang');
//             }
            

//             else if(imt=>18.5 && imt <= 24.9)
//             {
//                 console.log('Berat badan ideal');
//             }
            

//             else if(imt=>25.0 && imt <= 29.9)
//             {
//                 console.log('Berat badan berlebih');
//             }
            

//             else if(imt=>30.0 && imt <= 39.9)
//             {
//                 console.log('Berat badan sangat berlebih');
//             }
            

//             else
//             {
//                 console.log('Obsetitas');
//             }

// var z='';
// for(n=1; n<=5; n++)
// {
// 	for(i=1; i<z; i++)
// 	{
// 		z += ' * ';
// 	}
// 	z+='\n';
// }
// console.log(z);

// belajar array

// function data(x,y)
// {
// 	z = x + y
// 	return z
// }
// 	console.log(data(4,5))

// function pangkat(x,y)
// 	{
// 		if(y==1)
// 		{
// 			return x;
// 		}else
// 		{
// 			return x = x*pangkat(x , y - 1);
// 		}
// 	}
// 	console.log(pangkat(7,2))

// setTimeout(waktu,3000);
// function waktu()
// {
// 	console.log('Halo');
// }
// console.log('Apa');

// var arrayKu = [ 
// 	['Andi',24,'PNS'], 
// 	['Budi',28,'Pengacara'], 
// 	['Caca',21,'Siswa'],
// ]
// arrayKu[0].sort()
// arrayKu[1].reverse()
// console.log(arrayKu[0]) 
// console.log(arrayKu[1])

// let mobil = ['Alya','Xenia','Avanza']; 
// console.log(mobil) 
// console.log(mobil.toString()) 
// console.log(mobil.join(' * '))

// let buah =['Jeruk','Nanas','Apel'];
// buah.pop();
// console.log(buah)

// buah.push('Kiwi');
// console.log(buah)

// Masih TANGGA LOOPING
// var string = '';
// for(i=5; i>=2; i--)
// {
//     for(j =1; j<=i; j++)
//     {
//         string = string + ' * ';
//     }
//     string = string + '\n';
// }

// for(i=1; i<=5; i++)
// {
//     for(z = 1; z<=i; z++)
//     {
//         string = string + ' * '
//     }
//     string = string + '\n'
// }
// console.log(string);

// var string = '';

// for(i=1;i<=10; i++)
// {
//     for( k=10; k>i; k--){
        
//         string = string + ' ';
//     }
//     for( n= ;n<=i; n++)
//     {
//         string = string + ' * ';
//     }
//     string = string + ' /n ';
// }

// var z = '';
// // kopong = 
// for(n=0; n<=5; n++)
// {
//     for(i=n; i<=5; i++)
//     {
//         z += ' ';
//     }
//     for(t=1; t<=n; t++)
//     {
//         z += '  ';
//     }
//     for(p =1; p<=n - 1; p++)
//     {
//         z+='z';
//     }
//     z += ' \n ';
// }
// console.log(z);

// var z='';
// for(n=1; n<=5; n++)
// {
// 	for(i=n; i<=5; i++)
// 	{
// 		z += '   ';
// 	}
// 	for(o=1; o<=n;o++)
// 	{
//         // for(l=0; l<=o; l--)
//         // {
//         //     z += ' ';
//         // }
// 		z +=' * ';
// 	}
// 	for(p=1; p<=n -1; p++)
// 	{
// 		z +=' * ';
// 	}
// 	z+='\n';
// }

// console.log(z);

// let z="";
// var i,j,k,l,m,n,o;
// n =5;
// k=n;
// for (i=1;i<=n;i++)
// {
//    for(j=0;j<k;j++)
//     {
//         z+='   ';
               
//     }   
//     if(i<n){
//         for(l=1;l<=(2*i-1);l++)
//             {
//                 if(l==1 || l==(2*i-1))
//                 {
//                     z+=' * ';
//                 }
//                 else
//                 {
//                    z+='   ';
//                 }
//              } 
        
//             }     
//             else if(i==n)
//                 {
//                     for(l=1;l<=(2*i-1);l++)
//                     {
//                         z+=' * ';
//                     } 
//                 }          
            
         

//          for(j=0;j<(k*2)-3;j++)
//          {
//              z+='   ';
                    
//          } 
             
//          if(i<n){
//             for(l=1;l<=(2*i-1);l++)
//                 {
//                     if(l==1 || l==(2*i-1))
//                     {
//                         z+=' * ';
//                     }
//                     else
//                     {
//                        z+='   ';
//                     }
//                  } 
            
//            }     
//            else if(i==n)
//             {
//                 for(l=1;l<=(2*i-1)-1;l++)
//                 {
//                     z+=' * ';
//                  } 
//             }   
//     k--;
//     z+='\n';
    
// }
// console.log(z);
