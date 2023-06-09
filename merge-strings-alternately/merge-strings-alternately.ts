function mergeAlternately(word1: string, word2: string): string {
    let mergedWord="";
    for(let i=0; i < word1.length || i < word2.length; i++){
       mergedWord = mergedWord.concat(word1[i] ?? "").concat(word2[i] ?? "")
    }
    return mergedWord
};