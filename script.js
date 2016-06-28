function submitAnswers(){
    var total=3;
    var score=0;
    //getting the answers
    
    var q1=document.forms["quizForm"]["q1"].value;
    var q2=document.forms["quizForm"]["q2"].value;
    var q3=document.forms["quizForm"]["q3"].value;
    
    //validation
    
    if(q1==null||q1==''||q2==null||q2==''||q3==null||q3==''){
alert("question missed");
    return false;}
    
    if(q1=='a')
        score++;
    if(q2=='c')
        score++;
    if(q3=='b')
        score++;
    
    var results=document.getElementById("results");
    results.innerHTML='<h3>You scored <span> '+score+'</span></h3>';
    return false;
    
}