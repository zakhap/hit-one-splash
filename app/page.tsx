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
