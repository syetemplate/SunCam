import { CartProvider } from '@/state/cart';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import WhatsAppFloatingIcon from '@/components/WhatsAppFloatingIcon';
import favicon from '@/assets/media/favicon.ico';
import content from '@/content';
import { poppins, assistant } from './fonts';
import '@/assets/css/style.scss';

export const metadata = {
  title: content.meta.title,
  description: content.meta.description,
  icons: {
    icon: favicon.src,
  },
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
