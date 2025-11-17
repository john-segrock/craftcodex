import {createNavigation} from 'next-intl/navigation';
import {locales, pathnames} from './navigation-config';

export const {Link, redirect, usePathname, useRouter} =
  createNavigation({locales, pathnames});