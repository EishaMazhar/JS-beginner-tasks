/* 5. Here you should find the length of the longest substring that consists of the same letter.
 For example, line "aaabbcaaaa" contains four substrings with the same letters "aaa", "bb","c" and "aaaa". 
 The last substring is the longest one which makes it an answer.*/
function longRepeat(str){
    const originalLength=str.length;
    let len=1,maxlen=1;
    for(let i=1;i<=originalLength;i++){
            if(str[i]===str[i-1]){
                len++;
            }
            else{
               maxlen=Math.max(maxlen,len);
               len=1;
            }
    }

    return maxlen;
}

var mystr='acdabbaaadcccddddeffgacda'
 console.log(longRepeat(mystr));
