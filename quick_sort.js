const quickSort = (arr, start, end) => {
    const partition = (arr,start,end) => {
        let pivot = arr[Math.floor((start+end)/2)];
        let i = start;
        let j = end;
        while(i<=j) {
            while(arr[i]<pivot) i++;
            while(arr[j]>pivot) j--;
            if(i<=j) {
                [arr[i],arr[j]] = [arr[j],arr[i]]
                i++;
                j--;
            }
        }
        return i;
    }
    
    let index;
    if(arr.length > 1) {
        index = partition(arr, start, end);
        if(start<index-1) quickSort(arr, start, index-1);
        if(index<end) quickSort(arr, index, end);
    }
    return arr;
}

const arr = [1,8,3,11,5,10,9]; 
console.log(quickSort(arr,0,arr.length-1));