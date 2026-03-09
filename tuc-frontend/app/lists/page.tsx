import FilterSearchSection from "./FilterSearchSection";
import ListGridSection from "./ListGridSection";
import { tucLists } from "../lib/data";
import { Fragment } from "react/jsx-runtime";
import ConditionalSignUp from "./ConditionalSignUp";
import Pagination from "./Pagination";
import AppCreateTop10Btn from "../components/reusable-components/AppCreateTop10Btn";

const page = () => {
  const displayLists = () => {
    const results = tucLists.map((list) => {
      return (
        <Fragment key={list.id}>
          <ListGridSection {...list} />
        </Fragment>
      );
    });

    return results;
  };

  return (
    <main className="grow pt-24 pb-16">
      <div className="max-w-300 mx-auto px-4">
        <section className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              Explore Top10 Lists
            </h1>
            <p className="text-lg text-gray-500 font-medium">
              Discover structured idea systems created by the community.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-medium px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all text-sm flex items-center gap-2">
              <i className="fa-regular fa-lightbulb text-gray-400"></i>
              Learn How It Works
            </button>

            <AppCreateTop10Btn />
          </div>
        </section>
        <FilterSearchSection />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayLists()}
        </section>
        <ConditionalSignUp />
        <Pagination />
      </div>
    </main>
  );
};

export default page;
