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

export function splitLinkTitle(title: string) {
  const match = title.match(/^(.*?)\s*\((.+)\)$/);
  return match ? { label: match[1], note: match[2] } : { label: title, note: undefined };
}

export function formatPeriod(start?: Date, end?: Date) {
  if (start && end) return `${formatDate(start)} – ${formatDate(end)}`;
  if (start) return `seit ${formatDate(start)}`;
  if (end) return `bis ${formatDate(end)}`;
  return undefined;
}

const COVER_RATIO = 16 / 9;
const COVER_RATIO_TOLERANCE = 0.03;
const COVER_MIN_WIDTH = 1600;

export function warnAboutCover(project: CollectionEntry<"projects">) {
  const cover = project.data.image;
  if (!cover) return;

  const ratio = cover.width / cover.height;
  const problems: string[] = [];
  if (Math.abs(ratio - COVER_RATIO) / COVER_RATIO > COVER_RATIO_TOLERANCE) {
    problems.push(`Aspect ratio ${ratio.toFixed(2)}:1 instead of 16:9`);
  }
  if (cover.width < COVER_MIN_WIDTH) {
    problems.push(
      `only ${cover.width}px wide, at least ${COVER_MIN_WIDTH}px recommended`,
    );
  }
  if (problems.length > 0) {
    console.warn(
      `[cover] ${project.id} (${cover.width}x${cover.height}): ${problems.join(", ")}`,
    );
  }
}
