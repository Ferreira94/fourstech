import ServiceCard from "./ServiceCard";
import { SERVICESINFOS } from '../utils/index';

export default function Service() {
  return (
    <section id="service" className="bg-gray-900/70 w-full lg:px-20 md:px-10 px-4 relative">
      <h2 className="font-[Syncopate]">Nossos serviços</h2>
      <div className="w-full flex justify-between lg:my-6 my-4 gap-4">
        {SERVICESINFOS.map((item) => (
          <ServiceCard 
            key={item.title} 
            label={item.label}
            title={item.title} 
            description={item.description}
            info={item.info}
          />
        ))}
      </div>
    </section>
  );
}
