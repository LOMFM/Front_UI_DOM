String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
 $("input").keydown(function(e){
        if( e.key.length == 1 ) {
        let cursorStart = e.target.selectionStart;
        let cursorEnd = e.target.selectionEnd;
        let current = $(this).val();
        if( cursorStart == cursorEnd ){
            
        }
        else{
            current = current.slice(0, cursorStart) + current.slice(cursorEnd);
        }
        current = current.splice(cursorStart, 0, e.key);
        current = current.replace("(","");
        current = current.replace(")","");
        current = current.replace("-","");
        current = current.replace(/\D/g,'');
        if( current.length < 4 ){
            current = "(" + current;
        }
        else if( current.length < 7 ){
            current = "(" + current.slice(0, 3) + ") " + current.slice(3,6);
        } 
        else if( current.length ){
            current = "(" + current.slice(0, 3) + ") " + current.slice(3,6) + "-" + current.slice(6, 10);
        }
        $(this).val(current);
        if(cursorStart == 0){
            cursorStart = 2;
        }
        else if( cursorStart == 4){
            cursorStart += 3;
        }
        else if( cursorStart == 9 ){
            cursorStart += 2;
        }
        else{
            if( e.key >= "0" && e.key < "9" ){
                cursorStart ++;
            }           
        }
        e.target.setSelectionRange(cursorStart, cursorStart);
        return false;
        }
 })