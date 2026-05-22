import Link from "next/link";
import { BRAND, LOGO } from "@/lib/constants";

/** A compact logo bar pinned to the top of every page — the brand's
 *  persistent mark, and a link back home. */
export default function LogoBar() {
  return (
    <Link href="/" className="logo-bar" aria-label={`${BRAND.name} — home`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={LOGO.wordmark} alt="" width={743} height={101} />
    </Link>
  );
}
