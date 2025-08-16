// 'use client';

// import { useRouter } from "next/navigation";
// import Modal from "../../../../components/Modal/Modal";
// import NotePreview from "./NotePreview.client";
// import { useQuery } from "@tanstack/react-query";
// import { fetchNoteById } from "../../../../lib/api";

// type Props = {
//   id: string;
//  };

// export default function NoteClient({ id}: Props) {
//   const router = useRouter();

// const { data: note, isLoading, isError } = useQuery({
//     queryKey: ['note', id],
//     queryFn: () => fetchNoteById(id),
// });
  
//   const handleClose = () => {
//     router.back();
//   };
// if (isLoading) {
//     return (
//       <Modal onClose={handleClose}>
//         <p>Loading...</p>
//       </Modal>
//     );
//   }

// if (isError || !note) {
//     return (
//       <Modal onClose={handleClose}>
//         <p>Note not found.</p>
//       </Modal>
//     );
//   }
//   return (
//     <Modal onClose={handleClose}>
//       <NotePreview note={note} onClose={handleClose}  />
//     </Modal>
//   );
// }