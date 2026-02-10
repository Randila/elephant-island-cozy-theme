"use client";

import React, { useMemo, useState } from "react";

type ContactCard = {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
};

export default function ContactSplitSection() {
  const cards: ContactCard[] = useMemo(
    () => [
      {
        title: "Accommodation",
        subtitle: "Enquiries & Bookings",
        phone: "+679 345 7788",
        email: "stay@elis.com",
      },
      {
        title: "Restaurants",
        subtitle: "Enquiries & Bookings",
        phone: "+679 345 2255",
        email: "dine@elis.com",
      },
      {
        title: "Day Spa & Gym",
        subtitle: "Enquiries & Bookings",
        phone: "+679 345 6677",
        email: "wellness@elis.com",
      },
      {
        title: "Banquet & Weddings",
        subtitle: "Enquiries & Bookings",
        phone: "+679 334 2211",
        email: "events@elis.com",
      },
    ],
    []
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // hook your API here
    console.log("submit", form);
  }

  return (
    <section className="w-full bg-white">
      <div className="grid min-h-[85vh] grid-cols-1 lg:grid-cols-2">
        {/* LEFT: contact info */}
        <div className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[660px]">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-black/50">
              CONTACT INFORMATION
            </p>

            <h2 className="mt-6 font-marcellus text-4xl tracking-tight text-black/90 sm:text-5xl">
              Elephant Island
            </h2>

            <div className="mt-8 space-y-2 text-[15px] leading-7 text-black/60">
              <p>572 – 636 Victoria Parade</p>
              <p>P.O. Box 19217</p>
              <p>Suva, Fiji</p>
            </div>

            <div className="mt-6 space-y-2 text-[15px] leading-7 text-black/70">
              <p>
                <span className="font-semibold text-black/80">Phone Number:</span>{" "}
                +679 345 67 88
              </p>
              <p>
                <span className="font-semibold text-black/80">Email:</span>{" "}
                info@elis.com
              </p>
            </div>

            <div className="my-10 h-px w-full bg-black/15" />

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-14">
              {cards.map((c) => (
                <div key={c.title}>
                  <h3 className="font-marcellus text-2xl text-black/90">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[13px] font-semibold text-black/60">
                    {c.subtitle}
                  </p>

                  <div className="mt-3 space-y-1 text-[14px] text-black/60">
                    <p>
                      <span className="text-black/70">Phone:</span> {c.phone}
                    </p>
                    <p>
                      <span className="text-black/70">Email:</span> {c.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: image background + form card */}
        <div className="relative overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/form.jpg)" }} // 👈 change
          />
          {/* subtle overlay (optional) */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Form card */}
          <div className="relative z-10 flex min-h-[85vh] items-center justify-center px-6 py-16 sm:px-10">
            <div className="w-full max-w-md bg-white px-6 py-12 shadow-2xl sm:px-12 sm:py-14">
              <p className="text-center text-[11px] font-semibold tracking-[0.18em] text-black/50">
                CONTACT FORM
              </p>

              <h3 className="mt-5 text-center font-marcellus text-4xl text-black/90 sm:text-4xl">
                Let&apos;s Start A Conversation
              </h3>

              <form onSubmit={onSubmit} className="mt-10 space-y-5">
                <Field
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your Name"
                />
                <Field
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Your Email"
                />
                <Field
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="Subject"
                />

                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full rounded-none border border-black/10 bg-white px-4 py-4 text-[14px] text-black/70 outline-none transition focus:border-black/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#b79b73] py-4 text-center text-[13px] font-semibold tracking-wide text-white transition hover:brightness-95"
                >
                  Send Your Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-none border border-black/10 bg-white px-4 py-4 text-[14px] text-black/70 outline-none transition focus:border-black/30"
    />
  );
}
