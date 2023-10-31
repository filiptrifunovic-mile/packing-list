export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        There are none items in ur list, start adding them.
      </p>
    );
  }

  const numList = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numProcent = Math.round((numPacked / numList) * 100);
  return (
    <footer className="stats">
      <em>
        U have {numList} items on ur list, and u already packed {numPacked}{" "}
        which is {numProcent}%
      </em>
    </footer>
  );
}
