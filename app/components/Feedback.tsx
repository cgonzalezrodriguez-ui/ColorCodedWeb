import Container from "./Container";

export default function Feedback() {
  return (
    <section className="pb-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-white">Have feedback?</h2>
          <p className="mt-4 text-base text-white/60">We are actively building and want to hear from you. Suggestions, ideas, things that feel off - all of it helps.</p>
          <a href="mailto:support@color-coded.app" className="mt-6 inline-block rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/5">Send us a message</a>
        </div>
      </Container>
    </section>
  );
}
