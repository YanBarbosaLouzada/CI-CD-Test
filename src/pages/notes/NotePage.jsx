import React from 'react'
import { NoteProvider } from '../../context/notesContext/NotesContext'
import FormNote from '../../components/note/formNote/FormNote';
import AllNotes from '../../components/note/allNotes/AllNotes';
import './NotePage.css';

function NotePage() {
    return (
        <NoteProvider>
            <div className='notesPageContainer'>
                <div className='a'><FormNote /></div>{/* Componente para adicionar uma nova nota */}
                <div className='b'><AllNotes /></div>{/* Componente para listar todas as notas */}
                 
            </div>
        </NoteProvider>

    );
}

export default NotePage;
