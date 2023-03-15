import Image from 'next/image';

import aboutImage from '@/assets/about-image.png';

export default function About() {
  return (
    <section
      id="about"
      className="w-screen max-w-full bg-backgroundAbout bg-no-repeat relative bg-cover flex justify-center"
    >
      <div className="flex lg:flex-row flex-col lg:px-20 md:px-10 px-4 items-center max-w-[1440px]">
        <div className="lg:w-[50%] flex flex-col gap-4 leading-6 max-w-[400px]">
          <h2 className="font-[Syncopate]">Quem somos</h2>

          <p className="text-lg">
            Somos uma agência de marketing digital e tecnologia especializada em
            conversões, é isso que nos move. O segredo? Nós amamos o que
            fazemos. O resultado? Não poderia ser diferente.
          </p>

          <p className="text-lg">
            Todos os nossos projetos são conduzidos com muito profissionalismo,
            com as melhores estratégias e tecnologias do mercado, focando sempre
            no resultado, pois acreditamos que qualidade é tudo.
          </p>
        </div>

        <Image className="h-[500px] w-[400]" src={aboutImage} alt="" />
      </div>
    </section>
  );
}
