//折半插入排序
function insert_binary_sort(arr) {          // 插入排序
    var temArr = [];                // 临时数组，存储已排序项
    function getSortTmpIndex(subArr, num) {
        var len = subArr.length;
        if(0 == len) return 0; // 当数组为空时，返回最开始位置
            var mid = Math.ceil(len / 2); // 计算中间元素所在位置
        if(mid > len - 1) {
            mid = len - 1;
        }
        if(num == subArr[mid]) { // 相等时直接返回
            return mid;
        }
        if(num > subArr[mid]) { // 向后折半查找
            mid++;
            return mid + getSortTmpIndex(subArr.slice(mid), num);
        }
        if(num < subArr[mid]) { // 向前折半查找
            return getSortTmpIndex(subArr.slice(0, mid), num);
        }
    }
    for (var i in arr) {
        var index = getSortTmpIndex(temArr, arr[i]); // 查找arr[i]在temArr中的位置
        console.log('index:', index, ' num:', arr[i], ' arr:', temArr);
        temArr.splice(index, 0 , arr[i]); // 将元素插入到查找位置
    }
    return temArr;
}
var startTime = new Date();
var result = insert_binary_sort([2,4,1,3,8,7,4,0,6,10]);
console.log(result);
var endTime = new Date();
console.log(endTime-startTime);

module.exports = insert_binary_sort;