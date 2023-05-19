import { useState } from "react";
import { FolderSimple, FolderOpen } from "phosphor-react";

export default function CategorieCourse({ course, amount }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <button
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
      className="transition ease-in-out w-full mt-2 group flex items-center justify-between hover:scale-105  hover:text-[#2beff2]  pl-2"
    >
      <p className="w-fit text-sm font-semibold flex items-center gap-3">
        {open ? (
          <FolderOpen size={20} weight="bold" />
        ) : (
          <FolderSimple size={20} weight="bold" />
        )}
        {course}
      </p>
      <p className="w-fit text-right text-sm font-semibold">{amount}</p>
    </button>
  );
}
