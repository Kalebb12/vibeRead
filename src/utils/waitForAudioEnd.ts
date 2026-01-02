export function waitForAudioToEnd(audio: HTMLAudioElement) {
  return new Promise<void>((resolve) => {
    audio.onended = () => resolve();
  });
}