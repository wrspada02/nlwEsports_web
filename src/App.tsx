import './styles/main.css';
import { MagnifyingGlassPlus } from 'phosphor-react';

import logoImg from './assets/logo.svg';

function App() {
  return (
    <section className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo App" />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span>
        está aqui.</h1>

      <section className='grid grid-cols-6 gap-6 mt-4'>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.svg" alt="" />

          <article className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </article>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.svg" alt="" />

          <article className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </article>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.svg" alt="" />

          <article className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </article>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.svg" alt="" />

          <article className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </article>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.svg" alt="" />

          <article className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </article>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.svg" alt="" />

          <article className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </article>
        </a>
      </section>

      <aside className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8 '>
        <article className='bg-[#2A2634] px-8 py-6 self-stretch rounded-b-lg flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='flex items-center gap-3 py-3 px-4 bg-violet-600 text-white rounded'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </article>
      </aside>
    </section>
  )
}

export default App
