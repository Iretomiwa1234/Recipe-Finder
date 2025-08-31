export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFFDF8] text-center px-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">😕</h1>
      <h2 className="text-3xl font-extrabold text-warm-brown mb-2">Something Went Wrong</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! It looks like an error occurred while loading your recipes.  
        Don’t worry—we’re working on it!
      </p>

      <button
        onClick={() => (window.location.href = "/recipe")}
        className="px-6 py-3 bg-[hsl(var(--primary))] text-white rounded-full shadow-md hover:bg-opacity-90 transition"
      >
        Refresh Page
      </button>

      <a
        href="/"
        className="mt-4 text-sm text-gray-500 hover:underline"
      >
        ← Back to Home
      </a>
    </div>
  );
}

