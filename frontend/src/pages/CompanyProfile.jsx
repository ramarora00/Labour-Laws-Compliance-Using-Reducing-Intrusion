import { useState } from "react";

export default function CompanyProfile() {
  const [size, setSize] = useState("");
  const [sector, setSector] = useState("");
  const [laws, setLaws] = useState([]);

  const handleCheck = () => {
    let result = [];

    if (size >= 10) {
      result.push("Factories Act, 1948");
    }
    if (sector === "IT") {
      result.push("Shops & Establishments Act");
    }
    if (size > 0) {
      result.push("Minimum Wages Act, 1948");
    }

    setLaws(result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Company Profile</h2>
      
      <div style={{ marginBottom: 10 }}>
        Company Size:
        <input value={size} onChange={e => setSize(e.target.value)} />
      </div>

      <div style={{ marginBottom: 10 }}>
        Sector:
        <select value={sector} onChange={e => setSector(e.target.value)}>
          <option value="">Select...</option>
          <option value="IT">IT</option>
          <option value="Manufacturing">Manufacturing</option>
        </select>
      </div>

      <button onClick={handleCheck}>Check Applicable Laws</button>

      <h3 style={{ marginTop: 20 }}>Applicable Laws:</h3>
      <ul>
        {laws.map((l, idx) => <li key={idx}>{l}</li>)}
      </ul>
    </div>
  );
}
