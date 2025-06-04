window.addEventListener('load', function(){
    // ハンバーガーメニュー 
    const ham = document.querySelector('#hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
    const nav = document.querySelector('#navi'); //js-navの要素を取得し、変数navに格納
    
    ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
        ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.classList.toggle('active');
        console.log(ham);
    });

    //スクロールイベント
    window.addEventListener('scroll', function(){
        // スクロール量を取得
        const scroll = window.scrollY;
        // 画面の高さを取得
        const windowHeight = window.innerHeight;
        //インフォメーションセクションを取得(高さを取得するため)
        const infoSection = document.querySelector('#information');
        //headerを取得(アクティブclassを付けるため)
        const header = this.document.querySelector('#header');
    
        const distanceToBox = infoSection.offsetTop;
            // 下記条件が成り立つときだけheaderにactiveクラスを付与する
        if(scroll + windowHeight > distanceToBox) {
            header.classList.add('active');
        }

        

    });


    
});
