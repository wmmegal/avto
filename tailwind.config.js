import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        container: {
            center: true,
            padding: '16px',
            screens: {
                sm: '375px',
                md: '767px',
                lg: '1140px',
                xl: '1500px',
            },
        },
        colors: {
            primary: '#797979',
            black: '#000',
            white: '#FFFFFF',
        },
        extend: {
            fontSize: {
                lg: ['18px', '1.1'],
                xl: ['28px', '1.1'],
                '2xl': ['32px', '1.1'],
                '3xl': ['45px', '1.1'],
                '4xl': ['57px', '1.1'],
            },
        },
    },
    plugins: [forms, typography],
};
