import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {
  /*fetchRevenue, i remove fetch revenue for part of streaming component 
  because c'est celui donc le chargement prend plus de temps*/
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';
import { Suspense } from 'react'; // part of streaming component
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons'; // part of streaming component

export default async function Page() {
  /*const revenue = await fetchRevenue(); remove all instance of fetch revenue*/
  const latestInvoices = await fetchLatestInvoices();
  //const cardData = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/*<Card
          title="Collected"
          value={cardData.totalPaidInvoices}
          type="collected"
        />
        <Card
          title="Pending"
          value={cardData.totalPendingInvoices}
          type="pending"
        />
        <Card
          title="Total Invoices"
          value={cardData.numberOfInvoices}
          type="invoices"
        />
        <Card
          title="Total Customers"
          value={cardData.numberOfCustomers}
          type="customers"
        />*/}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/*<RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />*/}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
