import { useState } from "react";
import { Link } from "react-router";
import AudioPlayerWrapper from "../components/AudioPlayerWrapper";
import { useReaderContext } from "../hooks/useReaderContext";

const GenerateAudio = () => {
  const [texts, setTexts] = useState<string>("");
  const { audioUrl, loading, generateAudo } = useReaderContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!texts) {
      alert("Please enter some text.");
      return;
    }

    await generateAudo(texts);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            VibeRead
          </Link>

          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 transition-colors font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Generate Your Audio
            </h1>
            <p className="text-gray-600 text-lg">
              Paste or type your text below and get instant speech audio
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="text-input"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Enter Your Text
              </label>
              <textarea
                id="text-input"
                required
                onChange={(e) => setTexts(e.target.value)}
                value={texts}
                placeholder="Type or paste your text here... You can paste entire articles, book chapters, or any text you want to listen to."
                className="w-full border-2 border-gray-300 rounded-xl p-4 h-64 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none text-gray-800 placeholder-gray-400"
              />
              <p className="text-sm text-gray-500 mt-2">
                {texts.length} characters
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !texts.trim()}
              className="w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Generating Audio...
                </span>
              ) : (
                "Generate Audio"
              )}
            </button>
          </form>

          {/* Audio Player Section */}
          {audioUrl.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Your Generated Audio
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <AudioPlayerWrapper audioUrl={audioUrl} />
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                You can adjust playback speed and control playback using the
                player above
              </p>
            </div>
          )}

          {/* Tips Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              💡 Tips for Best Results
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Longer texts may take a bit more time to process</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>
                  Make sure your text is well-formatted for better audio quality
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>
                  You can generate multiple audio files by submitting different
                  texts
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateAudio;
