export default function Checklist() {
  const tasks = [
    { id: 1, text: "Maintain attendance register", done: false },
    { id: 2, text: "Display statutory notices at workplace", done: false },
    { id: 3, text: "Submit monthly PF contributions", done: false },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Compliance Checklist</h2>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <input type="checkbox" /> {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
