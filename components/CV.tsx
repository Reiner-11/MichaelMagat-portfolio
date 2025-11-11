
import React, { useState } from 'react';
import { XMarkIcon } from './Icons';

const CV: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cvImageUrl = '/assets/CV.jpg'; // Using a sample CV image from local assets

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="cv" className="py-20">
      <div className="container mx-auto px-6 sm:px-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">My CV</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Click the image below to view my full curriculum vitae.
        </p>
        <div className="flex justify-center">
          <div
            className="cursor-pointer rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border-4 border-transparent hover:border-blue-500"
            onClick={openModal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openModal()}
            aria-label="View CV"
          >
            <img
              src={cvImageUrl}
              alt="CV of Michael Reiner Magat"
              className="w-full max-w-2xl h-auto object-contain rounded-md bg-white dark:bg-gray-800"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity"
          aria-labelledby="cv-modal-title"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="relative bg-white dark:bg-tertiary p-4 rounded-lg shadow-2xl max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <div className="flex justify-between items-center pb-3 sticky top-0 bg-white dark:bg-tertiary border-b border-gray-300 dark:border-gray-700">
               <h3 id="cv-modal-title" className="text-2xl font-bold text-gray-900 dark:text-white">Curriculum Vitae</h3>
               <button
                 onClick={closeModal}
                 className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                 aria-label="Close CV viewer"
               >
                 <XMarkIcon className="w-7 h-7" />
               </button>
            </div>
            <div className="pt-4">
              <img
                src={cvImageUrl}
                alt="Full view of CV"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CV;
