//希尔排序
function shell_sort(arr){
    len=arr.length;
    for(var fraction = Math.floor(len/2) ; fraction>0 ; fraction = Math.floor(fraction/2)){
        for(var i = fraction ; i < len ; i++){
            for(var j = i - fraction ; j >= 0 && arr[j] > arr[ fraction + j ] ; j -= fraction){
                var temp = arr[j];
                arr[j] = arr[fraction+j];
                arr[fraction+j] = temp;
            }
        }
    }
    return arr;
}
var startTime = new Date();
var result = shell_sort([2,4,1,3,8,7,4,0,6,10]);
console.log(result);
var endTime = new Date();
console.log(endTime-startTime);

module.exports = shell_sort;