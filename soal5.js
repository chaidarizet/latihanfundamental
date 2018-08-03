// 5
// for(i=1; i<=z; i++)
// {
//     if(x%1 ==0 && y%1==0){
//         ;
//         alert(x,y);
//     }
//     alert('hasil : '+ z + "\n")
    
// }

// while(x >= y && x%y == 0)
// {
//     x = x/y;
//     alert( 'hasil : ' + x )
//     x++;
// }

// function xyz (a,b)
// {
//     if(a%b == 1)
//     {
//         console.log(a);
//     }else
//     {
//         while(a%b == 0)
//         {
//             a = a / b;
//             console.log(a)
//         }
//     }
// }
// xyz(120,2);
/* returns the size/length of an object */
// Object.size = function(obj) {
// 	var size = 0;
// 	for(key in obj) {
// 		if(obj.hasOwnProperty(key)) size++;
// 	}
// 	return size;
// }

//initial vars
// var str = 'hellodavidthisisatestofobjectusage';
// var letters = new Object;

// //loop, figure it out
// for(x = 0, length = str.length; x < length; x++) {
// 	var l = str.charAt(x)
// 	letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
// }

// //output count!
// for(key in letters) {
// 	console.log(key + ' :: ' + letters[key]);
// }
// console.log(Object.size(letters));