'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './globals.css'
import Header from "@/shared/components/Header.component";

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <QueryClientProvider client={queryClient}>
        <body className="scrollbar-gutter-stable">
          <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              <Header />
              {children}
            </div>
          </main>
        </body>
      </QueryClientProvider>
    </html>
  );
}
