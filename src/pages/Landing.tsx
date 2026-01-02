import { Link } from "react-router";

const Landing = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            VibeRead
          </div>

          <Link
            to="/generate"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Read Easily, Listen Instantly
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Transform any text into natural-sounding speech with the power of
            Puter.js. Upload your documents and get instant audio that you can
            listen to anywhere, anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/generate"
              className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Reading Now
            </Link>
            <a
              href="#features"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-all font-semibold text-lg border-2 border-blue-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose VibeRead?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Instant Conversion
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Upload your text and get high-quality audio in seconds. No
              waiting, no delays.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Natural Speech
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Powered by Puter.js AI, our text-to-speech delivers natural,
              human-like voices that make listening enjoyable.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Easy Reading
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Perfect for people who want to read easily. Listen to books,
              articles, and documents on the go with Puter.js technology.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              AI Image to Speech
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Upload images and let Puter.js AI describe them in natural speech.
              Perfect for visual content accessibility.
            </p>
          </div>
        </div>
      </div>

      {/* Puter.js Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Powered by Puter.js
              </h2>
              <p className="text-xl text-gray-600">
                The Future of AI-Powered Speech Technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  What is Puter.js?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Puter.js is a cutting-edge JavaScript library that brings
                  powerful AI capabilities directly to web applications. It
                  provides seamless integration with advanced AI models for
                  text-to-speech, image processing, and more.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>High-quality, natural-sounding speech synthesis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Advanced AI image description capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Easy-to-use JavaScript API</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Privacy-focused with local processing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  Why Puter.js for VibeRead?
                </h4>
                <p className="text-gray-600 mb-4">
                  We chose Puter.js because it offers unparalleled performance
                  and reliability for text-to-speech conversion. Its advanced
                  AI models ensure that your text is transformed into
                  natural-sounding speech that feels human and engaging.
                </p>
                <p className="text-gray-600">
                  With Puter.js, VibeRead delivers fast, high-quality audio
                  generation that works seamlessly across all devices and
                  browsers, making reading accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Upload Your Text
                </h3>
                <p className="text-gray-600 text-lg">
                  Simply paste or type your text into our easy-to-use interface.
                  No file uploads needed.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Generate Audio with Puter.js
                </h3>
                <p className="text-gray-600 text-lg">
                  Click the generate button and watch as Puter.js AI transforms
                  your text into natural speech instantly.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Listen & Enjoy
                </h3>
                <p className="text-gray-600 text-lg">
                  Play your generated audio instantly. Control playback speed
                  and enjoy your content hands-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Reading?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the power of Puter.js AI. Join thousands of users who are
            making reading easier with VibeRead.
          </p>
          <Link
            to="/generate"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>&copy; 2026 VibeRead. Powered by Puter.js - Making reading accessible for everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
