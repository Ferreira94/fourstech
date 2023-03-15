interface IServiceCardProps {
  label: string;
  title: string;
  description: string;
  info: string;
}

export default function ServiceCard({
  label, 
  title, 
  description, 
  info
}: IServiceCardProps) {
  return (
    <div className="font-[Syncopate] border border-blue-500 rounded-tl-xl bg-transparent">
      <strong className="text-xs font-normal leading-8 m-4">{label}</strong>
      <div className="h-[1px] w-full bg-blue-500" />
      <div className="p-4">
        <h2 className="text-lg my-4 font-semibold">{title}</h2>
        <p className="text-white text-xs font-semibold mb-4">{description}</p>
        <p className="text-sm">{info}</p>
      </div>
    </div>
  );
}
