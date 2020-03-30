import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="px-8 max-w-5xl py-4 border-t border-orange-200 m-auto">
        <p className="text-sm text-center">
          Designed & Developed by{' '}
          <a
            href="https://www.jon-funk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jonathan Funk
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
