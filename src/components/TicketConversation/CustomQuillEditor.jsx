// components/CustomQuillEditor.jsx
import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const CustomQuillEditor = ({ onChange }) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Write your comment...',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        }
      });

      quillRef.current.on('text-change', () => {
        const html = editorRef.current.querySelector('.ql-editor')?.innerHTML;
        onChange(html);
      });
    }
  }, [onChange]);

  return (
    <div className="custom-quill-editor">
      <div ref={editorRef} />
    </div>
  );
};

export default CustomQuillEditor;
