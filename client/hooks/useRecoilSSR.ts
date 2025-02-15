import { isSidebarOpenState, tokenState, userThemeState } from '@/recoil/atom';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export function useUserThemeSSR() {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(userThemeState);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? 'light' : value, setValue] as const;
}

export function useSidebarOpenSSR() {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(isSidebarOpenState);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? true : value, setValue] as const;
}

export function useTokenSSR() {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(tokenState);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? '' : value, setValue] as const;
}
