"use client";

import Image from "next/image";
import React from "react";
// ---
import { ListCardProps } from "../../lib/types";

export const ListCard: React.FC<ListCardProps> = ({
  statusTag,
  statusTagIcon = "fa-solid fa-check-to-slot",
  statusTagBg = "bg-mode-voting",
  statusTagText = "text-mode-votingText",
  liveStatus = "Live",
  liveStatusBg = "bg-green-50",
  liveStatusText = "text-green-700",
  title,
  description,
  entries,
  voters,
  creatorName,
  creatorRole,
  creatorAvatar,
  onClick,
  bookmarked = false,
}) => {
  return (
    <article
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 shadow-soft hover:shadow-soft-hover hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group cursor-pointer relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="p-6 flex-1">
        {/* Top tags + bookmark */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-2">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${statusTagBg} ${statusTagText} border border-purple-100`}
            >
              {statusTagIcon && (
                <i className={`${statusTagIcon} mr-1.5 text-[10px]`}></i>
              )}
              {statusTag}
            </span>
            {liveStatus && (
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${liveStatusBg} ${liveStatusText} border border-green-100`}
              >
                {liveStatus}
              </span>
            )}
          </div>
          <button className="text-gray-300 hover:text-purple-600 transition-colors">
            <i
              className={`${bookmarked ? "fa-solid" : "fa-regular"} fa-bookmark text-lg`}
            ></i>
          </button>
        </div>

        {/* Title & description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-6 text-xs text-gray-500 font-medium mb-2">
          <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
            <i className="fa-solid fa-list-ol text-gray-400"></i>
            <span>{entries} Entries</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
            <i className="fa-solid fa-users text-gray-400"></i>
            <span>{voters} Voters</span>
          </div>
        </div>
      </div>

      {/* Creator footer */}
      <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={creatorAvatar}
            alt={creatorName}
            width={32}
            height={32}
            className="rounded-full border border-gray-200"
          />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-700">
              {creatorName}
            </span>
            <span className="text-[10px] text-gray-400">{creatorRole}</span>
          </div>
        </div>
        <div className="text-purple-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          View List <i className="fa-solid fa-arrow-right text-xs"></i>
        </div>
      </div>
    </article>
  );
};
