import { useState } from 'react';
import { request } from '../api';

export default function usePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function post(path, body) {
    setLoading(true);
    setError('');

    try {
      return await request(path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { post, loading, error };
}
