const MAILCHIMP_ACTION =
  "https://app.us15.list-manage.com/subscribe/post?u=6903da6ed999952e3a8d58554&id=a836ea1f1d&f_id=00e5a2e1f0";

export default function WaitlistCard({
  formIdBase = "mc-embedded",
  submitted = false,
  onSubmit,
}: {
  formIdBase?: string;
  submitted?: boolean;
  onSubmit?: () => void;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center sm:p-8">
      <h2 className="text-2xl font-semibold">Be first to try COLOR CODED</h2>
      <p className="mt-4 mx-auto max-w-2xl text-white/70">
        Join the beta and experience a simpler way to read piano music.
      </p>
      {submitted ? (
        <div className="mt-8 flex flex-col items-center">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85"
            aria-hidden
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-6 w-6"
            >
              <path
                d="M16.25 5.75L8.375 13.625L3.75 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-4 text-sm text-white/80" role="status" aria-live="polite">
            You&apos;re on the list! We&apos;ll notify you when COLOR CODED is ready.
          </p>
        </div>
      ) : (
        <form
          action={MAILCHIMP_ACTION}
          method="post"
          target="_blank"
          id={`${formIdBase}-subscribe-form`}
          name={`${formIdBase}-subscribe-form`}
          className="validate mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          onSubmit={() => onSubmit?.()}
        >
          <input
            type="email"
            name="EMAIL"
            required
            placeholder="you@example.com"
            className="w-full min-w-0 max-w-sm rounded-full border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:w-72"
            aria-label="Email address"
          />
          <button
            type="submit"
            name="subscribe"
            id={`${formIdBase}-subscribe`}
            className="w-full shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 sm:w-auto"
          >
            Join the Beta
          </button>
        </form>
      )}
      <p className="mt-6 text-xs text-white/50">Launching first on iOS.</p>
    </div>
  );
}

