import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";

export default function AuthPageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
