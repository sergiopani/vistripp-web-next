
import { Inter } from 'next/font/google';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vistrip web',
  description: 'Web de viajes por todo el mundo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
