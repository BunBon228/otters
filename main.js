window.addEventListener('load', function(){

    document.querySelector('body').innerHTML += `
        <div class="fact_btn">
            <img src="media/HY_DiVo0Ii8.png" alt="">
        </div>
        <div class="popup_fact">
        <img class="close_btn" src="media/HY_DiVo0Ii8.png" alt="">
        <h2>Вот тебе неожиданный факт о выдрах!</h2>
        <p>Максимальное количество времени, которое зверёк затрачивает на переработку пищи — не больше часа. Обмен веществ выдры настолько высок, что ей почти всегда приходится охотиться.</p>
    </div>
    `;

    if(document.querySelector('.fact_btn') != null){

        setTimeout(leftDvig, 3000);

        document.querySelector('.fact_btn').addEventListener('click', function(){
            this.style.display = 'none';
            document.querySelector('.popup_fact').style.display = 'block';
        });

        document.querySelector('.close_btn').addEventListener('click', function(){
            document.querySelector('.popup_fact').style.display = 'none';
            document.querySelector('.fact_btn').style.display = 'flex';
        });

    }

    console.log(123);

    function leftDvig(){

        document.querySelector('.fact_btn').style.left = '-60px';

        setTimeout("document.querySelector('.fact_btn').style.left = '-130px';", 1000);
        
        setTimeout(leftDvig, 3000);

    }

});