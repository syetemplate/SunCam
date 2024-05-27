import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import favicon from '@/assets/media/favicon.ico';
import '@/assets/css/style.scss';
import content from '@/content';

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
  maximumScale: 1.0,
  userScalable: 'no',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="he" suppressHydrationWarning>
      <body className="h-screen inline">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
