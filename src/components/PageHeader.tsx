// Template-enhanced component
// Generated: 2025-08-20T01:54:10.631Z
// Section: page-header
// Category: page-header
// Template ID: page-header-l001

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function PageHeaderTitleAndBreadcrumbs() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "About Our Company" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-12 sm:py-16 lg:py-20">
          <nav className="flex items-center text-sm text-muted-foreground mb-4">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="mx-2 text-muted-foreground" />
                )}
                <Link href={breadcrumb.href} className="hover:text-foreground">
                  {breadcrumb.label}
                </Link>
              </div>
            ))}
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            About Our Company
          </h1>
        </div>
      </div>
    </section>
  );
}