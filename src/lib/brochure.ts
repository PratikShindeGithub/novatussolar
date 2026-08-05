import type { Product } from "./products";

/** Escapes text for a PDF string literal. */
const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

const wrap = (text: string, max = 78) => {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > max) {
      if (line) lines.push(line.trim());
      line = w;
    } else {
      line += " " + w;
    }
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
};

type Line = { text: string; size: number; gap: number };

function buildLines(product: Product): Line[] {
  const lines: Line[] = [
    { text: "Novatussolar", size: 20, gap: 26 },
    { text: "Solar solutions in Pune, Maharashtra", size: 10, gap: 30 },
    { text: product.title, size: 16, gap: 22 },
  ];
  for (const l of wrap(product.description)) lines.push({ text: l, size: 11, gap: 16 });
  lines.push({ text: "", size: 11, gap: 10 });

  const section = (title: string, items: string[]) => {
    lines.push({ text: title, size: 13, gap: 18 });
    for (const item of items) {
      const parts = wrap("- " + item);
      for (const p of parts) lines.push({ text: p, size: 11, gap: 15 });
    }
    lines.push({ text: "", size: 11, gap: 10 });
  };

  section("Available options", product.variants);
  section("Key highlights", product.highlights);
  section("Typical applications", product.applications);

  lines.push({ text: "Get a quote", size: 13, gap: 18 });
  lines.push({ text: "Email: hello@novatussolar.com", size: 11, gap: 15 });
  lines.push({ text: "Web: novatussolar.com", size: 11, gap: 15 });
  return lines;
}

/** Minimal single-page PDF writer (no dependencies). */
export function buildBrochurePdf(product: Product): Blob {
  const lines = buildLines(product);
  let y = 780;
  let content = "BT\n";
  let currentSize = 0;
  for (const line of lines) {
    if (line.size !== currentSize) {
      content += `/F1 ${line.size} Tf\n`;
      currentSize = line.size;
    }
    content += `1 0 0 1 56 ${y} Tm (${esc(line.text)}) Tj\n`;
    y -= line.gap;
  }
  content += "ET";

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];
  objects.forEach((obj, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xrefPos = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;

  return new Blob([pdf], { type: "application/pdf" });
}

export function downloadBrochure(product: Product) {
  const url = URL.createObjectURL(buildBrochurePdf(product));
  const a = document.createElement("a");
  a.href = url;
  a.download = `Novatussolar-${product.slug}-brochure.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
