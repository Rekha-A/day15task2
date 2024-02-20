function backspace()
{
    var exp = document.form1.calc.value;
    document.form1.calc.value = exp.substring(0, exp.length - 1);
}