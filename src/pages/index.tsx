import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { getPages } from '@/utils/getPages';

const inter = Inter({ subsets: ['latin'] });

interface HomeProps {
  pages: string[];
}

const routeToPage = (page: string) => {
  window.location.href = `/${page}`;
};

export default function Home({ pages }: HomeProps) {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Button variant="contained" onClick={() => routeToPage('')}>
        Home
      </Button>
      {pages.map((page) => (
        <Button key={page} variant="outlined" onClick={() => routeToPage(page)}>
          {page}
        </Button>
      ))}
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = getPages();
  return {
    props: {
      pages,
    },
  };
};
