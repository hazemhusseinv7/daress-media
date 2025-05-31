import React from "react";

export default function page() {
  return (
    <main className="relative overflow-hidden bg-linear-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="mt-32">
        {/* Hero */}
        <div>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <p className="inline-block text-sm font-medium bg-clip-text bg-linear-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                  لديك استفسار؟
                </p>

                {/* Title */}
                <div className="mt-4 md:mb-12 max-w-2xl">
                  <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                    تواصل معنا الآن
                  </h1>
                  <p className="text-gray-600 dark:text-neutral-400">
                    هل لديك فكرة إبداعية تريد تحويلها إلى واقع؟ فريقنا المتخصص
                    في الرسوم المتحركة وإنشاء المحتوى جاهز لمساعدتك. تواصل معنا
                    اليوم لمناقشة مشروعك، وسنعمل معك لتحقيق رؤيتك بأعلى معايير
                    الجودة والإبداع. نقدم حلولًا مخصصة تناسب احتياجاتك بدءًا من
                    الفيديوهات الترويجية ووصولاً إلى المحتوى التفاعلي. املأ
                    النموذج وسنرد عليك في أسرع وقت ممكن.
                  </p>
                </div>
                {/* End Title */}
              </div>
              {/* End Col */}

              <div>
                {/* Form */}
                <form>
                  <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                    {/* Card */}
                    <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                      <div>
                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {/* Input Group */}
                          <div>
                            {/* Floating Input */}
                            <div className="relative">
                              <input
                                type="text"
                                id="hs-hero-signup-form-floating-input-first-name"
                                className="peer p-3 sm:p-4 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="John"
                              />
                              <label
                                htmlFor="hs-hero-signup-form-floating-input-first-name"
                                className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500 dark:text-neutral-500"
                              >
                                First name
                              </label>
                            </div>
                            {/* End Floating Input */}
                          </div>
                          {/* End Input Group */}

                          {/* Input Group */}
                          <div>
                            {/* Floating Input */}
                            <div className="relative">
                              <input
                                type="text"
                                id="hs-hero-signup-form-floating-input-last-name"
                                className="peer p-3 sm:p-4 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="Doe"
                              />
                              <label
                                htmlFor="hs-hero-signup-form-floating-input-last-name"
                                className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500 dark:text-neutral-500"
                              >
                                Last name
                              </label>
                            </div>
                            {/* End Floating Input */}
                          </div>
                          {/* End Input Group */}

                          {/* Input Group */}
                          <div>
                            {/* Floating Input */}
                            <div className="relative">
                              <input
                                type="email"
                                id="hs-hero-signup-form-floating-input-email"
                                className="peer p-3 sm:p-4 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="you@email.com"
                              />
                              <label
                                htmlFor="hs-hero-signup-form-floating-input-email"
                                className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500 dark:text-neutral-500"
                              >
                                Email
                              </label>
                            </div>
                            {/* End Floating Input */}
                          </div>
                          {/* End Input Group */}

                          {/* Input Group */}
                          <div>
                            {/* Floating Input */}
                            <div className="relative">
                              <input
                                type="text"
                                id="hs-hero-signup-form-floating-input-company-name"
                                className="peer p-3 sm:p-4 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="Preline"
                              />
                              <label
                                htmlFor="hs-hero-signup-form-floating-input-company-name"
                                className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500 dark:text-neutral-500"
                              >
                                Company name
                              </label>
                            </div>
                            {/* End Floating Input */}
                          </div>
                          {/* End Input Group */}

                          {/* Input Group */}
                          <div className="relative col-span-full">
                            {/* Floating Input */}
                            <div className="relative">
                              <input
                                type="password"
                                id="hs-hero-signup-form-floating-input-new-password"
                                className="peer p-3 sm:p-4 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="********"
                              />
                              <label
                                htmlFor="hs-hero-signup-form-floating-input-new-password"
                                className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500 dark:text-neutral-500"
                              >
                                New password
                              </label>
                            </div>
                            {/* End Floating Input */}

                            <div
                              id="hs-strong-password-popover"
                              className="hidden absolute z-10 w-full bg-gray-100 rounded-lg p-4 dark:bg-neutral-950"
                            >
                              <div
                                id="hs-strong-password-in-popover"
                                data-hs-strong-password='{
                          "target": "#hs-hero-signup-form-floating-input-new-password",
                          "hints": "#hs-strong-password-popover",
                          "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
                          "mode": "popover"
                        }'
                                className="flex mt-2 -mx-1"
                              ></div>

                              <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
                                Your password must contain:
                              </h4>

                              <ul className="space-y-1 text-sm text-gray-500 dark:text-neutral-500">
                                <li
                                  data-hs-strong-password-hints-rule-text="min-length"
                                  className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                >
                                  <span className="hidden" data-check>
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span data-uncheck>
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M18 6 6 18" />
                                      <path d="m6 6 12 12" />
                                    </svg>
                                  </span>
                                  Minimum number of characters is 6.
                                </li>
                                <li
                                  data-hs-strong-password-hints-rule-text="lowercase"
                                  className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                >
                                  <span className="hidden" data-check>
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span data-uncheck>
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M18 6 6 18" />
                                      <path d="m6 6 12 12" />
                                    </svg>
                                  </span>
                                  Should contain lowercase.
                                </li>
                                <li
                                  data-hs-strong-password-hints-rule-text="uppercase"
                                  className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                >
                                  <span className="hidden" data-check>
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span data-uncheck>
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M18 6 6 18" />
                                      <path d="m6 6 12 12" />
                                    </svg>
                                  </span>
                                  Should contain uppercase.
                                </li>
                                <li
                                  data-hs-strong-password-hints-rule-text="numbers"
                                  className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                >
                                  <span className="hidden" data-check>
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span data-uncheck>
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M18 6 6 18" />
                                      <path d="m6 6 12 12" />
                                    </svg>
                                  </span>
                                  Should contain numbers.
                                </li>
                                <li
                                  data-hs-strong-password-hints-rule-text="special-characters"
                                  className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                                >
                                  <span className="hidden" data-check>
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span data-uncheck>
                                    <svg
                                      className="shrink-0 size-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M18 6 6 18" />
                                      <path d="m6 6 12 12" />
                                    </svg>
                                  </span>
                                  Should contain special characters.
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* End Input Group */}

                          {/* Input Group */}
                          <div className="col-span-full">
                            {/* Floating Input */}
                            <div className="relative">
                              <input
                                type="password"
                                id="hs-hero-signup-form-floating-input-current-password"
                                className="peer p-3 sm:p-4 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                                placeholder="********"
                              />
                              <label
                                htmlFor="hs-hero-signup-form-floating-input-current-password"
                                className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500 dark:text-neutral-500"
                              >
                                Current password
                              </label>
                            </div>
                            {/* End Floating Input */}
                          </div>
                          {/* End Input Group */}
                        </div>
                        {/* End Grid */}

                        <div className="mt-5">
                          <button
                            type="submit"
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Get started
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* End Card */}
                  </div>
                </form>
                {/* End Form */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Hero */}
      </div>
    </main>
  );
}
