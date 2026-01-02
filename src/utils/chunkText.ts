// const MAX_WORDS = 2800;

// export function chunkText(text: string): string[] {
//   // 1. Normalize
//   const cleanText = text
//     .replace(/\s+/g, " ")
//     .trim();

//   // 2. Split into sentences
//   const sentences = cleanText.match(/[^.!?]+[.!?]+|[^.!?]+$/g);

//   if (!sentences) return [];

//   const chunks: string[] = [];
//   let currentChunk: string[] = [];
//   let currentWordCount = 0;

//   for (const sentence of sentences) {
//     const wordsInSentence = sentence.trim().split(/\s+/).length;

//     // If single sentence is too long (edge case)
//     if (wordsInSentence > MAX_WORDS) {
//       // flush current chunk
//       if (currentChunk.length) {
//         chunks.push(currentChunk.join(" "));
//         currentChunk = [];
//         currentWordCount = 0;
//       }

//       // force-split long sentence
//       const words = sentence.split(/\s+/);
//       for (let i = 0; i < words.length; i += MAX_WORDS) {
//         chunks.push(words.slice(i, i + MAX_WORDS).join(" "));
//       }

//       continue;
//     }

//     // Check if adding this sentence exceeds limit
//     if (currentWordCount + wordsInSentence > MAX_WORDS) {
//       chunks.push(currentChunk.join(" "));
//       currentChunk = [sentence];
//       currentWordCount = wordsInSentence;
//     } else {
//       currentChunk.push(sentence);
//       currentWordCount += wordsInSentence;
//     }
//   }

//   // Push remaining chunk
//   if (currentChunk.length) {
//     chunks.push(currentChunk.join(" "));
//   }

//   return chunks;
// }

const MAX_CHARS = 3000;

export function chunkText(text: string): string[] {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const chunks: string[] = [];

  let currentChunk = "";

  for (const sentence of sentences) {
    // Case 1: sentence alone is too big → hard split
    if (sentence.length > MAX_CHARS) {
      if (currentChunk) {
        chunks.push(currentChunk.trim());
        currentChunk = "";
      }

      for (let i = 0; i < sentence.length; i += MAX_CHARS) {
        chunks.push(sentence.slice(i, i + MAX_CHARS));
      }

      continue;
    }

    // Case 2: adding sentence would overflow
    if ((currentChunk + sentence).length > MAX_CHARS) {
      chunks.push(currentChunk.trim());
      currentChunk = sentence + " ";
    } else {
      currentChunk += sentence + " ";
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}
