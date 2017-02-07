//堆排序
Array.prototype.buildMaxHeap=function(){
    for(var i=Math.floor(this.length/2)-1;i>=0;i--){
        this.heapAdjust(i,this.length);
    }
};
Array.prototype.swap=function(i,j){
    var tmp=this[i];
    this[i]=this[j];
    this[j]=tmp;
};
Array.prototype.heapSort=function(){
    this.buildMaxHeap();
        for(var i=this.length-1;i>0;i--){
            this.swap(0,i);
            this.heapAdjust(0,i);
        }
    return this;
};
Array.prototype.heapAdjust=function(i,j){
    var largest=i;
    var left=2*i+1;
    var right=2*i+2;
    if(left<j&&this[largest]<this[left]){
        largest=left;
}
    if(right<j&&this[largest]<this[right]){
        largest=right;
    }
    if(largest!=i){
        this.swap(i,largest);
        this.heapAdjust(largest,j);
    }
};
var startTime = new Date();
var a=new Array();
[].push.apply(a,[2,4,1,3,8,7,4,0,6,10]);
console.log(a.heapSort());
var endTime = new Date();
console.log(endTime-startTime);