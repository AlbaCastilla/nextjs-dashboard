import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*<body>{children}</body>*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/*.className is how Next.js dynamically attaches the generated CSS class for the font, it creates an automatic class to attach, for example_inter123 and stores it in ${inter.className */}
      {/*antialiased makes sure text doesnt look pixeled and smoothes out with the backround color */}
    </html>
  );
}
