let hiddenBtn = document.querySelector('.collapsible__action--visible');
let showBtn = document.querySelector('.collapsible__action--hidden');
let content = document.querySelector('.collapsible__content');
let clickBtn = document.querySelector('.collapsible__button');

let isShow = true;

const animationTiming = {
    duration: 1000,
    fill: "forwards",
};

showBtn.style.display = 'none';
hiddenBtn.style.display = 'block';

clickBtn.addEventListener('click', () => {
    if (isShow) {
        showBtn.style.display = 'block';
        hiddenBtn.style.display = 'none';

        content.animate(
            [
                {opacity: '100%'},
                {opacity: '50%'},
                {opacity: '1%', display: 'none'},
            ], animationTiming
        );

        isShow = false;
    } else {
        showBtn.style.display = 'none';
        hiddenBtn.style.display = 'block';

        content.animate(
            [
                {opacity: '1%', display: 'block'},
                {opacity: '50%'},
                {opacity: '100%'}
            ], animationTiming
        );

        isShow = true;
    }
});

