import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return(
    <aside className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8 '>
    <article className='bg-[#2A2634] px-8 py-6 self-stretch rounded-b-lg flex justify-between items-center'>
      <div>
        <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
        <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
      </div>
      <Dialog.Trigger className='flex items-center gap-3 py-3 px-4 bg-violet-600 text-white rounded'>
        <MagnifyingGlassPlus size={24}/>
        Publicar anúncio
      </Dialog.Trigger>
    </article>
  </aside>
  );
}