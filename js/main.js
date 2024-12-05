const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('.form_inp.phone');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        console.log('ishladi');
        IMask(el, {
            mask: '+{7}(000)000-00-00',
        })
    });
}

const reviewSwp = new Swiper('.review__swp .swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".review__swp .swp_btn__next",
        prevEl: ".review__swp .swp_btn__prev",
    },
    pagination: {
        el: '.swp_pagination',
        clickable: true,
    }
})

const chooseSwp = new Swiper('.choose .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 32,
})

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((item) => {
    const header = item.querySelector('.accordion_btn');
    const content = item.querySelector('.accordion_body');

    if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    }

    header.addEventListener('click', () => {
        item.classList.toggle('active');
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
    });
});

const modalClasses = ['.application-modal', '.partner-modal'];

modalClasses.forEach(cls => {
    const modal = document.querySelector(cls);
    const modalOpen = document.querySelectorAll(`${cls}__open`);
    const modalClose = document.querySelector(`${cls} .modal__close`);
    const modalBg = document.querySelector(`${cls} .modal__bg`);

    modalOpen.forEach(el => {
        el.onclick = e => {
            document.querySelector('.partner-modal').classList.remove('active');
            e.preventDefault();
            modal.classList.add('active');
            bodyHidden();
        }
    })

    modalClose.onclick = () => {
        modal.classList.remove('active');
        bodyVisible();
    }

    modalBg.onclick = () => {
        modal.classList.remove('active');
        bodyVisible();
    }
})