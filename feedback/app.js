function feedback(){
    let title = document.getElementById('title');
    let btn = document.getElementById('btn');

    let nameinput = document.getElementById('name');
    let emailinput = document.getElementById('email');
    console.log(nameinput.value, emailinput.value)
    let output = "Thanks for the feedback " + nameinput.value;
    title.innerText = output;
    btn.style.display = 'none';
    nameinput.style.display = 'none';
    emailinput.style.display  = 'none';
}