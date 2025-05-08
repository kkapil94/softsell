"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0 px-1 sm:px-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Turn Unused Software Licenses Into Cash
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-5 sm:mb-6 lg:mb-8">
            SoftSell helps businesses recover costs by selling unused software
            licenses quickly, securely, and hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <motion.button
              className="px-6 sm:px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 shadow-md w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sell My Licenses
            </motion.button>
            <motion.button
              className="px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-medium rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-80 lg:h-96 max-w-md mx-auto md:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl transform rotate-3 dark:from-blue-600 dark:to-indigo-700"></div>
            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-md">
                <div className="flex flex-wrap items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 mr-3 shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base truncate">
                      Microsoft Office 365
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      50 licenses available
                    </p>
                  </div>
                  <div className="ml-auto pl-2">
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">
                      $2,500
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 mr-3 shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base truncate">
                      Adobe Creative Cloud
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      25 licenses available
                    </p>
                  </div>
                  <div className="ml-auto pl-2">
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">
                      $3,750
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 mr-3 shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base truncate">
                      Slack Enterprise
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      100 licenses available
                    </p>
                  </div>
                  <div className="ml-auto pl-2">
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">
                      $5,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
