import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../features/notes/noteSlice'
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function NoteForm() {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [isExpanded, setExpanded] = useState(false);


  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createNote({ title, text }))
    setText('')
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <section>
      <form className="create-note" onSubmit={onSubmit}>
        {isExpanded && (
          <input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
          />
        )}

        <textarea
          name="text"
          maxLength={"100"}
          onClick={expand}
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
         <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom> 
      </form>
    </section>
  )
}

export default NoteForm
