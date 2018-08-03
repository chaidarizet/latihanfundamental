var z='';
for(n=1; n<=5; n++)
{
	for(i=n; i<=5; i++)
	{
		z += '   '; //sebelah kiri
	}
	for(o=1; o<=n;o++)
	{
        
		z +=' * '; //kiri
	}
	for(p=1; p<=n -1; p++)
	{
		z +=' * '; //kanan
    }
    for(a=p; a<=p + 5; a++)
    {
        z+= ' t ';
    }

	z+='\n';
}
console.log(z);