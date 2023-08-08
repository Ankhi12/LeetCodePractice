/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const sa = []
    const sb = []
    for(let i = 0; i < s.length; i++){
        if(s[i]=='#'){
            sa.pop()
        }
        else{
            sa.push(s[i])
        }
    }
    for(let j = 0; j < t.length; j++){
         if(t[j]=='#'){
            sb.pop()
        }
        else{
            sb.push(t[j])
        }
    }
    if(JSON.stringify(sa) === JSON.stringify(sb)){
        return true
    }
    return false
};
