export default function Item({ item, deleteItems, handleChecked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleChecked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.desc}
      </span>
      <button onClick={() => deleteItems(item.id)} style={{ color: "red" }}>
        &times;
      </button>
    </li>
  );
}
