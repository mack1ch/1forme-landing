import { Hero } from '@/widgets/hero/ui/Hero';
import { Solutions } from '@/widgets/solutions/ui/Solutions';
import { Automation } from '@/widgets/automation/ui/Automation';
import { Payroll } from '@/widgets/payroll/ui/Payroll';
import { Communication } from '@/widgets/communication/ui/Communication';
import { CustomSites } from '@/widgets/custom-sites/ui/CustomSites';
import { FAQ } from '@/widgets/faq/ui/FAQ';
import { CTA } from '@/widgets/cta/ui/CTA';
import { Stats } from '@/widgets/stats/ui/Stats';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Solutions />
      <Automation />
      <Payroll />
      <Communication />
      <CustomSites />
      <FAQ />
      <CTA />
    </main>
  );
}
