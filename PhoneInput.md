Phone Number Input Format Isolation
```
$("input").keydown(function(e){
    if( ( e.keyCode >= 48 && e.keyCode <= 57 ) || (e.keyCode >= 96 && e.keyCode <= 105 ) ) {
        let current = $(this).val();
        if( current.length == 0 ){
            $(this).val("(");
        }
        else if( current.length == 4 ) {
            $(this).val( current + ") ");
        }
        else if( current.length == 9 ) {
            $(this).val( current + "-");
        }
        else if( current.length == 14 ) {
            return false;
        }
    }
    else if( e.keyCode == 8 ){
        let current = $(this).val();
        $(this).val( current.slice( 0, current.length ) );
    }   
    else{
        console.log("character");
        return false;
    }
});
```