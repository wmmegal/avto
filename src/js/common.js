import 'virtual:svg-icons-register';
import '../css/tailwind.css';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]');

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-menu');

    if (btn == null) {
        return;
    }

    btn.classList.toggle('active');

    const menu = btn.nextElementSibling;

    menu.classList.toggle('open');
});

document.addEventListener('change', (e) => {
    if (!e.target.closest('[name=rule]')) {
        return;
    }

    const checkbox = e.target.closest('[name=rule]'),
        form = checkbox.closest('form'),
        btn = form.querySelector('[type=submit]');

    btn.disabled = !checkbox.checked;
});

document.addEventListener('click', (e) => {
    const question = e.target.closest('.faq-question');

    if (question == null) {
        return;
    }

    const faq = question.closest('.faq'),
        arr = question.querySelector('.icon-angle-right');

    faq.classList.toggle('open');
});
