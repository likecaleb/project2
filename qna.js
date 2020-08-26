function check(){
    var form = document.test;
    if((Number(form.firstmeet[0].checked) + Number(form.freetime[1].checked) + Number(form.hidden[1].checked) >= 2)&&(Number(form.servant[0].checked) + Number(form.rule[1].checked) + Number(form.pill[1].checked) >= 2)&&(Number(form.travel[0].checked) + Number(form.day[1].checked) + Number(form.fight[1].checked) >= 2)&&(Number(form.choice[0].checked) + Number(form.happen[1].checked) + Number(form.glasses[1].checked) >= 2)){

        form.action = "intp.html";
    }
    
    else if((Number(form.firstmeet[0].checked) + Number(form.freetime[1].checked) + Number(form.hidden[1].checked) >= 2)&&(Number(form.servant[0].checked) + Number(form.rule[1].checked) + Number(form.pill[1].checked) >= 2)&&(Number(form.travel[0].checked) + Number(form.day[1].checked) + Number(form.fight[1].checked) >= 2)&&(Number(form.choice[1].checked) + Number(form.happen[0].checked) + Number(form.glasses[0].checked) >= 2)){
        
        form.action = "infp.html";
    } 

    else if((Number(form.firstmeet[0].checked) + Number(form.freetime[1].checked) + Number(form.hidden[1].checked) >= 2)&&(Number(form.servant[0].checked) + Number(form.rule[1].checked) + Number(form.pill[1].checked) >= 2)&&(Number(form.travel[1].checked) + Number(form.day[0].checked) + Number(form.fight[0].checked) >= 2)&&(Number(form.choice[0].checked) + Number(form.happen[1].checked) + Number(form.glasses[1].checked) >= 2)){

        form.action = "intj.html";
    }

    else if((Number(form.firstmeet[0].checked) + Number(form.freetime[1].checked) + Number(form.hidden[1].checked) >= 2)&&(Number(form.servant[0].checked) + Number(form.rule[1].checked) + Number(form.pill[1].checked) >= 2)&&(Number(form.travel[1].checked) + Number(form.day[0].checked) + Number(form.fight[0].checked) >= 2)&&(Number(form.choice[1].checked) + Number(form.happen[0].checked) + Number(form.glasses[0].checked) >= 2)){
        
        form.action = "infj.html";
    }

    else if((Number(form.firstmeet[0].checked) + Number(form.freetime[1].checked) + Number(form.hidden[1].checked) >= 2)&&(Number(form.servant[1].checked) + Number(form.rule[0].checked) + Number(form.pill[0].checked) >= 2)&&(Number(form.travel[0].checked) + Number(form.day[1].checked) + Number(form.fight[1].checked) >= 2)&&(Number(form.choice[0].checked) + Number(form.happen[1].checked) + Number(form.glasses[1].checked) >= 2)){

        form.action = "istp.html";
    }

    else if((Number(form.firstmeet[0].checked) + Number(form.freetime[1].checked) + Number(form.hidden[1].checked) >= 2)&&(Number(form.servant[1].checked) + Number(form.rule[0].checked) + Number(form.pill[0].checked) >= 2)&&(Number(form.travel[0].checked) + Number(form.day[1].checked) + Number(form.fight[1].checked) >= 2)&&(Number(form.choice[1].checked) + Number(form.happen[0].checked) + Number(form.glasses[0].checked) >= 2)){
        
        form.action = "isfp.html";
    }

    else if((Number(form.firstmeet[0].checked) + Number(form.freetime[1].checked) + Number(form.hidden[1].checked) >= 2)&&(Number(form.servant[1].checked) + Number(form.rule[0].checked) + Number(form.pill[0].checked) >= 2)&&(Number(form.travel[1].checked) + Number(form.day[0].checked) + Number(form.fight[0].checked) >= 2)&&(Number(form.choice[0].checked) + Number(form.happen[1].checked) + Number(form.glasses[1].checked) >= 2)){

        form.action = "istj.html";
    }

    else if((Number(form.firstmeet[0].checked) + Number(form.freetime[1].checked) + Number(form.hidden[1].checked) >= 2)&&(Number(form.servant[1].checked) + Number(form.rule[0].checked) + Number(form.pill[0].checked) >= 2)&&(Number(form.travel[1].checked) + Number(form.day[0].checked) + Number(form.fight[0].checked) >= 2)&&(Number(form.choice[1].checked) + Number(form.happen[0].checked) + Number(form.glasses[0].checked) >= 2)){

        form.action = "isfj.html";
    }

    else if((Number(form.firstmeet[1].checked) + Number(form.freetime[0].checked) + Number(form.hidden[0].checked) >= 2)&&(Number(form.servant[0].checked) + Number(form.rule[1].checked) + Number(form.pill[1].checked) >= 2)&&(Number(form.travel[0].checked) + Number(form.day[1].checked) + Number(form.fight[1].checked) >= 2)&&(Number(form.choice[0].checked) + Number(form.happen[1].checked) + Number(form.glasses[1].checked) >= 2)){

        form.action = "entp.html";
    }

    else if((Number(form.firstmeet[1].checked) + Number(form.freetime[0].checked) + Number(form.hidden[0].checked) >= 2)&&(Number(form.servant[0].checked) + Number(form.rule[1].checked) + Number(form.pill[1].checked) >= 2)&&(Number(form.travel[0].checked) + Number(form.day[1].checked) + Number(form.fight[1].checked) >= 2)&&(Number(form.choice[1].checked) + Number(form.happen[0].checked) + Number(form.glasses[0].checked) >= 2)){

        form.action = "enfp.html";
    }

    else if((Number(form.firstmeet[1].checked) + Number(form.freetime[0].checked) + Number(form.hidden[0].checked) >= 2)&&(Number(form.servant[0].checked) + Number(form.rule[1].checked) + Number(form.pill[1].checked) >= 2)&&(Number(form.travel[1].checked) + Number(form.day[0].checked) + Number(form.fight[0].checked) >= 2)&&(Number(form.choice[0].checked) + Number(form.happen[1].checked) + Number(form.glasses[1].checked) >= 2)){

        form.action = "entj.html";
    }

    else if((Number(form.firstmeet[1].checked) + Number(form.freetime[0].checked) + Number(form.hidden[0].checked) >= 2)&&(Number(form.servant[0].checked) + Number(form.rule[1].checked) + Number(form.pill[1].checked) >= 2)&&(Number(form.travel[1].checked) + Number(form.day[0].checked) + Number(form.fight[0].checked) >= 2)&&(Number(form.choice[1].checked) + Number(form.happen[0].checked) + Number(form.glasses[0].checked) >= 2)){

        form.action = "enfj.html";
    }

    else if((Number(form.firstmeet[1].checked) + Number(form.freetime[0].checked) + Number(form.hidden[0].checked) >= 2)&&(Number(form.servant[1].checked) + Number(form.rule[0].checked) + Number(form.pill[0].checked) >= 2)&&(Number(form.travel[0].checked) + Number(form.day[1].checked) + Number(form.fight[1].checked) >= 2)&&(Number(form.choice[0].checked) + Number(form.happen[1].checked) + Number(form.glasses[1].checked) >= 2)){

        form.action = "estp.html";
    }

    else if((Number(form.firstmeet[1].checked) + Number(form.freetime[0].checked) + Number(form.hidden[0].checked) >= 2)&&(Number(form.servant[1].checked) + Number(form.rule[0].checked) + Number(form.pill[0].checked) >= 2)&&(Number(form.travel[0].checked) + Number(form.day[1].checked) + Number(form.fight[1].checked) >= 2)&&(Number(form.choice[1].checked) + Number(form.happen[0].checked) + Number(form.glasses[0].checked) >= 2)){

        form.action = "esfp.html";
    }
    
    else if((Number(form.firstmeet[1].checked) + Number(form.freetime[0].checked) + Number(form.hidden[0].checked) >= 2)&&(Number(form.servant[1].checked) + Number(form.rule[0].checked) + Number(form.pill[0].checked) >= 2)&&(Number(form.travel[1].checked) + Number(form.day[0].checked) + Number(form.fight[0].checked) >= 2)&&(Number(form.choice[0].checked) + Number(form.happen[1].checked) + Number(form.glasses[1].checked) >= 2)){

        form.action = "estj.html";
    }

    else if((Number(form.firstmeet[1].checked) + Number(form.freetime[0].checked) + Number(form.hidden[0].checked) >= 2)&&(Number(form.servant[1].checked) + Number(form.rule[0].checked) + Number(form.pill[0].checked) >= 2)&&(Number(form.travel[1].checked) + Number(form.day[0].checked) + Number(form.fight[0].checked) >= 2)&&(Number(form.choice[1].checked) + Number(form.happen[0].checked) + Number(form.glasses[0].checked) >= 2)){

        form.action = "esfj.html";
    }

    else{

        alert("test를 확인하세요!")
    }

    form.submit();
}