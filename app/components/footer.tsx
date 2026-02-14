import React from "react";

type FooterProps = {
  address?: string;
  phone?: string;
  email?: string;
};

export default function SiteFooter({
  address = "Nugegoda Business Center 80 Nawala Road, Nugegoda, Sri Lanka",
  phone = "+94 77 707 2265",
  email = "info@elephant-island.com",
}: FooterProps) {
  return (
    <footer className="bg-[#0a0a0a] text-white/80">
      {/* Top grid */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 md:grid-cols-4">
          {/* Address */}
          <div className="border-white/10 py-10 md:border-r md:px-8">
            <div className="text-xs font-semibold tracking-[0.25em] text-white/40">
              ADDRESS
            </div>
            <div className="mt-4 text-sm text-white/85">{address}</div>
          </div>

          {/* Phone */}
          <div className="border-white/10 py-10 md:border-r md:px-8">
            <div className="text-xs font-semibold tracking-[0.25em] text-white/40">
              PHONE | WHATSAPP
            </div>
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="mt-4 block text-sm text-white/85 hover:text-white"
            >
              {phone}
            </a>
          </div>

          {/* Email */}
          <div className="border-white/10 py-10 md:border-r md:px-8">
            <div className="text-xs font-semibold tracking-[0.25em] text-white/40">
              EMAIL
            </div>
            <a
              href={`mailto:${email}`}
              className="mt-4 block text-sm text-white/85 hover:text-white"
            >
              {email}
            </a>
          </div>

          {/* Social */}
          <div className="py-10 md:px-8">
            <div className="text-xs font-semibold tracking-[0.25em] text-white/40">
              SOCIAL
            </div>

            <div className="mt-6 flex items-center gap-5">
              <SocialIcon label="Facebook" href="#" icon="facebook" />
              <SocialIcon label="Twitter" href="#" icon="twitter" />
              <SocialIcon label="Pinterest" href="#" icon="pinterest" />
              <SocialIcon label="YouTube" href="#" icon="youtube" />
              <SocialIcon label="Instagram" href="#" icon="instagram" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/60">
            © Copyright Elephant Island 2026
          </div>

          <div className="flex items-center gap-8 text-xs font-semibold tracking-[0.25em] text-white/40">
            <a className="hover:text-white" href="/privacy">
              PRIVACY
            </a>
            <a className="hover:text-white" href="/terms">
              TERMS OF USE
            </a>
            <a className="hover:text-white" href="/policy">
              POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: "facebook" | "twitter" | "pinterest" | "youtube" | "instagram";
}) {
  const common = "h-5 w-5 text-white/80 hover:text-white transition-colors";

  return (
    <a href={href} aria-label={label} className="inline-flex">
      {icon === "facebook" && (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.8c-.5-.1-1.6-.2-3-.2-2.9 0-4.9 1.8-4.9 5V11H6v3h2.8v8h4.7Z" />
        </svg>
      )}

      {icon === "twitter" && (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.3L6.4 22H3.3l7.3-8.4L1 2h6.3l4.4 5.7L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z" />
        </svg>
      )}

      {icon === "pinterest" && (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.6-6.7s-.4-.8-.4-2c0-1.9 1.1-3.3 2.5-3.3 1.2 0 1.7.9 1.7 1.9 0 1.2-.8 3-1.2 4.6-.3 1.3.7 2.4 2 2.4 2.4 0 4.1-3 4.1-6.6 0-2.7-1.8-4.7-5.1-4.7-3.7 0-6 2.8-6 5.9 0 1.1.3 1.9.8 2.5.2.2.2.3.2.6l-.3 1c-.1.4-.4.5-.7.4-2-.8-2.9-3-2.9-5.4 0-4 3.4-8 9.2-8 4.8 0 7.9 3.5 7.9 7.2 0 4.9-2.7 8.6-6.7 8.6-1.3 0-2.6-.7-3-1.5l-1 3.9c-.3 1-.9 2.2-1.4 3A10 10 0 1 0 12 2Z" />
        </svg>
      )}

      {icon === "youtube" && (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.5 31.5 0 0 0 2 12a31.5 31.5 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 22 12a31.5 31.5 0 0 0-.4-4.8ZM10.2 15.3V8.7L15.9 12l-5.7 3.3Z" />
        </svg>
      )}

      {icon === "instagram" && (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.8 6.7a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
        </svg>
      )}
    </a>
  );
}
