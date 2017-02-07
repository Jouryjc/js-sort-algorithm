//归并排序
function　merge(left, right){
    var　result=[];
    while(left.length>0 && right.length>0){
        if(left[0]<right[0]){                              
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return　result.concat(left).concat(right);
}
function merge_sort(items){
    if(items.length == 1){
        return　items;
    }
    var middle = Math.floor(items.length/2),
        left = items.slice(0, middle),
        right = items.slice(middle);
        return　merge(merge_sort(left), merge_sort(right));
}
var startTime = new Date();
var result = merge_sort([2,4,1,3,8,7,4,0,6,10]);
console.log(result);
var endTime = new Date();
console.log(endTime-startTime);

module.exports = merge_sort;