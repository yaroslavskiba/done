var isValid = function(s) {
    while(s.match(/\(\)|\[\]|\{\}/g)){
        s = s.split('()').join('').split('[]').join('').split('{}').join('');
    }
    if(!s) return true;
    return false;
};