
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function LawDetail(){
  const { id } = useParams();
  const [law, setLaw] = useState(null);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_BASE + `/api/laws/${id}`)
      .then(r => setLaw(r.data))
      .catch(()=> setLaw(null));
  }, [id]);

  if(!law) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <Link to="/laws">← Back</Link>
      <h2>{law.title} — {law.sectionId}</h2>
      <p><strong>Summary:</strong> {law.summary}</p>
      <div style={{ whiteSpace: 'pre-wrap', marginTop: 12 }}>{law.text}</div>
    </div>
  );
}
