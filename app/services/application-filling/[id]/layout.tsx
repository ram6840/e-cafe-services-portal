import { sampleApplications } from '../data';

// Generate static params for static export
export function generateStaticParams() {
  return sampleApplications.map((app) => ({
    id: app.id.toString(),
  }));
}

export default function ApplicationDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

