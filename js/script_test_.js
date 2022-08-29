function validate_input() {
    let btn1 = $('#button_1').val()
    let btn2= $('#button_2').val()
    let btn3 = $('#button_3').val()
    let btn4 = $('#button_4').val()
    let btn5 = $('#button_5').val()
    let btn6 = $('#button_6').val()
    let btn7 = $('#button_7').val()
    let btn8 = $('#button_8').val()

    if ((btn1+btn2+btn3+btn4+btn5+btn6+btn7+btn8).toLowerCase() == 'welcome!') {
        $('#right_answer_modal').modal('show');
    }
    else {
        $('#wrong_answer_modal').modal('show');
    }
  }


let btn = document.getElementById("validation_button");
btn.addEventListener('click', event => {
    validate_input();
});