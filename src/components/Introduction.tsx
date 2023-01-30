import { RocketLaunch } from 'phosphor-react';

export default function Introduction() {
  return (
    <section className="lg:px-20 md:px-10 px-4 w-screen h-screen flex flex-col items-center gap-4 lg:mt-28 md:mt-20 sm:mt-16 mt-10">
      <h2 className="font-[Syncopate] font-bold lg:text-[2.5rem] md:text-3xl text-lg text-center">
        EXPLORE <br /> E EXPANDA SUAS FRONTEIRAS
      </h2>
      <p className="text-center lg:text-lg md:text-sm text-xs">
        Venha fazer parte do futuro, traga sua empresa
        <br /> para o mundo digital
      </p>
      <button className="font-bold cursor-pointer font-[Syncopate] md:px-[0.5rem] md:py-[0.375rem] px-[0.375rem] py-[0.25rem] border border-blue-500 rounded-tl-xl bg-transparent hover:opacity-70 flex gap-2 items-center">
        <RocketLaunch /> 
        <strong className='lg:text-sm text-xs'>Confira nossos serviços</strong>
      </button>
    </section>
  );
}
