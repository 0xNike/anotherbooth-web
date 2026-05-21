import { BRAND, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer>
      <div>© 2026 {BRAND.name}. All rights reserved.</div>
      <div className="footer-social">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
