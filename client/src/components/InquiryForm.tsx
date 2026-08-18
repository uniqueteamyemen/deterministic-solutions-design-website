import { Check, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  inquiryReferralSourceDescriptions,
  inquiryReferralSourceLabels,
  inquiryReferralSources,
  inquirySchema,
  inquiryTopicLabels,
  inquiryTopics,
  type InquiryInput,
} from "@shared/inquiry";

const initialForm: InquiryInput = {
  fullName: "",
  email: "",
  organization: "",
  topic: "architecture",
  referralSource: "direct",
  message: "",
  website: "",
};

export default function InquiryForm() {
  const [form, setForm] = useState<InquiryInput>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const update = (field: keyof InquiryInput, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      setStatus("error");
      setMessage(parsed.error.issues[0]?.message ?? "Please review the form.");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error || "The inquiry channel is unavailable.");
      setStatus("success");
      setMessage("Inquiry received. The team will review the stated scope and reply by email.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The inquiry channel is unavailable.");
    }
  };

  return (
    <section className="inquiry-section" aria-labelledby="inquiry-title">
      <div className="container inquiry-grid">
        <div className="inquiry-intro">
          <div className="section-index">02 <span>/</span> Managed inquiry channel</div>
          <div className="section-kicker">Scope before response</div>
          <h2 id="inquiry-title">Start with a<br /><em>clear signal.</em></h2>
          <p>Submit the operating context, desired outcome, and constraint. The request is stored in DS&amp;D’s managed inquiry register for review; it is not used as a mailing-list subscription.</p>
          <p className="inquiry-boundary">For urgent correspondence or attachments, use <a href="mailto:baker@deterministicsolutionsdesign.com">baker@deterministicsolutionsdesign.com</a>.</p>
        </div>
        <form className="inquiry-form" onSubmit={submit} noValidate>
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input value={form.fullName} onChange={(event) => update("fullName", event.target.value)} autoComplete="name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" value={form.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" required />
            </label>
          </div>
          <div className="form-grid">
            <label>
              <span>Organization <i>optional</i></span>
              <input value={form.organization} onChange={(event) => update("organization", event.target.value)} autoComplete="organization" />
            </label>
            <label>
              <span>Inquiry focus</span>
              <select value={form.topic} onChange={(event) => update("topic", event.target.value)}>
                {inquiryTopics.map((topic) => <option key={topic} value={topic}>{inquiryTopicLabels[topic]}</option>)}
              </select>
            </label>
          </div>
          <label>
            <span>Context and intended outcome</span>
            <textarea value={form.message} onChange={(event) => update("message", event.target.value)} minLength={20} maxLength={4000} required />
          </label>
          <fieldset className="referral-fieldset">
            <legend>How did you find DS&amp;D?</legend>
            <p className="referral-help">This optional campaign signal is stored only with this inquiry. It is not used to create a mailing list or a visitor profile.</p>
            <div className="referral-options">
              {inquiryReferralSources.map((source) => {
                const isSelected = form.referralSource === source;
                return (
                  <label className={`referral-option${isSelected ? " is-selected" : ""}`} key={source}>
                    <input type="radio" name="referralSource" value={source} checked={isSelected} onChange={(event) => update("referralSource", event.target.value)} />
                    <span className="referral-option-copy"><b>{inquiryReferralSourceLabels[source]}</b><small>{inquiryReferralSourceDescriptions[source]}</small></span>
                    <span className="referral-signal" aria-hidden="true"><i /><i /><i /></span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <label className="inquiry-honeypot" aria-hidden="true">
            <span>Website</span>
            <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update("website", event.target.value)} />
          </label>
          <div className="inquiry-actions">
            <button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending inquiry" : <>Submit inquiry <Send size={15} /></>}</button>
            {status !== "idle" && <p className={`inquiry-status inquiry-${status}`} role="status">{status === "success" && <Check size={15} />}{message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
