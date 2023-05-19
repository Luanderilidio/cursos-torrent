import { Folders, FolderSimple, FolderOpen } from "phosphor-react";
import { useState } from "react";
import CategorieCourse from "./CategorieCourse";

const data = [
  {
    course: "Programação",
    amount: 3,
  },
  {
    course: "Desing",
    amount: 4,
  },
  {
    course: "Musica",
    amount: 13,
  },
  {
    course: "Desenho",
    amount: 9,
  },
  {
    course: "Marketing",
    amount: 33,
  },
  {
    course: "Programação",
    amount: 3,
  },
  {
    course: "Desing",
    amount: 4,
  },
  {
    course: "Musica",
    amount: 13,
  },
  {
    course: "Desenho",
    amount: 9,
  },
  {
    course: "Marketing",
    amount: 33,
  },
];

export default function Categories() {
  return (
    <div className="card w-full h-fit text-primary-content bg-[#191732]">
      <div className="card-body">
        <h1 className="text-lg font-semibold flex items-center gap-3">
          <Folders size={25} weight="bold" />
          Categorias
        </h1>
        {data.map((item, index) => (
          <CategorieCourse course={item.course} amount={item.amount} />
        ))}
      </div>
    </div>
  );
}
