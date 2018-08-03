let z="";
n =5;
b=n;
for (i=1;i<=n;i++)
{
   for(j=0;j<b;j++)
    {
        z+='   '; //spasi kiri
               
    }   
    if(i<n){
        for(l=1;l<=(2*i-1);l++)
            {
                if(l==1 || l==(2*i-1))
                {
                    z+=' * '; //bintang atas
                }
                else
                {
                   z+='   '; // kopong 1
                }
             } 
        
            }     
            else if(i==n)
                {
                    for(l=1;l<=(2*i-1);l++)
                    {
                        z+=' * '; //bawah
                    } 
                }          
            
         

         for(j=0;j<(b*2)-3;j++)
         {
             z+='   '; //spasi kosong
                    
         } 
             
         if(i<n){
            for(l=1;l<=(2*i-1);l++)
                {
                    if(l==1 || l==(2*i-1))
                    {
                        z+=' * ';
                    }
                    else
                    {
                       z+='   ';
                    }
                 } 
            
           }     
           else if(i==n)
            {
                for(l=1;l<=(2*i-1)-1;l++)
                {
                    z+=' * ';
                 } 
            }   
    b--;
    z+='\n';
    
}
console.log(z);