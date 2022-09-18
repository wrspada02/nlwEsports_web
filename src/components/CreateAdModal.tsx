import * as Dialog from "@radix-ui/react-dialog";
import * as Checbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select'; //challenge to use this select instead native html
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from "phosphor-react";
import { Input } from "./Form/Input";
import React, { useState, useEffect } from "react";
import { Game } from "../App";
import axios from "axios";

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  function findGameIdIndex(gameName : string) {
    const index = games.findIndex((game) => game.title.includes(gameName));

    return index;
  }

  async function handleCreateAd(event: React.FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
      const index = findGameIdIndex(data.game as string);
      await axios.post(`http://localhost:3333/games/${games[index].id}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
      });

      alert('Anuncio criado com sucesso');
    } catch (e) {
      console.log(e);
      alert('Erro ao criar o anuncio');
    }
  }

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(res => setGames(res.data));
  }, []);
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg'>
        <Dialog.Title className='text-3xl text-white font-black'>Publique um anúncio</Dialog.Title>

        <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="game" className='font-semibold'>Qual o game?</label>
            <select
              name="game"
              id='game'
              className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none'
              defaultValue={''}
            >
              <option disabled value={''}>Selecione o game que deseja jogar</option>
              {games.map((game) => <option key={game.id}>{game.title}</option>)}
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input name="name" id='name' placeholder='Como te chamam no game' />
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input name="yearsPlaying" id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="discord">Qual seu Discord?</label>
              <Input name="discord" id='discord' placeholder='Usuario#0000' />
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="weekDays">Quando costuma jogar?</label>
              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  title='Domingo'
                  className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  title='Segunda'
                  className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  title='Terca'
                  className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  title='Quarta'
                  className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  title='Quinta'
                  className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  title='Sexta'
                  className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  title='Sabado'
                  className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <label htmlFor="hourStart">Qual horário do dia?</label>
              <div className='grid grid-cols-2 gap-2'>
                <Input name="hourStart" id='hourStart' type="time" placeholder='De' />
                <Input name="hourEnd" id='hourEnd' type="time" placeholder='Até' />
              </div>
            </div>
          </div>
          <label className='mt-2 flex items-center gap-2 text-sm'>
            <Checbox.Root
              className="w-6 h-6 p-1 rounded bg-zinc-900"
              onCheckedChange={(checked) => {
                if (checked) {
                  setUseVoiceChannel(true);
                } else {
                  setUseVoiceChannel(false);
                }
              }}
            >
              <Checbox.Indicator>
                <Check className="h-4 w-4 text-emerald-400" />
              </Checbox.Indicator>
            </Checbox.Root>
            Costumo me conectar ao chat de voz
          </label>
          <footer className='mt-4 flex justify-end gap-4'>
            <Dialog.Close
              type='button'
              className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
            >Cancelar</Dialog.Close>
            <button
              type='submit'
              className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}