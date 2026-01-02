export function chunkText(text: string, maxLength = 2500): string[] {
  if (!text.trim()) return [];

  const sentences = text.match(/[^.!?]+[.!?]?/g) ?? [];
  const chunks: string[] = [];
  let currentChunk = "";

  for (const sentence of sentences) {
    // Hard split very long sentences
    if (sentence.length > maxLength) {
      if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
        currentChunk = "";
      }

      for (let i = 0; i < sentence.length; i += maxLength) {
        chunks.push(sentence.slice(i, i + maxLength));
      }
      continue;
    }

    if ((currentChunk + sentence).length > maxLength) {
      chunks.push(currentChunk.trim());
      currentChunk = sentence;
    } else {
      currentChunk += (currentChunk ? " " : "") + sentence;
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}
