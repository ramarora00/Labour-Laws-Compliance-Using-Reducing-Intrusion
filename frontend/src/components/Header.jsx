import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ padding: 15, background: "#eee", marginBottom: 20 }}>
      <Link to="/" style={{ marginRight: 12 }}>Home</Link>
      <Link to="/laws" style={{ marginRight: 12 }}>Laws</Link>
      <Link to="/checklist" style={{ marginRight: 12 }}>Checklist</Link>
      <Link to="/company" style={{ marginRight: 12 }}>Company Profile</Link>
    </nav>
  );
}
