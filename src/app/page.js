import Image from 'next/image';
import 'styles/global.scss';
import Header from 'components/Header';
import HomeBanner from '../../components/HomeBanner';
import DestinosHome from '../../components/DestinosHome';
import Actividades from '../../components/Actividades';

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <DestinosHome />
      {/* <Actividades /> */}
    </>
  );
}
