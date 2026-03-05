import Image from "next/image";

const ListsSection = () => {
  return (
    <section id="lists" className="py-24 bg-white">
      <div className="max-w-300 mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Active Top10 Lists
          </h2>
          <a
            href="#"
            className="text-purple-600 font-medium hover:text-purple-700 flex items-center gap-2 group"
          >
            View all lists
            <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-xl border border-gray-200 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Voting
                </span>
                <button className="text-gray-400 hover:text-purple-600 transition-colors">
                  <i className="fa-regular fa-bookmark"></i>
                </button>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                2024 Design System Updates
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                Prioritizing the new components and patterns for the upcoming Q3
                release cycle.
              </p>

              <div className="mt-6 flex items-center gap-4 text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-list-ol"></i>
                  <span>24 Entries</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-users"></i>
                  <span>12 Contributors</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-xl flex items-center gap-3">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                width={32}
                height={32}
                className="rounded-full border border-gray-200"
                alt="Creator"
              />
              <span className="text-sm font-medium text-gray-700">
                Alex Morgan
              </span>
              <span className="text-xs text-gray-400 ml-auto">
                Updated 2h ago
              </span>
            </div>
          </article>

          <article className="bg-white rounded-xl border border-gray-200 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Brainstorm
                </span>
                <button className="text-gray-400 hover:text-purple-600 transition-colors">
                  <i className="fa-regular fa-bookmark"></i>
                </button>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                Marketing Campaign Themes
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                Generating creative concepts for the holiday season promotional
                blast.
              </p>

              <div className="mt-6 flex items-center gap-4 text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-list-ol"></i>
                  <span>8 Entries</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-users"></i>
                  <span>5 Contributors</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-xl flex items-center gap-3">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="Creator"
                width={32}
                height={32}
                className="rounded-full border border-gray-200"
              />
              <span className="text-sm font-medium text-gray-700">
                Sarah Chen
              </span>
              <span className="text-xs text-gray-400 ml-auto">
                Updated 1d ago
              </span>
            </div>
          </article>

          <article className="bg-white rounded-xl border border-gray-200 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                  Contest
                </span>
                <button className="text-gray-400 hover:text-purple-600 transition-colors">
                  <i className="fa-regular fa-bookmark"></i>
                </button>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                Office Retreat Locations
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                Final round of voting for the annual team offsite destination.
              </p>

              <div className="mt-6 flex items-center gap-4 text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-list-ol"></i>
                  <span>15 Entries</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-users"></i>
                  <span>42 Contributors</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-xl flex items-center gap-3">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                alt="Creator"
                width={32}
                height={32}
                className="rounded-full border border-gray-200"
              />
              <span className="text-sm font-medium text-gray-700">
                Marcus Johnson
              </span>
              <span className="text-xs text-gray-400 ml-auto">
                Ends tomorrow
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ListsSection;
