import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { GamerBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';

import logoImg from './assets/logo.svg';
import './styles/main.css';
import axios from 'axios';

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(res => setGames(res.data));
  }, []);

  return (
    <section className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo App" />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <section className='grid grid-cols-6 gap-6 mt-4'>
        {games.map((game) => (
          <GamerBanner
            key={game.id}
            adsCount={game._count.ads}
            bannerUrl={game.bannerUrl}
            title={game.title}
          />
        ))}
      </section>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </section>
  )
}

export default App
