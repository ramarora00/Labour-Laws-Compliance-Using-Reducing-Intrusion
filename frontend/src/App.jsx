import { useEffect, useState } from 'react'

export default function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_BASE + "/api/health")
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(() => setHealth({ error: "Backend unreachable" }))
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>LabourSafe</h1>
      <pre>{JSON.stringify(health, null, 2)}</pre>
    </div>
  );
}
