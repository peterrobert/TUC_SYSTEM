"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type CreateTop10ModalContextType = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const CreateTop10ModalContext =
  createContext<CreateTop10ModalContextType | null>(null);

export function CreateTop10ModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <CreateTop10ModalContext.Provider value={{ open, close, isOpen }}>
      {children}
    </CreateTop10ModalContext.Provider>
  );
}

export function useCreateTop10Modal() {
  const context = useContext(CreateTop10ModalContext);

  if (!context) {
    throw new Error(
      "useCreateTop10Modal must be used within CreateTop10ModalProvider",
    );
  }

  return context;
}
