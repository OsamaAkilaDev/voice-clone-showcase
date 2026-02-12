import React from "react";
import CloneClient from "../components/CloneClient";

/**
 * Server Component: Entry point for /clone
 * Reads the backend URL at runtime and passes it to the client component.
 */
export default async function ClonePage() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
  
  return <CloneClient backendUrl={backendUrl} />;
}
