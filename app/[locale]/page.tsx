import { setRequestLocale } from "next-intl/server";
import { HomeExperience } from "@/components/sections/home-experience";
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main id="main">
      <HomeExperience />
    </main>
  );
}
