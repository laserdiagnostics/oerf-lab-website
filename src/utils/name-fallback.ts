export function nameFallback(displayName: string): string {
  const parts = displayName.trim().split(/\s+/).filter(Boolean);
  if (parts.length > 1) {
    return parts.map((part) => Array.from(part)[0]).join("").slice(0, 2).toUpperCase();
  }
  return Array.from(displayName.trim()).slice(0, 2).join("");
}
