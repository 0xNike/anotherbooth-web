import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section
      className="section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="reveal">
        <p className="section-label">02 — The Flow</p>
        <h2 className="section-title" id="experience-title">
          How it works
        </h2>
      </div>

      <ol className="steps">
        {STEPS.map((step) => (
          <li className="step reveal" key={step.number}>
            <div className="step-num" aria-hidden="true">
              {step.number}
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
