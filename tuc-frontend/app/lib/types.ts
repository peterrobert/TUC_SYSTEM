export type Entry = {
  id: string
  title: string
  description: string
  votes: number
}

export type Top10List = {
  id: number
  title: string
  description: string
  mode: "Voting" | "Ranking"
  status: "Live" | "Draft" | "Closed"
  entriesCount: number
  voters: number
  creator: {
    name: string
    role: string
    avatar: string
  }
}

export type ListCardProps = {
  statusTag: string; // e.g., "Voting"
  statusTagIcon?: string; // optional icon class for the tag
  statusTagBg?: string; // Tailwind bg class, e.g., "bg-mode-voting"
  statusTagText?: string; // Tailwind text class, e.g., "text-mode-votingText"
  liveStatus?: string; // e.g., "Live"
  liveStatusBg?: string; // Tailwind bg class for live status, e.g., "bg-green-50"
  liveStatusText?: string; // Tailwind text class for live status, e.g., "text-green-700"
  title: string;
  description: string;
  entries: number;
  voters: number;
  creatorName: string;
  creatorRole: string;
  creatorAvatar: string;
  onClick?: () => void;
  bookmarked?: boolean;
};
