function insert(num){
    var text = document.querySelector('.textview').value;
    var temp = text[text.length - 1];
    
    if ((temp=='*'||temp=='/'||temp=='-'||temp=='+'||temp=='.') && ( num=='*'|| num=='/'||num=='+'|| num=='-'||num=='.')){
        document.querySelector('.textview').value = text.substring(0, text.length - 1)+num;
    }
    else{
        document.querySelector('.textview').value += num;
    }
}
function fg(){
    var text = document.querySelector('.textview').value;
    for (var i = 0; i < text.length; i++) {
        if(text[i]=='.'){
        console.log(text[i]);}
    }
}
function eq(){
    var textview = document.querySelector('.textview').value;
    if(textview){
        document.querySelector('.textview').value = eval(textview);
    }
}
function c() {
    
    document.querySelector('.textview').value = "";
}
function back() {
    var textview = document.querySelector('.textview').value;
    document.querySelector('.textview').value = textview.substring(0,textview.length-1);
}