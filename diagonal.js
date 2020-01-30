
function diagonalDifference(n,arr) {
    // Write your code here
    
    let firstdiag=0;
    let secondiag=0;
    let result;
    for(var i=0;i<n;i++)
        {
        var item=i*(n+1); 
        
        var count=(i+1)*n-(i+1);
        console.log(count + " "+ arr[count]);
        firstdiag+=arr[item];
        secondiag+=arr[count];
        }
        console.log(firstdiag);
        console.log(secondiag);
    if(firstdiag>secondiag) result= firstdiag-secondiag;
    else result=secondiag-firstdiag;
    return console.log(result);
}
diagonalDifference(3,[11 ,2 ,4, 4, 5, 6,10 ,8 ,-12]);


