"use client";

import TeaCupIcon from "@/icons/TeaCupIcon";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Divider from "../Layout/Divider";
import { useContactForm } from "@/hooks/useContactForm";

const Contact = () => {
  const { isSubmitting, submitStatus, handleSubmit } = useContactForm();

  return (
    <div
      className="relative isolate bg-background min-h-screen flex items-center"
      role="region"
      aria-label="Contact section"
    >
      <div className="mx-auto max-w-xl w-full px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Get in touch
          </h2>
          <p className="mt-6 text-lg/8 text-text-secondary">
            Have a question or want to work together? Drop us a line!
          </p>
          <div className="mt-10 flex justify-center gap-x-4 text-base/7 text-text-secondary">
            <div className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                aria-hidden="true"
                className="h-7 w-6 text-text-secondary"
              />
            </div>
            <div>
              <a
                href="mailto:hello@digitalbrew.tech?subject=Hello%20Digital%20Brew&body=I%20would%20like%20to%20inquire%20about..."
                className="hover:text-text"
                aria-label="Send email to Digital Brew at hello@digitalbrew.tech"
              >
                hello@digitalbrew.tech
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} aria-label="Contact form" role="form">
          <Divider />
          <TeaCupIcon className="mx-auto m-6" size={75} />

          <div className="grid grid-cols-1 gap-y-6" role="group">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm/6 font-semibold text-text"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md bg-background px-3.5 py-2 text-base text-text outline outline-1 -outline-offset-1 outline-accent placeholder:text-text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-accent"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-text"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-background px-3.5 py-2 text-base text-text outline outline-1 -outline-offset-1 outline-accent placeholder:text-text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-accent"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-text"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help?"
                  className="block w-full rounded-md bg-background px-3.5 py-2 text-base text-text outline outline-1 -outline-offset-1 outline-accent placeholder:text-text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-accent"
                  required
                  aria-required="true"
                  aria-label="Enter your message to Digital Brew"
                />
              </div>
            </div>
          </div>

          {submitStatus.message && (
            <div
              className={`mt-4 p-4 rounded-md ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
              role="alert"
            >
              {submitStatus.message}
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-accent px-3.5 py-2.5 text-center text-sm font-semibold text-background shadow-sm hover:bg-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Submit form to Digital Brew"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
