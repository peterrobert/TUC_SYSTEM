const ConditionalSignUp = () => {
  return (
    <section className="mb-16 rounded-2xl bg-linear-to-r from-purple-50 to-white border border-purple-100 p-10 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-purple-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
          <i className="fa-solid fa-users-viewfinder text-xl"></i>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join to Create, Vote, and Remix Ideas
        </h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Dont just browse—participate. Turn your scattered thoughts into
          structured collaboration and help the best ideas win.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-purple-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
            Create Free Account
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-semibold px-8 py-3 rounded-xl shadow-sm transition-all">
            Explore as Guest
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConditionalSignUp;
