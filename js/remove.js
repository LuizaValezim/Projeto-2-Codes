document.addEventListener('DOMContentLoaded',function(){
    var btn1 = document.getElementById('btn1');
        btn1.onclick = function () {
        document.getElementById('txt1').remove();
        this.remove();
    };

    var btn2 = document.getElementById('btn2');
        btn2.onclick = function () {
        document.getElementById('txt2').remove();
        this.remove();
    };
})
