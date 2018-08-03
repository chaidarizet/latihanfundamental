var nilaikelas = [
{
    nama : 'andi', 
    nilai: 38
}, 
{
    nama: 'budi', 
    nilai: 78
}, 
{
    nama: 'caca', 
    nilai: 53},
]
for(i=0;i<nilaikelas;i++)
{
    // console.log(nilaikelas[i].nilai)
    var selisih = nilaikelas[i].nilai % 5;
    selisih = 5 - selisih;

    if(selisih < 3)
    {
        nilaikelas[i].nilai= nilaikelas[i].nilai - selisih;
    }
    console.log(nilaikelas[i].nama);
    console.log(nilaikelas[i].nilai);

}
// console.log(arrayku[0].nama) 
// console.log(arrayku[0].usia) 
// console.log(arrayku[1].nama)
// console.log(arrayku[2].usia)
 