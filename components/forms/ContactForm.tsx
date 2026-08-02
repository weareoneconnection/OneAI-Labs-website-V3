"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    fields: [
      { name: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
      { name: "company", label: "Company / Project", type: "text", placeholder: "Company or project name", required: false },
      { name: "interest", label: "Interested in", type: "text", placeholder: "Core / Agent OS / Studio / OneVideo / Trading", required: true }
    ],
    message: "Message",
    messagePlaceholder: "What do you want to build?",
    note: "Submit your request and our team will contact you about the best OneAI Labs solution for your project. Official email:",
    successTitle: "Request received",
    successBody: "Thanks for reaching out. Our team will review your request and get back to you at the email you provided. For anything urgent, reach us directly at",
    sendAnother: "Send another request",
    error: "Something went wrong sending your request. Please try again, or email us directly at",
    submit: "Submit Request",
    sending: "Sending..."
  },
  zh: {
    fields: [
      { name: "name", label: "姓名", type: "text", placeholder: "您的姓名", required: true },
      { name: "email", label: "邮箱", type: "email", placeholder: "you@example.com", required: true },
      { name: "company", label: "公司 / 项目", type: "text", placeholder: "公司或项目名称", required: false },
      { name: "interest", label: "感兴趣的产品", type: "text", placeholder: "Core / Agent OS / Studio / OneVideo / Trading", required: true }
    ],
    message: "需求描述",
    messagePlaceholder: "您想构建什么？",
    note: "提交需求后，我们的团队会与您联系，为您的项目匹配最合适的 OneAI Labs 方案。官方邮箱：",
    successTitle: "已收到您的需求",
    successBody: "感谢您的联系。我们的团队会尽快审阅您的需求，并通过您填写的邮箱回复您。如有紧急事项，请直接联系",
    sendAnother: "再提交一条需求",
    error: "提交失败，请重试，或直接发送邮件至",
    submit: "提交需求",
    sending: "提交中..."
  }
} as const;

const inputClass =
  "mt-3 w-full rounded-2xl border border-white/10 bg-oneai-bg px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-oneai-cyan";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const t = content[locale];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;

    try {
      const response = await fetch(site.contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-3xl border border-oneai-cyan/30 bg-oneai-cyan/[0.06] p-8 text-center shadow-glow md:rounded-[2rem]"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-oneai-cyan" />

        <h2 className="mt-5 text-2xl font-semibold text-white">{t.successTitle}</h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-400">
          {t.successBody}{" "}
          <a
            href={`mailto:${site.email}`}
            className="break-all font-semibold text-oneai-gold hover:text-white"
          >
            {site.email}
          </a>
          .
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan hover:text-oneai-cyan"
        >
          {t.sendAnother}
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-glow sm:p-8 md:rounded-[2rem]"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {t.fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-semibold text-white">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-semibold text-white">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={t.messagePlaceholder}
          className={inputClass}
        />
      </div>

      <input type="hidden" name="_subject" value="New OneAI Labs demo request" />

      <p className="mt-6 text-sm leading-6 text-slate-400">
        {t.note}{" "}
        <a
          href={`mailto:${site.email}`}
          className="break-all font-semibold text-oneai-gold hover:text-white"
        >
          {site.email}
        </a>
        .
      </p>

      {status === "error" ? (
        <p
          className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          {t.error}{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-oneai-gold disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t.sending}
          </>
        ) : (
          t.submit
        )}
      </button>
    </form>
  );
}
