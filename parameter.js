
//     var str = '10001100101000001';
//     var res = str.split('');
//     var cek = new RegExp(res,'g');
//         console.log(res);
        
//     for(i=0;i<res.length;i++)
//     {

//         var nol = cek['0'].length; 
//     }
//    console.log(nol);
    
  
    
function challenge1(string){
    string = string.split('');
    var array =[];
    var j =0;

    for(var i = 0; i<string.length; i++)
    {
        if(string[i] =='1')
        {
            array[j] = i;
            j++
        }
    }
    var selisihpalingbesar = 0;
    for(var k=1; k<array.length; k++)
    {
        if(array[k] - array[k -1]> selisihpalingbesar)
        {
            selisihpalingbesar = array[k] - array[k -1] -1;
        }
    }
    console.log(selisihpalingbesar);
}
challenge1('100001001')


// challenge2 ini mencari jarak disetiap 1 dengan konten '0' terbanyak
function challenge2(string){
    string = string.split('');
    var array =[];
    var j =0;

    for(var i = 0; i<string.length; i++) //nyari index berdasarkan nilai 1
    {
        if(string[i] =='1')
        {
            array[j] = i;
            j++
        }
    }
    // console.log(array);
    var selisihpalingbesar = 0;
    var pagerdepan;
    var pagerbelakang;
    for(var k=1; k<array.length; k++)
    {
        if(array[k] - array[k -1] > selisihpalingbesar)
        {
            selisihpalingbesar = array[k] - array[k -1] -1;
            pagerdepan = array[k-1];
            pagerbelakang = array[k];
        }
    }
    console.log(pagerdepan);
    console.log(pagerbelakang);
}
challenge2('100001001001')