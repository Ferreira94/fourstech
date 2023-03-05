import { RocketLaunch } from 'phosphor-react';

export default function Introduction() {
  return (
    <section className="lg:px-20 md:px-10 px-4 w-full max-w-[1440px] h-screen flex flex-col items-center gap-4 mt-10 relative">
      <h2 className="font-[Syncopate] lg:text-[2.5rem] md:text-3xl text-lg text-center">
        EXPLORE <br /> E EXPANDA SUAS FRONTEIRAS
      </h2>
      <p className="font-[Syncopate] text-gray-100 text-center lg:text-lg md:text-sm text-xs">
        Venha fazer parte do futuro, traga sua empresa
        <br /> para o mundo digital
      </p>
      <button className="font-bold cursor-pointer font-[Syncopate] md:px-[0.5rem] md:py-[0.375rem] px-[0.375rem] py-[0.25rem] border border-blue-500 rounded-tl-xl bg-transparent hover:opacity-70 flex gap-2 items-center">
        <RocketLaunch />
        <strong className="lg:text-sm text-xs">Confira nossos serviços</strong>
      </button>
    </section>
  );
}
