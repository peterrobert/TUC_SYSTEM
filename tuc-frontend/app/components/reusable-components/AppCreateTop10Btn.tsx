"use client";
import { useCreateTop10Modal } from "@/app/context/CreateTop10ModalContext";

const AppCreateTop10Btn = () => {
  const { open } = useCreateTop10Modal();
  return (
    <button
      onClick={open}
      className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-md shadow-purple-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm flex items-center gap-2"
    >
      <i className="fa-solid fa-plus"></i>
      Create Top10
    </button>
  );
};

export default AppCreateTop10Btn;
