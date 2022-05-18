import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Library'
  },
  {
    name: 'Books',
    url: '/books/books',
    icon: 'cil-book'
  },
  {
    name: 'Categories',
    url: '/categories/categories',
    icon: 'cil-bookmark'
  },
  {
    name: 'Genres',
    url: '/genres/genres',
    icon: 'cil-blur-linear'
  },
  {
    name: 'Authors',
    url: '/authors/authors',
    icon: 'cil-user'
  },
  {
    name: 'Publishers',
    url: '/publishers/publishers',
    icon: 'cil-library'
  },

  {
    title: true,
    name: 'Transactions'
  },
  {
    name: 'Borrowing',
    url: '/borrows/borrows',
    icon: 'cil-mouse'
  },
  {
    name: 'Book Return',
    url: '/bookreturns/bookreturns',
    icon: 'cil-sync'
  },
  {
    title: true,
    name: 'Users'
  },
  {
    name: 'Customers',
    url: '/customers/customers',
    icon: 'cil-people'
  },
  {
    name: 'Operator',
    url: '/operators/operators',
    icon: 'cil-user-female'
  }
];
