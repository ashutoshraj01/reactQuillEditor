import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.bubble.css'

export default function Home() {
    
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
    <Container>
  <Row>
    <Col>
        <header>Editor</header>
    </Col>
  </Row>
  <Row>
    <Col>
        <div style={{ width: 500, height: 300, border: '1px solid lightgray' }}>
             <div ref={quillRef} />
        </div>
    </Col>
  </Row>
</Container>
  )
}
