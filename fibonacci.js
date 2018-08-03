function fibonacci(x,y,z)
{
    var array =[];
    array[0] = x;
    array[1] = y;
    console.log(x);
    console.log(y);

    for(var i=2;i<z; i++)
    {
        array[i] = array[i-2] + array[i-1];
        console.log(array[i]);
    }
}
fibonacci(1,2,5);