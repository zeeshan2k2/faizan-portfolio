import type { ReactNode } from "react";

import { FloatingNav } from "@/components/layout/FloatingNav";
import { TopBar } from "@/components/layout/TopBar";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-shell">
      <TopBar />
      <FloatingNav />
      <main className="site-shell__content">{children}</main>
    </div>
  );
}
