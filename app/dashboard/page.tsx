import { Metadata } from "next";
import { IssuesSearchParams } from "@/app/lib/definitions";
import Breadcrumbs from "@/app/components/ui/issues/breadcrumbs";
import Issues from "@/app/components/ui/issues/issues";
import Toolbar from "@/app/components/ui/toolbar";
import { IssuesSkeleton } from "@/app/components/ui/skeletons";
import { Suspense } from "react";
import BackToTop from "../components/ui/backToTop";

export const metadata: Metadata = {
  title: "Issues Dashboard",
  description: "Dashboard shows all issues assigned to authenticated user."
};

export default async function Dashboard({
  searchParams
} : {
  searchParams: IssuesSearchParams
}) {

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Issues', href: '/dashboard', active: true}
        ]}
      />
      <div className="flex flex-col gap-4">
        <Toolbar searchParams={searchParams} />
        <Suspense fallback={<IssuesSkeleton />}>
          <Issues searchParams={searchParams} />
        </Suspense>
      </div>
      <BackToTop />
    </main>
  );
}