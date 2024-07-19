import { Poppins, Assistant } from 'next/font/google';

export const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['300', '400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    display: 'swap',
});

export const assistant = Assistant({
    subsets: ['latin', 'hebrew'],
    variable: '--font-assistant',
    weight: ['300', '400', '500', '600', '700', '800'],
    display: 'swap',
});
