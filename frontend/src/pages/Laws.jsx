import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For fetching params from the URL
import axios from 'axios';

export default function LawDetail() {
  const { id } = useParams(); // Get the law ID from URL params
  const [law, setLaw] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE}/api/laws/${id}`)
      .then(r => setLaw(r.data))
      .catch(() => setLaw(null));
  }, [id]);

  if (!law) return <div>Loading...</div>; // Display loading until data is fetched

  return (
    <div style={{ padding: 20 }}>
      <h2>{law.title}</h2>
      <p><strong>Section ID:</strong> {law.sectionId}</p>
      <p><strong>Summary:</strong> {law.summary}</p>
      
      {/* Add the Applicability and Source fields here */}
      <p><strong>Applicability:</strong> {law.applicability || "N/A"}</p>
      <p><strong>Source:</strong> <a href={law.sourceLink} target="_blank" rel="noopener noreferrer">View Official Source</a></p>
    </div>
  );
}
