//插入排序
function insert_sort(arr){
    var len = arr.length;
    for (var i = 1; i < len; i++){
        if (arr[i] < arr[i - 1]){      //发生逆序，往前插入
            var temp = arr[i];
            var j;
            for (j = i - 1;j>=0 && arr[j]>temp; j--){
                arr[j+1] = arr[j];
            }
            arr[j+1] = temp;
        }
    }
    return arr;
}

var startTime = new Date();
var result = insert_sort([2,4,1,3,8,7,4,0,6,10]);
var endTime = new Date();

console.log(result);
console.log(endTime-startTime);

module.exports = insert_sort;