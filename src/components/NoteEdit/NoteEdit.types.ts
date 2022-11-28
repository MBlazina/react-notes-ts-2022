import { NoteItemProps } from "@components/NoteItem/NoteItem.type"
import React from "react"

export type NoteEditProps = {
  note: NoteItemProps,
  close:Function,
}