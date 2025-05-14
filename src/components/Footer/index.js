"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { LinkedinIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <footer className="mt-16 relative">
      {/* Background shape with gradient */}
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-r from-[#00FFA3]/20 to-[#00FFFF]/20 blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 overflow-hidden">
        
        {/* Main footer content */}
        <div className="rounded-[2rem] sm:rounded-[3rem] bg-white/80 dark:bg-dark/80 backdrop-blur-lg shadow-xl p-8 sm:p-10 relative">
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-[2rem] sm:rounded-[3rem] border-2 border-transparent pointer-events-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column: Newsletter */}
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#00FFA3] to-[#00FFFF]">
                Stay in the loop
              </h3>
              <p className="mt-3 text-dark/70 dark:text-light/70 max-w-md">
                Subscribe for exclusive insights, tech updates, and guides.
                Join over <span className="font-medium text-[#00FFA3]">5000+</span> tech enthusiasts!
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 relative">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      placeholder="Your email address"
                      {...register("email", { required: true, maxLength: 80 })}
                      className="w-full px-5 py-3 rounded-full bg-white dark:bg-dark/90 border border-[#00FFA3]/20 focus:border-[#00FFA3] shadow-sm text-dark dark:text-light focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/30 transition-all"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1 ml-4 absolute">
                        Email is required
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00FFA3] to-[#00FFFF] text-dark font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            
            {/* Right column: Links & Social */}
            <div className="flex flex-col md:items-end">
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-dark dark:text-light">Connect</h4>
                  <div className="flex gap-3">
                    <a 
                      href={siteMetadata.linkedin} 
                      rel="noopener noreferrer" 
                      target="_blank"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00FFA3]/10 to-[#00FFFF]/10 flex items-center justify-center hover:from-[#00FFA3]/20 hover:to-[#00FFFF]/20 hover:scale-110 transition-all duration-300"
                    >
                      <LinkedinIcon className="w-5 h-5 text-[#00FFA3]" />
                    </a>
                    <a 
                      href={siteMetadata.instagram} 
                      rel="noopener noreferrer" 
                      target="_blank"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00FFA3]/10 to-[#00FFFF]/10 flex items-center justify-center hover:from-[#00FFA3]/20 hover:to-[#00FFFF]/20 hover:scale-110 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 text-[#00FFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <rect width="20" height="20" x="2" y="2" rx="6" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="17" cy="7" r="1" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-dark dark:text-light">Quick Links</h4>
                  <nav className="flex flex-col gap-2">
                    <Link href="/blog" className="text-dark/70 dark:text-light/70 hover:text-[#00FFA3] transition-colors">
                      Blog
                    </Link>
                    <Link href="/about" className="text-dark/70 dark:text-light/70 hover:text-[#00FFA3] transition-colors">
                      About
                    </Link>
                    <Link href="/contact" className="text-dark/70 dark:text-light/70 hover:text-[#00FFA3] transition-colors">
                      Contact
                    </Link>
                    <Link href="/sitemap.xml" className="text-dark/70 dark:text-light/70 hover:text-[#00FFA3] transition-colors">
                      Sitemap
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer bottom */}
          <div className="mt-12 pt-6 border-t border-[#00FFA3]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-dark/60 dark:text-light/60 text-sm">
              &copy; {new Date().getFullYear()} ments. All rights reserved.
            </span>
            
            <div className="text-dark/60 dark:text-light/60 text-sm">
              Made with <span className="text-[#00FFA3]">♥</span> by{" "}
              <a 
                href="https://devdreaming.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-[#00FFFF] transition-colors"
              >
                ments
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
