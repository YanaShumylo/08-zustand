
import css from "../../../../components/NotesPage/NotesPage.module.css";
import { fetchNotes } from "../../../../lib/api";
import NotesClient from "./Notes.client";


interface NoteDetailsProps {
  params:Promise< { slug?: string[] }>;
}

export default async function NotesPage({ params }: NoteDetailsProps) {
  const { slug } = await params;
  const tag = slug?.[0].toLowerCase() === "all" ? undefined : slug?.[0];

  const initialData = await fetchNotes({
    tag,
    search: "",
    page: 1,
    perPage: 12,
  });
  return (
    <main className={css.appWrapper}>
      <NotesClient initialData={initialData} tag={tag}/>
    </main>
  );
}
