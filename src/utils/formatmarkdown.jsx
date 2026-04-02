import React from "react";

export function renderInlineMarkdown(text) {
  if (!text) return text;

  const parts = [];
  let remaining = text;
  let partKey = 0;

  while (remaining.length > 0) {
    const boldStart = remaining.indexOf("**");
    if (boldStart === -1) {
      parts.push(<span key={partKey++}>{remaining}</span>);
      break;
    }

    if (boldStart > 0) {
      parts.push(<span key={partKey++}>{remaining.slice(0, boldStart)}</span>);
    }

    const boldEnd = remaining.indexOf("**", boldStart + 2);
    if (boldEnd === -1) {
      parts.push(<span key={partKey++}>{remaining.slice(boldStart)}</span>);
      break;
    }

    parts.push(
      <strong key={partKey++} style={{ fontWeight: 700 }}>
        {remaining.slice(boldStart + 2, boldEnd)}
      </strong>
    );

    remaining = remaining.slice(boldEnd + 2);
  }

  return parts;
}

export function formatMarkdown(text) {
  if (!text) return [];

  const lines = text.split("\n");
  const elements = [];
  let key = 0;

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed === "") {
      elements.push(<div key={key++} style={{ height: "8px" }} />);
      return;
    }

    // Bold full line
    if (
      trimmed.startsWith("**") &&
      trimmed.endsWith("**") &&
      !trimmed.includes(":**") &&
      trimmed.indexOf("**", 2) === trimmed.length - 2
    ) {
      elements.push(
        <p key={key++} style={{ fontWeight: 700, margin: "10px 0 4px 0", fontSize: "15px", lineHeight: 1.5 }}>
          {trimmed.slice(2, -2)}
        </p>
      );
      return;
    }

    // Bullet points
    if (trimmed.startsWith("•") || trimmed.startsWith("- ")) {
      const bulletText = trimmed.startsWith("•") ? trimmed.slice(1).trim() : trimmed.slice(2).trim();
      elements.push(
        <div key={key++} style={{ display: "flex", gap: "8px", margin: "3px 0", paddingLeft: "8px", lineHeight: 1.6 }}>
          <span style={{ color: "#999", flexShrink: 0, marginTop: "2px" }}>•</span>
          <span>{renderInlineMarkdown(bulletText)}</span>
        </div>
      );
      return;
    }

    // Numbered items
    const numberedMatch = trimmed.match(/^\*?\*?(\d+)\.\s*\*?\*?\s*(.*)/);
    if (numberedMatch) {
      const content = numberedMatch[2].replace(/\*\*/g, "");
      elements.push(
        <div key={key++} style={{ display: "flex", gap: "8px", margin: "6px 0", lineHeight: 1.6 }}>
          <span style={{ fontWeight: 700, color: "#ccc", flexShrink: 0, minWidth: "20px" }}>
            {numberedMatch[1]}.
          </span>
          <span style={{ fontWeight: 600 }}>{renderInlineMarkdown(content)}</span>
        </div>
      );
      return;
    }

    // Default paragraph
    elements.push(
      <p key={key++} style={{ margin: "4px 0", lineHeight: 1.7, fontSize: "14px" }}>
        {renderInlineMarkdown(trimmed)}
      </p>
    );
  });

  return elements;
}
