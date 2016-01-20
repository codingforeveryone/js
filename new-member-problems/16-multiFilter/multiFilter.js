function multiFilter(datArr, funcArr) {
    function arrayedFunc(el){
        for (i=0;i<funcArr.length;i++){
            if (!funcArr[i](el)){return false};            
        }
        return true
    };
    return datArr.filter(arrayedFunc);
};
