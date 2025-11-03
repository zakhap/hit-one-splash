'use client';

import { usePrivy } from '@privy-io/react-auth';
import { useState, useEffect } from 'react';

export default function Home() {
  const { ready, authenticated, login, user } = usePrivy();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (authenticated && !showSuccess) {
      setShowSuccess(true);
    }
  }, [authenticated, showSuccess]);

  const disableLogin = !ready || (ready && authenticated);

  return (
    <div style={{ maxWidth: '600px', margin: '100px auto', padding: '20px', fontFamily: 'monospace' }}>
      {!showSuccess ? (
        <>
          <h1>HitOne</h1>
          <p>Join the waitlist.</p>
          <br />
          <button disabled={disableLogin} onClick={login}>
            {!ready ? 'Loading...' : 'Sign In'}
          </button>
          <br />
          <br />
          <a href="https://x.com/hitdotone" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </>
      ) : (
        <>
          <h1>You&apos;re on the list!</h1>
          <p>We&apos;ll notify you at {user?.email?.address}</p>
        </>
      )}
    </div>
  );
}
