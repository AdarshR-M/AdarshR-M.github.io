function call_hobbies(){
    var arr_h = ['hob-1','hob-2','hob-3','hob-4','hob-5','hob-6'];
    var ids = ['check-1','check-2','check-3','check-4','check-5','check-6'];
    var arr_name = ['Music','Chess','Table Tennis','Novels','Movies','Astronomy'];
    var s = "You have not chosen any of the options.";
    var selected = [];
    
    for (var i = 0, n = ids.length; i < n; ++i){
        if (document.getElementById(ids[i]).checked){
            selected.push(i);
        }
    }
    for (var i = 0, m = selected.length; i < m; ++i){
        if (i === 0){
            s = "You have chosen : " + arr_name[selected[0]];
        }
        else {
            s += arr_name[selected[i]];
        }
        if (i < m-2){
            s += ", ";
        }
        else if (i === m-2){
            s += " and ";
        }
        else if (i === m-1){
            s += ".";
        }
    }
    if (selected.length == 0){
        window.alert(s);
        return;
    }
    else{
        window.confirm(s);
    }
    

    if (!document.getElementById('check-6').checked){
        document.getElementById('popup').style.display = "block";
    }
    else{
        document.getElementById('popup').style.display = "none";
    }

    for (var i = 0, m = ids.length; i < m; ++i){
        document.getElementById(arr_h[i]).style.display = "none";
        document.getElementById(ids[i]).checked = false;
    }
    for (var i = 0, m = selected.length; i < m; ++i){
        document.getElementById(arr_h[selected[i]]).style.display = "block";
    }
    document.getElementById('hob-6').style.display = "block"
    document.getElementById('check-6').checked = true;
}