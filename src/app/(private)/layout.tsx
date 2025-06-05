import { redirect } from 'next/navigation';
import React from 'react';

async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = true;
  const isAdmin = user;
  if (!isAdmin) redirect('/');
  return <div>{children}</div>;
}

export default layout;
