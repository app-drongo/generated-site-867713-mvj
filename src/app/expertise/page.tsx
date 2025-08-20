import PageHeader from '../../components/PageHeader';
import Features from '../../components/Features';

export default function ExpertisePage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeader />
      </section>
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>
    </main>
  );
}