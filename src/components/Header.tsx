import logoImg from '@/assets/logo.svg';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="md:py-5 py-2 lg:px-20 md:px-10 px-4 w-screen flex justify-between items-center absolute">
      <Image src={logoImg} alt="" className='md:w-[120px] w-[90px]' />

      <div className="flex items-center text-sm font-bold gap-8 font-[Syncopate]">
        <nav className="gap-8 md:flex hidden">
          <a className="hover:text-blue-500 cursor-pointer">Sobre</a>
          <a className="hover:text-blue-500 cursor-pointer">Serviços</a>
          <a className="hover:text-blue-500 cursor-pointer">Projetos</a>
        </nav>
        <button className="font-bold cursor-pointer md:text-sm text-xs font-[Syncopate] md:px-[0.5rem] md:py-[0.375rem] px-[0.375rem] py-[0.25rem] border border-blue-500 rounded-tl-xl bg-transparent hover:opacity-70">
          Contato
        </button>
      </div>
    </header>
  );
}
