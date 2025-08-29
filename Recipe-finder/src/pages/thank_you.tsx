export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#C5A47E]">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md text-center">
        <h1 className="text-3xl font-extrabold  text-warm-brown mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-gray-600 mb-6">
          Your submission was successful.  
          We’ll send you delicious recipes soon 🍲✨
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-[#C5A47E] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
