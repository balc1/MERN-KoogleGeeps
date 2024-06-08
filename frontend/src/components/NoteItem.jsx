import { useDispatch } from 'react-redux'
import { deleteNote } from '../features/notes/noteSlice'
import DeleteIcon from "@mui/icons-material/Delete";

function NoteItem({ note }) {
  const dispatch = useDispatch()

  const Zaman = new Date(note.createdAt).toLocaleString('en-US')

  const Zaman2 = Zaman.split(", ")

  return (
    <div className='note'>
      <div className='date'>{Zaman2[0]}</div>
      <h1>{note.title}</h1>
      <h3>{note.text}</h3>
      <button onClick={() => dispatch(deleteNote(note._id))} className='close'>
        <DeleteIcon />
      </button>
    </div>
  )
}

export default NoteItem
