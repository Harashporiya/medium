import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { htmlToText } from 'html-to-text'; 
import Nav from "./Navbar/Nav";

const DEPLOY_URL = import.meta.env.VITE_DEPLOY_URL;

function Publish() {
  const [editorContent, setEditorContent] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const editor = useRef(null);
  const { authorId } = useParams();

  const fetchDataBlog = async () => {
    try {
      const plainTextContent = htmlToText(editorContent);
      const content = plainTextContent || '';

      await axios.post(
        `${DEPLOY_URL}/api/blog`,
        {
          title,
          content,
          image: image || 'https://via.placeholder.com/150', 
          authorId,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token") || '', 
          },
        }
      );
      setTitle("")
      setImage("")
      setEditorContent("")
    } catch (error) {
      console.error("Error", error);
    }
  };

  const isFormComplete = title && editorContent && image;

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Publish Your Blog</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded w-96 mb-4"
            required
          />
        </div>
        <JoditEditor
          ref={editor}
          value={editorContent}
          onChange={(newContent) => setEditorContent(newContent)}
        />
        <input 
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="mt-4 p-2 border border-gray-300 rounded w-96"
          required
        />
        {isFormComplete && (
          <button
            onClick={fetchDataBlog}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
          >
            Publish
          </button>
        )}
      </div>
    </>
  );
}

export default Publish;
