import { NotesCounterStyled } from "./NotesCounter.style"
import { NotesCounterProps } from "./NotesCounter.types"


const NotesCounter = ({data, className}:NotesCounterProps) => {
  return (
    <NotesCounterStyled className={ `${className} rounded-full w-[20px] h-[20px] text-sm inline-flex justify-center items-center`}>
      {data}
    </NotesCounterStyled>
  )
}

export default NotesCounter