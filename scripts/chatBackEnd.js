var Pre = "type a message",txt = "";
function write(n){
     if (txt == ""){
        document.getElementById("textM").innerHTML = Pre;
     }else if (txt.length<=2000){
    txt = txt + n;
    document.getElementById("textM").innerHTML = txt;
      
    }
      };
document.addEventListener('keyup', (e) => {
    
    if (48 <= e.keyCode <= 90 ){
        console.log(e.key+ "  "+e.keyCode);
        write(e.key);
    if (e.key == "Backspace"){
        if(txt.length > 1){
        txt = txt.substring(0, txt.length - 1);
        document.getElementById("textM").innerHTML = txt;}
         
        }}});