import { Inter, Lusitana } from 'next/font/google';  // Merge import cho gọn

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: '400',  // Giữ nguyên nếu bạn muốn
    subsets: ['latin'],
    variable: '--font-lusitana',  // **Quan trọng: Thêm dòng này** để dùng CSS variable (như tutorial)
});