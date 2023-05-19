import { useState } from "react";
import Image from "next/image";
import {
  CloudArrowDown,
  FlowArrow,
  FolderNotch,
  Heart,
  Plus,
} from "phosphor-react";

export function Course({ image, title }) {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="card card-compact w-full shadow-2xl ">
      <figure className="relative">
        <Image
          quality={100}
          className="rounded-t-2xl shadow-lg w-full object-fill"
          alt="Imagem do curso Do Bug ao Bounty"
          src={image}
        />
        <Heart
          size={48}
          onClick={handleLike}
          className="text-red-500 absolute top-3 right-2 "
          weight={like ? "fill" : "bold"}
          height={30}
        />
        <button className="badge badge-primary p-3  absolute bottom-3 right-2 shadow-md shadow-black flex gap-1 active:scale-95">
          <FolderNotch size={18} weight="bold" />
          <p className="font-bold">Hacker</p>
        </button>
      </figure>
      <div className="card-body text-white bg-[#191732] rounded-b-xl">
        <h2 className="card-title text-2xl">
          {title} <div className="badge badge-success">NEW</div>
        </h2>
        <p className="font-normal mb-4 text-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="card-actions justify-end">
          <button className=" w-full btn border-0 focus:outline-white bg-[#2beff2] hover:bg-[#2beff2] active:bg-[#2beff2] hover:shadow-lg hover:shadow-[#2beff2]/40 text-black flex  gap-2">
            Detalhes
            <CloudArrowDown
              className="group-hover:animate-bounce group-hover:mt-1"
              size={20}
              weight="bold"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

// <div className="cursor-pointer group transition-all grid grid-cols-12 rounded-xl shadow-md hover:ring-2 hover:ring-[#2beff2]/40 hover:shadow-[#2beff2]/30 bg-[#191732]">
//   <div className="col-span-12 m-0 relative">
//     <Image
//       quality={100}
//       className="rounded-t-2xl shadow-lg w-full object-fill"
//       alt="Imagem do curso Do Bug ao Bounty"
//       // width={100}
//       // height={100}
//       src={image}
//     />
//     <Heart
//       size={48}
//       onClick={handleLike}
//       className="text-red-500 absolute top-3 right-2 "
//       weight={like ? "fill" : "bold"}
//       height={30}
//     />
//     <button className="badge badge-primary p-3  absolute bottom-3 right-2 shadow-md shadow-black flex gap-1 active:scale-95">
//       <FolderNotch size={18} weight="bold" />
//       <p className="font-bold">Hacker</p>
//     </button>
//   </div>
//   <div className="col-span-12 p-5 flex  flex-col items-start justify-between gap-5">
//     <h1 className=" w-fit text-left font-bold m-0 text-lg sm:text-3xl leading-tight	font-Poppins">
//       {title}
//     </h1>
//     Descrição
//     <p className="text-md leading-tight text font-Poppins w-11/12">
//       Lorem Ipsum is simply dummy text of the printing and typesetting
//       industry. Lorem Ipsum has been the industry's standard dummy text ever
//       since the 1500s, when an unknown printer took a galley of type and
//       scrambled it to make a type specimen book.
//     </p>
//     <div className="w-full flex justify-between">
//       <div className="flex items-center justify-center gap-2">
//         <FlowArrow size={15} weight="bold" />
//         <p>Hacker</p>
//       </div>
//       <button className="transition ease-in-out btn btn-lg w-full bg-[#2beff2] border-0 uppercase capitalize py-0 flex items-center justify-center gap-2 btn-sm hover:bg-[#2beff2] hover:shadow-lg hover:shadow-[#2beff2]/40 text-black ">
//         <CloudArrowDown
//           className="group-hover:animate-bounce group-hover:mt-1"
//           size={20}
//           weight="bold"
//         />
//         <p className="font-bold font-Poppins">Detalhes</p>
//       </button>
//     </div>
//   </div>
// </div>
