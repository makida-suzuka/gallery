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


        //基準となるセクションを取得(高さを取得するため)
        const infoSection = document.querySelector('#information');
        const gallerySection = document.querySelector('#gallery');
        const footer = document.querySelector('footer');


        //表示させるheader・サイドボタンを取得
        const header = this.document.querySelector('#header');
        const sideBtn = document.querySelector('#side-btn');

        //それぞれのトップの位置、galleryの高さ
        const infoTop = infoSection.offsetTop;
        const footerTop = footer.offsetTop;
        const galleryTop = gallerySection.offsetTop;
        const galleryHeight = gallerySection.offsetHeight;

        //スクロール量＋画面の高さ
        const scrollBottom = scroll + windowHeight;


        // ヘッダーの表示条件：#information ～ #footer の間のみ
        if (scrollBottom > infoTop && scroll < footerTop) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }

        // サイドボタンの表示条件：#gallery の範囲内のみ
        if (scrollBottom > galleryTop && scroll < galleryTop + galleryHeight) {
            sideBtn.classList.add('active');
            sideBtn.classList.remove('fade-out');
        } else {
            sideBtn.classList.remove('active');
            sideBtn.classList.add('fade-out');
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
        
        //ACCESSセクションの取得
        const accessSection = this.document.querySelector('#access');
        const distanceToAccess = accessSection.offsetTop;
        if(scroll + windowHeight > distanceToAccess){
            accessSection.classList.add('back');
        }


    });

});
