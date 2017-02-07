//选择排序
function select_sort(arr){
    var len = arr.length;
    //每次从后边选择一个最小值
    for (var i = 0; i < len-1; i++){     //只需选择n-1次
        var min = i;
        for (var j = i+1; j < len; j++){
            if (arr[min]>arr[j]){
                min = j;
            }
        }
        if (min != i){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            //swap(arr[i], arr[min]);
        }
    }
    return arr;
}
var startTime = new Date();
var result = select_sort([2,4,1,3,8,7,4,0,6,10]);
console.log(result);
var endTime = new Date();
console.log(endTime-startTime);

module.exports = select_sort;