import { NoteItemProps } from "@components/NoteItem/NoteItem.type"

export type NoteItemModalProps = {
  note: NoteItemProps,
  open: boolean,
  closeModal: React.MouseEventHandler<HTMLButtonElement>,
}