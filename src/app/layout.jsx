import { CartProvider } from '@/state/cart';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import WhatsAppFloatingIcon from '@/components/WhatsAppFloatingIcon';
import favicon from '@/assets/media/favicon.ico';
import appleIcon from '@/assets/media/apple-icon.png';
import content from '@/content';
import { poppins, assistant } from './fonts';
import '@/assets/css/style.scss';

export const metadata = {
  title: content.meta.pages.homePage,
  description: content.meta.pages.homePage.description,
  icons: {
    icon: favicon.src,
    apple: appleIcon.src,
  },
  'og:site_name': content.meta.pages.homePage,
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning className={`${poppins.variable} ${assistant.variable}`}>
      <body className="h-screen inline">
        <CartProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
          <WhatsAppFloatingIcon />
        </CartProvider>
      </body>
    </html>
  );
};

export default RootLayout;
