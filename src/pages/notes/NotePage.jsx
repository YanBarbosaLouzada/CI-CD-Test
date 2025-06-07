import React from 'react'
import { NoteProvider } from '../../context/notesContext/NotesContext'
import FormNote from '../../components/note/formNote/FormNote';
import AllNotes from '../../components/note/allNotes/AllNotes';
import './NotePage.css';

function NotePage() {
    return (
        <NoteProvider>
            <div className='notesPageContainer'>
                <FormNote /> {/* Componente para adicionar uma nova nota */}
                <AllNotes /> {/* Componente para listar todas as notas */}
            </div>
        </NoteProvider>

    );
}

export default NotePage;
