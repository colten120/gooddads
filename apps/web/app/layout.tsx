import "./globals.css";
import "@gooddads/ui/styles.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Good Dads',
  description: 'A place for dads to be good', // TODO: Update this to be more descriptive
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-background text-foreground'>
        <main className='flex min-h-screen flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
