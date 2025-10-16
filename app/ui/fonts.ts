import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({
    weight: '400',
    subsets: ['latin'],
})
const inter = Inter({ subsets: ['latin'] });
export { lusitana, inter };