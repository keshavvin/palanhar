import DeckCover from '../components/home/DeckCover';
import Hero from '../components/Hero';
import HomeProducts from '../components/home/HomeProducts';
import CategorySlider from '../components/home/CategorySlider';
import TransparentModel from '../components/home/TransparentModel';
import ModelVideo from '../components/home/ModelVideo';
import IncomeGrowth from '../components/home/IncomeGrowth';
import NaariShaktiSection from '../components/home/NaariShaktiSection';
import Leadership from '../components/Leadership';
import PublicOpinion from '../components/home/PublicOpinion';
import AppDownload from '../components/home/AppDownload';

export default function Home() {
  return (
    <>
      <DeckCover />
      <Hero />
      <HomeProducts />
      <CategorySlider />
      <TransparentModel />
      <ModelVideo />
      <IncomeGrowth />
      <NaariShaktiSection />
      <Leadership />
      <PublicOpinion />
      <AppDownload />
    </>
  );
}
