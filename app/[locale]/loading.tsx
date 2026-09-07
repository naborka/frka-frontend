import { FeedSkeleton } from '@/components/frka/feed-skeleton';

export default function Loading() {
  return (
    <main aria-busy="true" aria-live="polite" className="min-h-dvh">
      <FeedSkeleton rows={6} withHeader />
    </main>
  );
}
