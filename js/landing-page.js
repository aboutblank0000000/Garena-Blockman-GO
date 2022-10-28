let Light = document.getElementById('Light');
        let Forest_behind = document.getElementById('Forest_behind');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let Forest_front = document.getElementById('Forest_front');
        let header = document.querySelector('header');

        window.addEventListener('scroll',function(){
            let value = window.scrollY;
            Light.style.left = value * 0.25 + 'px';
            Forest_behind.style.top = value * 0.5 + 'px';
            Forest_front.style.top = value * 0 + 'px';
            text.style.marginTop = value * 1.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
            header.style.top = value * 0.5 + 'px';});