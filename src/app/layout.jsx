import Header from '@/components/Header';
import Footer from '@/components/Footer'
import favicon from '@/assets/media/favicon.ico';
import '@/assets/css/style.scss';
import content from '@/content';

export const metadata = {
  title: content.name,
  description: content.niche,
  icons: {
    icon: favicon.src,
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="he" suppressHydrationWarning>
      <body className="h-screen flex flex-col">
        <Header />
        {/* <main className="h-full">{children}</main> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
