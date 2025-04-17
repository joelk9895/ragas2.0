const OpenSource = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="group bg-gradient-to-br from-transparent via-[#ffb30324] to-[#ffb303] rounded-lg p-8">
            <div className="grid grid-cols-1  gap-8">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-center w-full">
                  Built in the Open, Evolving with You
                </h2>
                <p className="text-md text-foreground mb-8 text-center max-w-lg">
                  We&apos;re inviting a select group of developers and
                  researchers to shape Ragas together.
                </p>
                <div className="flex flex-wrap gap-4 justify-center w-full">
                  <a
                    href="https://github.com/explodinggradients/ragas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-gradient-to-b from-gray-100 to-white text-black border-[#E5E5E5] border px-6 py-2.5 text-sm hover:opacity-90 transition-opacity flex items-center gap-3 font-semibold"
                  >
                    <span className="text-gray-500 text-xl">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </span>
                    View on GitHub
                  </a>
                  <a
                    href="#join-community"
                    className="rounded-md font-semibold bg-gradient-to-r from-[#FDD674] to-[#FBD83C] px-6 py-2.5 text-sm hover:opacity-90 transition-opacity text-black"
                  >
                    Join Our Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
