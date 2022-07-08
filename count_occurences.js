// Count Occurrences
// You are given an array 
// A
//  containing 
// N
//  integer elements and an integer 
// K
// , and your task is to return the count of occurrences of 
// K
//  in array 
// A
// .





const findCount = (N, K, Arr) => 
{
  let count = 0;
  for(let i=0; i<N; i++){
    if(Arr[i] == K){
      count++;
    }
  }
  return(count);
};