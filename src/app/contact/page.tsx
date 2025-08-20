import PageHeader from '../../components/PageHeader';
import Contact from '../../components/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeader />
      </section>
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </main>
  );
}