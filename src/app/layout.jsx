import React from "react";
import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center p-4 min-h-screen">
          <div className="text-center tracking-wider">
            <div className="text-3xl uppercase font-bold">Luggage Tracker</div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
