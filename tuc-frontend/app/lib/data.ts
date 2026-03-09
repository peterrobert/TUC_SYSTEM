import { Top10List } from "./types";

export const tucLists: Top10List[] = [
  {
    id: 1,
    title: "TUC's Top10 Global Goals",
    description:
      "A collaborative ranking of the most important goals to advance sustainability, equity, and opportunity worldwide.",
    mode: "Voting",
    status: "Live",
    entriesCount: 10,
    voters: 148,
    creator: {
      name: "TUC",
      role: "Organization",
      avatar: "/images/tuc-avatar.png",
    },
  },
 {
  id: 2,
  title: "TUC Mission Statements Top10",
  description:
    "Choose your 3 favorite mission statements in order from 1-3 and add any additional ones that you think should be considered. Each entry can also be remixed.",
  mode: "Voting",
  status: "Live",
  entriesCount: 10,
  voters: 0,
  creator: {
    name: "TUC",
    role: "Organization",
    avatar: "/images/tuc-avatar.png",
  },
}
]