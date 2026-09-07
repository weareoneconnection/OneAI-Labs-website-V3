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
      { name: "industry", label: "Industry", type: "text", placeholder: "Construction, media, finance, internal operations…", required: true },
      {
        name: "need", label: "What you are trying to do", type: "select", required: true,
        options: [
          "An AI agent that can act in our operations",
          "A model trained or fine-tuned on our data",
          "AI inside a product we are building",
          "A ready-made solution for our industry",
          "Not sure yet — want to talk it through"
        ]
      },
      {
        name: "stage", label: "Where you are today", type: "select", required: true,
        options: [
          "An idea, nothing built",
          "We have the data, not the system",
          "We have a system this has to connect to",
          "Something is already running and needs fixing"
        ]
      }
    ],
    choose: "Choose one",
    message: "The problem, in your own words",
    messagePlaceholder: "What task or decision do you want handled? Who is accountable for it today, and what does an error cost you? Concrete beats general.",
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
      { name: "industry", label: "所在行业", type: "text", placeholder: "建筑、影视、金融、内部运营……", required: true },
      {
        name: "need", label: "你想做成什么", type: "select", required: true,
        options: [
          "一个能在业务里动手的 AI 智能体",
          "用我们自己的数据训练或微调模型",
          "把 AI 装进我们正在做的产品里",
          "我们行业已经做好的现成方案",
          "还不确定——想先聊聊"
        ]
      },
      {
        name: "stage", label: "现在到哪一步了", type: "select", required: true,
        options: [
          "只有想法，还没开始",
          "数据有了，系统还没有",
          "有一个系统，这东西必须接进去",
          "已经在跑了，但需要修"
        ]
      }
    ],
    choose: "请选择",
    message: "用你自己的话描述问题",
    messagePlaceholder: "你想让它处理什么任务或决策？今天这件事谁负责？出一次错的代价是什么？越具体越有用。",
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
        {t.fields.map((field) => {
          const options = "options" in field ? field.options : undefined;
          return (
            <div key={field.name} className={options ? "md:col-span-2" : undefined}>
              <label htmlFor={field.name} className="block text-sm font-semibold text-white">
                {field.label}
              </label>
              {options ? (
                <select id={field.name} name={field.name} required={field.required} defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    {t.choose}
                  </option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={"placeholder" in field ? field.placeholder : undefined}
                  className={inputClass}
                />
              )}
            </div>
          );
        })}
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

      <input type="hidden" name="_subject" value="New OneAI Labs enquiry" />

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
