"use client";

const CTA = () => {
  return (
    <div
      id="login-cta"
      className="bg-purple-900 rounded-md  p-5 text-white shadow-floating relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-600 rounded-full opacity-20"></div>
      <h3 className="text-sm font-bold mb-2 relative z-10">
        Join the discussion
      </h3>
      <p className="text-xs text-purple-100 mb-4 relative z-10">
        Sign in to vote on ideas, post your own, and join the conversation.
      </p>
      <button
        onClick={() => alert("Log In / Sign Up functionality coming soon!")}
        className="w-full cursor-pointer rounded-md bg-white text-purple-900 text-xs font-bold py-2 rounded-ui hover:bg-purple-50 transition-colors relative z-10"
      >
        Log In / Sign Up
      </button>
    </div>
  );
};

export default CTA;
