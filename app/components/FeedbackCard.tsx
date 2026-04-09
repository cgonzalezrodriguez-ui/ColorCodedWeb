export default function FeedbackCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center sm:p-8">
      <h2 className="text-2xl font-semibold">Have feedback?</h2>
      <p className="mt-4 mx-auto max-w-2xl text-white/70">
        Suggestions, ideas, or things that feel off — we want to hear it.
      </p>
      <a href="mailto:support@color-coded.app" className="mt-8 inline-block rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.05]">Send us a message</a>
    </div>
  );
}
