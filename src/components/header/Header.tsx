import { AppBar, Button, Toolbar } from '@mui/material';
import HomeButton from './header-buttons/HomeButton';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const [pages, setPages] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch('/api/pages');
        const data = await response.json();
        setPages(data);
      } catch (error) {
        console.error('Error fetching pages:', error);
      }
    };

    fetchPages();
  }, []);

  const routeToPage = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <>
      <AppBar position="fixed" className="bg-transparent shadow-none">
        <Toolbar
          variant="dense"
          className="bg-slate-50 flex flex-row justify-start items-center w-full border rounded border-slate-300 space-x-2"
        >
          <HomeButton onClick={() => routeToPage('/')} />
          {pages.map((page) => (
            <Button key={page} variant="outlined" onClick={() => routeToPage(page)}>
              {page}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
