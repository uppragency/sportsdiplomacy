'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'sd-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (choice: 'all' | 'essential') => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  return (
    <div className={`cookie-banner${visible ? ' is-visible' : ''}`} role="dialog" aria-label="Consimțământ cookie-uri">
      <p>
        Folosim cookie-uri esențiale pentru funcționarea site-ului. Poți afla mai multe în
        politica noastră de confidențialitate.
      </p>
      <div className="cookie-actions">
        <button className="cookie-decline" onClick={() => dismiss('essential')}>Doar esențiale</button>
        <button className="cookie-accept" onClick={() => dismiss('all')}>Accept toate</button>
      </div>
    </div>
  );
}
