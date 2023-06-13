import Image from 'next/image';
import 'styles/global.scss';
import Header from 'components/Header';
import HomeBanner from '../../components/HomeBanner';
import DestinosHome from '../../components/DestinosHome';
import Actividades from '../../components/Actividades';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>

      <HomeBanner />
      <DestinosHome />
      <Actividades />

    </>
  );
}
