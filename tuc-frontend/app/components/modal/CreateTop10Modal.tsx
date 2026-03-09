"use client";

import { useCreateTop10Modal } from "@/app/context/CreateTop10ModalContext";
import { Button, Dialog, DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CreateTop10Modal() {
  const { isOpen, close } = useCreateTop10Modal();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState("brainstorm");
  const [bannerStyle, setBannerStyle] = useState("solid");
  const [seedInput, setSeedInput] = useState("");
  const [seeds, setSeeds] = useState<string[]>([]);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const addSeedEntry = () => {
    if (!seedInput.trim()) return;
    if (seeds.length >= 10) return;

    setSeeds([...seeds, seedInput]);
    setSeedInput("");
  };

  const removeSeed = (index: number) => {
    setSeeds(seeds.filter((_, i) => i !== index));
  };

  const selectMode = (newMode: string) => {
    setMode(newMode);
  };

  const updateBannerStyle = (style: string) => {
    setBannerStyle(style);
  };

  const toggleAdvanced = () => {
    setAdvancedOpen(!advancedOpen);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bannerStyles: any = {
    solid: "bg-purple-50",
    light: "bg-purple-50",
    white: "bg-white",
    gradient: "bg-gradient-to-r from-purple-400 to-purple-600",
  };

  return (
    <BootstrapDialog open={isOpen} onClose={close} maxWidth="lg" fullWidth>
      <main className="grow w-full max-w-225 mx-auto px-4 sm:px-6 py-10 pb-36 animate-fade-in">
        {/* PAGE HEADER */}
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <header
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 gap-4"
            id="page-header"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Create a Top10
              </h1>
              <p className="mt-2 text-gray-500 text-lg">
                Define your structured idea system.
              </p>
            </div>
            <Button variant="contained" color="secondary" onClick={close}>
              Cancel
            </Button>
          </header>
        </DialogTitle>

        {/* FORM CONTAINER */}
        <div className="space-y-10">
          {/* Banner Builder */}
          <section className="bg-surface rounded-xl shadow-card border border-gray-200 overflow-hidden">
            <div
              className={`p-10 border-b border-gray-200 ${bannerStyles[bannerStyle]}`}
            >
              <div className="max-w-3xl w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/60 text-purple-700 mb-5">
                  Brainstorm Mode
                </div>

                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                  {title || "Untitled Top10"}
                </h2>

                <p className="text-gray-600 text-lg">
                  {description ||
                    "A brief description of your list will appear here."}
                </p>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Top10 Title
                </label>

                <input
                  type="text"
                  className="w-full rounded-lg border-gray-300 shadow-input px-4 py-3"
                  placeholder="Best SaaS Marketing Strategies"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Description */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Short Description
                  </label>

                  <span className="text-xs text-gray-400">
                    {description.length}/160
                  </span>
                </div>

                <textarea
                  maxLength={160}
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-input px-4 py-3"
                  placeholder="Describe the purpose..."
                />
              </div>

              {/* Cover Style */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Cover Style
                </label>

                <div className="grid grid-cols-4 gap-4">
                  <button
                    type="button"
                    className="h-14 rounded-xl bg-purple-600"
                    onClick={() => updateBannerStyle("solid")}
                  />

                  <button
                    type="button"
                    className="h-14 rounded-xl bg-purple-50 border"
                    onClick={() => updateBannerStyle("light")}
                  />

                  <button
                    type="button"
                    className="h-14 rounded-xl bg-white border"
                    onClick={() => updateBannerStyle("white")}
                  />

                  <button
                    type="button"
                    className="h-14 rounded-xl bg-linear-to-r from-purple-400 to-purple-600"
                    onClick={() => updateBannerStyle("gradient")}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Mode Selection */}
          <section className="bg-surface rounded-xl shadow-card border border-gray-200 p-8">
            <h3 className="text-xl font-bold mb-6">Select Mode</h3>

            <div className="grid md:grid-cols-3 gap-5">
              {["brainstorm", "voting", "contest"].map((m) => (
                <div
                  key={m}
                  onClick={() => selectMode(m)}
                  className={`cursor-pointer rounded-xl border-2 p-5 transition ${
                    mode === m
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200"
                  }`}
                >
                  <h4 className="font-bold capitalize">{m}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Seed Entries */}
          <section className="bg-surface rounded-xl shadow-card border border-gray-200 p-8">
            <div className="flex justify-between mb-6">
              <h3 className="text-xl font-bold">Seed Entries</h3>

              <span className="text-xs text-gray-500">{seeds.length}/10</span>
            </div>

            <div className="flex gap-3 mb-6">
              <input
                value={seedInput}
                onChange={(e) => setSeedInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addSeedEntry()}
                className="flex-1 rounded-xl border-gray-300 px-4 py-3"
                placeholder="Enter idea..."
              />

              <button
                onClick={addSeedEntry}
                className="bg-gray-900 text-white px-6 rounded-xl"
              >
                Add
              </button>
            </div>

            {seeds.length === 0 && (
              <div className="text-center text-gray-400">
                No seed entries yet
              </div>
            )}

            <div className="space-y-2">
              {seeds.map((seed, index) => (
                <div
                  key={index}
                  className="flex justify-between border rounded-lg p-3 bg-white"
                >
                  <span>{seed}</span>

                  <button
                    onClick={() => removeSeed(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Advanced Settings */}
          <section className="bg-surface rounded-xl shadow-card border border-gray-200">
            <button
              onClick={toggleAdvanced}
              className="w-full flex justify-between p-6"
            >
              <span className="font-bold">Advanced Settings</span>

              <span>{advancedOpen ? "▲" : "▼"}</span>
            </button>

            {advancedOpen && (
              <div className="p-8 border-t">
                <p className="text-sm text-gray-500">
                  Advanced configuration options go here.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </BootstrapDialog>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ModeCard({ selected, title, icon, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl border-2 p-5 ${
        selected ? "border-purple-500 bg-purple-50" : "border-gray-200"
      }`}
    >
      <div className="flex justify-between mb-3">
        <i className={`fa-solid ${icon}`} />
        {selected && <i className="fa-solid fa-check text-xs" />}
      </div>

      <h4 className="font-bold">{title}</h4>
    </div>
  );
}
