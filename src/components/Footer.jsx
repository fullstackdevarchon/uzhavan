import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="container mx-auto px-6 lg:px-12">


        {/* Bottom Note */}
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Archon Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
