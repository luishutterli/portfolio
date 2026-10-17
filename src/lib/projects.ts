import { type CollectionEntry, getCollection } from "astro:content";

const STATE_RANK: Record<CollectionEntry<"projects">["data"]["state"], number> = {
  Fertig: 0,
  "In Arbeit": 1,
};

export async function getSortedProjects() {
  const projects = await getCollection("projects");

  return [...projects].sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    const stateDiff = STATE_RANK[a.data.state] - STATE_RANK[b.data.state];
    if (stateDiff !== 0) return stateDiff;

    const aDate = a.data.startDate?.getTime() ?? 0;
    const bDate = b.data.startDate?.getTime() ?? 0;
    return bDate - aDate;
  });
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("de-CH", { timeZone: "UTC" });
}
