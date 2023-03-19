/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosClient } from "@/libs/axiosClient";
import { ContactType } from "@/features/contact/types";
import { contactSchema } from "@/features/contact/schema";
import { button } from "@/styles/buttonStyle";
import Section from "@/components/layouts/content/Section";
import FieldWrapper from "@/components/forms/FieldWrapper";
import { contactCss } from "../styles";

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type StatusType = "SENDING" | "SUCCESS" | "ERROR" | null;

export function Contact(): JSX.Element {
  const [status, setStatus] = useState<StatusType>(null);
  const form = useForm<ContactType>({
    mode: "all",
    defaultValues,
    resolver: zodResolver(contactSchema),
  });

  async function sendEmail(data: ContactType) {
    setStatus("SENDING");
    try {
      const res = await axiosClient.post("/contact", data);
      setStatus("SUCCESS");
    } catch (error) {
      setStatus("ERROR");
      console.log(error);
    } finally {
      setTimeout(() => {
        setStatus(null);
        form.reset(defaultValues);
      }, 3000);
    }
  }

  return (
    <Section id="contact" title="Contact" subtitle="get in touch">
      {status === "SUCCESS" ? (
        <div css={[contactCss.alert, contactCss.alertSuccess]} role="alert">
          メッセージの送信に成功しました
        </div>
      ) : status === "ERROR" ? (
        <div css={[contactCss.alert, contactCss.alertDanger]} role="alert">
          メッセージの送信に失敗しました
        </div>
      ) : null}

      <form css={contactCss.form} onSubmit={form.handleSubmit(sendEmail)}>
        <FieldWrapper
          label="Name"
          id="name"
          className="name"
          error={form.formState.errors.name}
        >
          <input
            css={contactCss.input}
            type="text"
            id="name"
            {...form.register("name")}
          />
        </FieldWrapper>

        <FieldWrapper
          label="Email"
          id="email"
          className="email"
          error={form.formState.errors.email}
        >
          <input
            css={contactCss.input}
            type="email"
            id="email"
            {...form.register("email")}
          />
        </FieldWrapper>

        <FieldWrapper
          label="Subject"
          id="subject"
          className="subject"
          error={form.formState.errors.subject}
        >
          <input
            css={contactCss.input}
            type="text"
            id="subject"
            {...form.register("subject")}
          />
        </FieldWrapper>

        <FieldWrapper
          label="Message"
          id="message"
          className="message"
          error={form.formState.errors.message}
        >
          <textarea
            css={contactCss.input}
            rows={4}
            id="message"
            {...form.register("message")}
          ></textarea>
        </FieldWrapper>

        <button
          css={[button, contactCss.button]}
          type="submit"
          disabled={status === "SENDING"}
        >
          {status === "SENDING" ? "Sending" : "Send Message"}
        </button>
      </form>
    </Section>
  );
}
