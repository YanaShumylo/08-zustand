'use client';
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "../../../../lib/api";
import Modal from "../../../../components/Modal/Modal";
import css from "../../../../components/NotePreview/NotePreview.module.css";

type Props = {
  id: string;
 };

export default function NotePreview({ id }: Props) {
const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const { data: note, isLoading, isError } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) {
    return (
      <Modal onClose={handleClose}>
        <p className={css.loading}>Loading...</p>
      </Modal>
    );
  }

  if (isError || !note) {
    return (
      <Modal onClose={handleClose}>
        <p className={css.error}>Note not found.</p>
      </Modal>
    );
  }

  return (
    <Modal onClose={handleClose}>
      <div className={css.container}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <button onClick={handleClose} className={css.backBtn}>Close</button>
        </div>
        <p className={css.content}>{note.content}</p>
        <div className={css.meta}>
          <p><strong>Tag:</strong> {note.tag || '—'}</p>
          <p><strong>Created at:</strong> {new Date(note.createdAt).toLocaleString()}</p>
        </div>
      </div>
    </Modal>
  );
}