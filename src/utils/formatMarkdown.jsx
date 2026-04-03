import React from 'react';

export function formatMd(text) {
  return text.split("\n").map((line, i) => {
    const segs = [];
    const rx = /\*\*(.*?)\*\*/g;
    let last = 0, m;
    while ((m = rx.exec(line)) !== null) {
      if (m.index > last) segs.push({ t: "n", c: line.slice(last, m.index) });
      segs.push({ t: "b", c: m[1] });
      last = m.index + m[0].length;
    }
    if (last < line.length) segs.push({ t: "n", c: line.slice(last) });
    if (!segs.length) segs.push({ t: "n", c: line });

    const rendered = segs.map((s, j) => {
      if (s.t === "b") return <strong key={j} style={{ color: "var(--accent)" }}>{s.c}</strong>;
      const parts = s.c.split(/\*(.*?)\*/g);
      return parts.map((p, k) =>
        k % 2 === 1
          ? <em key={`${j}-${k}`} style={{ color: "#9a9a9a" }}>{p}</em>
          : <span key={`${j}-${k}`}>{p}</span>
      );
    });

    const isBullet = line.trim().startsWith("•");
    return (
      <div key={i} style={{ paddingLeft: isBullet ? 16 : 0, marginBottom: line === "" ? 8 : 2, lineHeight: 1.7 }}>
        {rendered}
      </div>
    );
  });
}
