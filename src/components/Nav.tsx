import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

/** The menu band — links only, centered. Static band in flow (below the
 *  hero on home; at the top of sub-pages). */
export default function Nav() {
  return (
    <nav aria-label="Primary">
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
