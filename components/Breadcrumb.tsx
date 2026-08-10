import Link from 'next/link';

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Acasă</Link>
      <span className="breadcrumb-sep">/</span>
      <span className="breadcrumb-current">{current}</span>
    </nav>
  );
}
