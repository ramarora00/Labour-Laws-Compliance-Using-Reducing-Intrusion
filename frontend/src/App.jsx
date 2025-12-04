import { Link } from 'react-router-dom';

export default function App(){
  return (
    <div style={{ padding: 24 }}>
      <h1>LabourSafe — Demo</h1>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/laws" style={{ marginRight: 12 }}>Laws</Link>
      </nav>
      <p>Lightweight demo. Open <strong>Laws</strong> to see seeded entries.</p>
    </div>
  );
}
