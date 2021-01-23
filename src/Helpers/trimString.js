export const trimString = (string, length) => {
    if(!string.length || string.length < length){
        return string;
    }
    return string.slice(0,length)+"..."
}