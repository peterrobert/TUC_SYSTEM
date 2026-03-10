"use client";
import { useRouter } from "next/navigation";
import { ListCard } from "../components/reusable-components/ListCard";
import { Top10List } from "../lib/types";

const ListGridSection = (props: Top10List) => {
  const router = useRouter();
  const { title, description, mode, entriesCount, voters, creator } = props;
  return (
    <ListCard
      statusTag={mode}
      title={title}
      description={description}
      entries={entriesCount}
      voters={voters}
      creatorName={creator.name}
      creatorRole="Company Profile"
      creatorAvatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
      onClick={() => router.push(`/lists/${props.id}`)}
      bookmarked
    />
  );
};

export default ListGridSection;
