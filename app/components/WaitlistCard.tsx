const MAILCHIMP_ACTION =
  "https://app.us15.list-manage.com/subscribe/post?u=6903da6ed999952e3a8d58554&id=a836ea1f1d&f_id=00e5a2e1f0";

export default function WaitlistCard({
  formIdBase = "mc-embedded",
}: {
  formIdBase?: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center sm:p-8">
      <h2 className="text-2xl font-semibold">Be first to try COLOR CODED</h2>
      <p className="mt-4 mx-auto max-w-2xl text-white/70">
        Join the beta and experience a simpler way to read piano music.
      </p>
      <form
        action={MAILCHIMP_ACTION}
        method="post"
        target="_blank"
        id={`${formIdBase}-subscribe-form`}
        name={`${formIdBase}-subscribe-form`}
        className="validate mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
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
      <p className="mt-6 text-xs text-white/50">Launching first on iOS.</p>
    </div>
  );
}

