"use client"
import Image from "next/image";
import { NavBar, PageContainer } from "./styles";
import { use, useState } from "react";
import { useUser } from "@/hooks/useUser";
import { useClasses } from "@/hooks/useClasses";
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

export default function Home() {
  const user = useUser();
  const classes = useClasses(user?.id);
  const [className, setClassName] = useState("");
  console.log("CLASSES:", classes);

  useEffect(() => {
    async function signInTestUser() {
      const { error } = await supabase.auth.signInWithPassword({
        email: "test@example.com", // Replace with your actual test user
        password: "password123",   // Replace with actual password
      });
  
      if (error) {
        console.error("Login failed:", error.message);
      } else {
        console.log("Signed in test user");
      }
    }
  
    signInTestUser();
  }, []);

  return (
    <PageContainer> 
      <NavBar> 
      <p style={{fontSize: '48px', color: 'white', marginLeft: '12px', marginTop: '24px' }}> nudge </p>
      <p style={{fontSize: '24px', color: 'white', marginLeft: '12px'}}> Classes </p>
      <ul>
        {classes.map((c) => (
          <li key={c.id}>{c.name}</li>
          ))}
      </ul>
  <div style={{ marginTop: '12px', marginLeft: '12px' }}>
    <input
      type="text"
      value={className}
      onChange={(e) => setClassName(e.target.value)}
      placeholder="Enter class name"
      style={{ padding: '6px 10px', marginRight: '8px' }}
    />
    <button onClick={() => addClass(user?.id, className)}>
      Add Class
    </button>
  </div>
      </NavBar>
    </PageContainer>
  );
  function addClass(userId: string, name: string) {
    if (!userId || !name.trim()) return;
  
    supabase.from("classes")
      .insert([{ name, user_id: userId }])
      .then(({ data, error }) => {
        if (error) {
          console.error("Insert error:", error);
        } else {
          console.log("Inserted:", data);
          setClassName("");
        }
      });
  }
}
