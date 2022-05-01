import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.bubble.css';

export default function TextEditor() {
    
    const theme = 'bubble';
  
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
      ],
    };
  
    const placeholder = 'Write or Paste any text...';
  
    const formats = ['bold', 'italic', 'underline', 'strike'];
  
    const { quillRef } = useQuill({ theme, modules, formats, placeholder });
  
  
      return (
          <div style={{background: "white", height: 300, border: '1px solid lightgray' }}>
               <div ref={quillRef} />
          </div>
    )
  }
