const CtaSection = () => {
  return (
    <section className="py-24 bg-purple-50">
      <div className="max-w-200 mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Start Building Better Ideas Today
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
          Join thousands of teams who have switched from chaotic chats to
          structured ranking. Clear governance for your best ideas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-purple-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-lg">
            Create Your First Top10
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-medium px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all text-lg">
            Schedule Demo
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
