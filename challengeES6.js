var a =[6,1,2,1,3,2,4,6];

function urut(a)
{
    var b =[];
    var j =0;
    a.sort();
    for(i=0;i<a.length; i++)
    {
        if(a[i] !== a[i + 1]){
            b[j] = a[i];
            j++;
        }
    }
    
    console.log(b)

 
}urut(a)
