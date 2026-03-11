import Container from "./Container";
import WaitlistCard from "./WaitlistCard";

export default function Waitlist() {
  return (
    <section id="cta" className="pb-20">
      <Container>
        <WaitlistCard formIdBase="mc-embedded" />
      </Container>
    </section>
  );
}
