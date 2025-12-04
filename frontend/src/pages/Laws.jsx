import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Laws(){
  const [laws, setLaws] = useState([]);
  useEffect(()=> {
    axios.get(import.meta.env.VITE_API_BASE + '/api/laws')
      .then(r => setLaws(r.data))
      .catch(()=> setLaws([]));
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <h2>Laws Catalog</h2>
      <ul>
        {laws.map(l => (
          <li key={l.id}>
            <Link to={`/laws/${l.id}`}>{l.title} — {l.sectionId}</Link> <div style={{fontSize:12}}>{l.summary}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
