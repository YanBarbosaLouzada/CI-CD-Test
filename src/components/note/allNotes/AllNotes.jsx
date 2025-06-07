import React, { useContext } from 'react'
import { NoteContext } from '../../../context/notesContext/NotesContext'
import NoteCard from '../noteCard/NoteCard'
import './AllNotes.css'

function AllNotes() {
    const { notes } = useContext(NoteContext);
    return (
        <div className="AllNotes">
            {notes.map((n) => (
                <NoteCard key={n.id} {...n} />
            ))}
        </div>
    );
}

export default AllNotes;
  
