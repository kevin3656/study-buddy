import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function useClasses(userId?: string) {
  const [classes, setClasses] = useState<any[]>([]);

  useEffect(() => {
    if (!userId) return;

    // Initial fetch
    const fetchClasses = async () => {
      const { data, error } = await supabase
        .from("classes")
        .select("*")
        .eq("user_id", userId);
      if (!error && data) setClasses(data);
    };

    fetchClasses();

    // Real-time subscription
    const subscription = supabase
      .channel("classes-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "classes", filter: `user_id=eq.${userId}` },
        (payload) => {
          console.log("Change received:", payload);
          fetchClasses(); // Refetch after change
        }
      )
      .subscribe();

    // Cleanup
    return () => {
      supabase.removeChannel(subscription);
    };
  }, [userId]);

  return classes;
}