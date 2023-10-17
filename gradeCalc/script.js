function calculate() {
    
    let s1 = parseFloat(document.getElementById('s1').value) || 0;
    let s2 = parseFloat(document.getElementById('s2').value) || 0;
    let s3 = parseFloat(document.getElementById('s3').value) || 0;
    let s4 = parseFloat(document.getElementById('s4').value) || 0;
    let s5 = parseFloat(document.getElementById('s5').value) || 0;
    let s6 = parseFloat(document.getElementById('s6').value) || 0;
    let s7 = parseFloat(document.getElementById('s7').value) || 0;
    let s8 = parseFloat(document.getElementById('s8').value) || 0;
    let s9 = parseFloat(document.getElementById('s9').value) || 0;
    let s10 = parseFloat(document.getElementById('s10').value) || 0;
    let subjectCount=parseFloat(document.getElementById('subjectCount').value) || 0;


    const sum = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10;
    const total= subjectCount*100;

    document.getElementById("demo").innerHTML = `Your Total marks is = ${sum}`;
    const percentage = (sum / total) * 100;

    document.getElementById("demo1").innerHTML = `Your Marks Percentage is = ${percentage}%`;

    if (percentage >= 90) {
        document.getElementById("demo2").innerHTML = `Your Grade is A++ 😎`;
    } else if (percentage >= 80) {
        document.getElementById("demo2").innerHTML = `Your Grade is A 🥰`;
    } else if (percentage >= 60) {
        document.getElementById("demo2").innerHTML = `Your Grade is B++ 🤗`;
    } else if (percentage >= 40) {
        document.getElementById("demo2").innerHTML = `Your Grade is B 😑`;
    } else {
        document.getElementById("demo2").innerHTML = `You have failed !! 😡👿`;
    }
}
