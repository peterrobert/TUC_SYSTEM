const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-300 mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
                <i className="fa-solid fa-layer-group text-sm"></i>
              </div>
              <span className="font-bold text-lg text-gray-900">
                Top10 System
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              The structured platform for collaborative idea ranking and
              governance. Making decisions clearer, together.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Top10 System Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
