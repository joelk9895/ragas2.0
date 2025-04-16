"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../lib/supabase";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  organization: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface WaitlistModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function WaitlistModal({
  isOpen,
  setIsOpen,
}: WaitlistModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Insert data into Supabase
      const { error } = await supabase.from("waitlist").insert([
        {
          name: data.name,
          email: data.email,
          organization: data.organization || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      // Success!
      setSubmitSuccess(true);
      reset();

      // Close modal after 3 seconds on success
      setTimeout(() => {
        setIsOpen(false);
        setSubmitSuccess(false);
      }, 3000);
    } catch (error: unknown) {
      console.error("Error submitting to waitlist:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close modal handler
  const closeModal = () => {
    setIsOpen(false);
    if (submitSuccess) setSubmitSuccess(false);
    setSubmitError("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-md w-full p-8 relative border border-[#E5E5E5] dark:border-gray-800 shadow-xl">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal content */}
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl  text-gray-900 dark:text-white">
            Join the Ragas Waitlist
          </h3>
          <p className=" text-gray-600 dark:text-gray-400 mt-2">
            Get early access to shape the roadmap.
          </p>
        </div>

        {submitSuccess ? (
          <div className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-md mb-4 text-center">
            <p>
              Thank you for joining our waitlist! We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {submitError && (
              <div className="bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-md">
                <p>{submitError}</p>
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full px-3.5 py-2.5 border border-[#E5E5E5] dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBD83C] dark:bg-gray-800 dark:text-white transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full px-3.5 py-2.5 border border-[#E5E5E5] dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBD83C] dark:bg-gray-800 dark:text-white transition-colors"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Organization (Optional)
              </label>
              <input
                id="organization"
                type="text"
                {...register("organization")}
                className="w-full px-3.5 py-2.5 border border-[#E5E5E5] dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBD83C] dark:bg-gray-800 dark:text-white transition-colors"
                placeholder="Your company or organization"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 px-5 rounded-md font-semibold bg-gradient-to-r from-[#FDD674] to-[#FBD83C] text-black hover:opacity-90 transition-opacity ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </button>
            </div>

            <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
              We&apos;ll never share your information with third parties.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
