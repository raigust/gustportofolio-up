import { createFileRoute } from "@tanstack/react-router";
import { LeftColumn } from "@/components/portofolio/LeftColumn";
import { Gallery } from "@/components/portofolio/Gallery";
import { MobileNav } from "@/components/portofolio/MobileNav";
import { ScrollProgress } from "@/components/portofolio/ScrollProgress";

const title = "Raihan Gusti Anugrah — Portfolio";
const description = "Portfolio of Raihan Gusti Anugrah, a student of Brawijaya University.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ScrollProgress />
      <MobileNav />
      <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
        <main className="w-full min-h-0 border-left-hairline bg-left lg:h-screen lg:w-[26%] lg:overflow-y-auto lg:overscroll-contain lg:border-r">
          <LeftColumn />
        </main>
        <aside
          id="work"
          aria-label="Selected work"
          className="w-full min-h-0 bg-gallery lg:h-screen lg:w-[74%] lg:overflow-y-auto lg:overscroll-contain"
        >
          <Gallery />
        </aside>
      </div>
    </>
  );
}
