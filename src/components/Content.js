import Categories from "./Categories";
import { Course } from "./Course";
import ImageCurso from "@/assets/1.png";

export default function Content() {
  return (
    <div className="bg-[#06021b] text-white grid sm:gap-20 grid-cols-12 pb-10">
      <div className="hidden sm:flex col-span-2" />
      <div className="col-span-12 sm:col-span-5 gap-10 sm:gap-20 flex flex-col items-start mx-4 mt-10">
        <Course title="Do Bug ao Bounty" image={ImageCurso} />
        <Course
          title="Curso Avançado de Injeção Eletrônica de Motocicletas"
          image={ImageCurso}
        />
        <Course title="Analista Segurança Da Informação" image={ImageCurso} />
      </div>
      <div className="hidden sm:flex col-span-3 mt-10">
        <Categories />
      </div>
      <div className="hidden sm:flex col-span-2" />
    </div>
  );
}
