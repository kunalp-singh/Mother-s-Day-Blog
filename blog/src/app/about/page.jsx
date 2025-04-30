"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About Me</h1>
      
      <Image
        src="/profile.jpg"  // Put a profile image in public/profile.jpg
        alt="Profile Picture"
        width={200}
        height={200}
        style={{ borderRadius: "75%", marginBottom: "1.5rem" }}
      />
      
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
        Hello! I'm <strong>Kunal P. Singh</strong>, a passionate developer who loves building websites and learning new technologies.
        I specialize in frontend development (React, Next.js) and am currently exploring backend technologies too!
      </p>

      <p style={{ fontSize: "1.2rem", marginTop: "1rem", lineHeight: "1.8" }}>
        When I'm not coding, I enjoy reading, editing videos, and exploring new places. 
        This blog is my tribute to all the mothers out there who are raising their children with love and care.
      </p>

      <p style={{ fontSize: "1.2rem", marginTop: "2rem", fontWeight: "bold" }}>
        Thanks for visiting!
      </p>
    </div>
  );
}
