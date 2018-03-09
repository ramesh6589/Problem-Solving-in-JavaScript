// Implement binary search in java script

var BinarySearchProblem=function(){
}
BinarySearchProblem.prototype.binarySearch= function(array,element){
     var leftpointer=0
     var rightpointer=array.length;
      while(leftpointer<rightpointer){
        var mid=Math.floor((leftpointer+rightpointer)/2);
        if(array[mid]==element){
            return true;
        }
        if(array[mid]<element){
            leftpointer=mid;
        }else{
            rightpointer=mid;
        }
      }
      return false;

}

var array=[1,3,4,5,8,10];
var bsp= new BinarySearchProblem();
console.log(bsp.binarySearch(array,1));
