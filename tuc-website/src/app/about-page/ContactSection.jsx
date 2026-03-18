const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
            Get in Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-deep-blue mx-auto mb-4 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-medium-gray max-w-2xl mx-auto">
            Have questions about TUC? Want to understand something better? Reach
            out—we're happy to explain.
          </p>
        </div>

        <div className="bg-white border border-cool-gray rounded-lg p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {[
              {
                title: "General Inquiries",
                email: "jmack@ywcbe.com",
                icon: "fa-envelope",
                color: "text-deep-blue",
              },
              {
                title: "Feedback",
                email: "jmack@ywcbe.com",
                icon: "fa-comments",
                color: "text-deep-blue",
              },
              {
                title: "Documentation",
                email: "jmack@ywcbe.com",
                icon: "fa-book",
                color: "text-dark-cyan",
              },
              {
                title: "Technical",
                email: "jmack@ywcbe.com",
                icon: "fa-code",
                color: "text-dark-cyan",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pale-blue rounded-md flex items-center justify-center shrink-0">
                  <i
                    className={`fa-solid ${item.icon} text-2xl ${item.color}`}
                  ></i>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <a
                    href={`mailto:${item.email}`}
                    className={`text-base sm:text-lg ${item.color} hover:opacity-80 transition-opacity`}
                  >
                    {item.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-cool-gray pt-6 sm:pt-8">
            <p className="text-base sm:text-lg text-medium-gray text-center leading-relaxed">
              We respond to all genuine inquiries. Response times vary depending
              on team capacity, but we aim to reply within a few days. No
              automated responses, no canned replies—just actual humans
              answering actual questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
