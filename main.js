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
        //インフォメーションセクションの高さを取得する
        const distanceToInfo = infoSection.offsetTop;
            // 下記条件が成り立つときだけheaderにactiveクラスを付与する
        if(scroll + windowHeight > distanceToInfo) {
            header.classList.add('active');
        }

        //ギャラリーセクションの取得
        const gallerySection = document.querySelector('#gallery');
        //side-btn取得
        const sideBtn = document.querySelector('#side-btn');
        //ギャラリーセクションの高さを取得する
        const distanceToGallery = gallerySection.offsetTop;
        // 下記条件が成り立つときだけheaderにactiveクラスを付与する
        if(scroll + windowHeight > distanceToGallery) {
            sideBtn.classList.add('active');
        }
        
        //メインビジュアルのアップ・クローズ
        //ビジュアルの大きさ＋スクロール量
        let sum = 1 + scroll / 50;
        //ビジュアル取得
        const visual = document.querySelector('#mainvisual');
        //ビジュアルにスクロール量を足す
        // visual.style.transform = "scale(" + sum + ")";

        //各ブロックの取得
        const boxes = this.document.querySelectorAll('.box');
        
        boxes.forEach(function(box){
            const distanceToBoxes = box.offsetTop;
            if(scroll + windowHeight > distanceToBoxes) {
                box.classList.add('active');
            }           
            });
      


    });


    
});
