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
