import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function useUser() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data, error }) => {
      if (data?.user) setUser(data.user);
    });
  }, []);

  return user;
}