//冒泡排序
function bubble_sort(arr){
    var len = arr.length;
    for (var i = 0; i < len-1; i++){         
        var exchange = true;              
        for (var j = len-1; j >i; j--){    
            if (arr[j] < arr[j - 1]){   
                var temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                exchange = false;
            }
        }
        if (exchange){
            return arr;
        }
    }
}
var startTime = new Date();
var result = bubble_sort([2,4,1,3,8,7,4,0,6,10]);
console.log(result);
var endTime = new Date();
console.log(endTime-startTime);

module.exports = bubble_sort;