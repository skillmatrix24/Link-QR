"use client";
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from "@/firebase/client-provider";
import { DynamicBranding } from '@/components/DynamicBranding';
import { TrafficTracker } from '@/components/TrafficTracker';
import { ChatBot } from '@/components/ChatBot';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseClientProvider>
      <DynamicBranding />
      <TrafficTracker />
      {children}
      <Toaster />
      <ChatBot />
    </FirebaseClientProvider>
  );
}
