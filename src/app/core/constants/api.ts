export class Api {
  public static LOGIN_URL = 'http://localhost:8000/api/v1/auth/login';
  public static GOOGLE_AUTH_URL = 'http://localhost:8000/api/v1/auth/google';
  public static FACEBOOK_AUTH_URL = 'http://localhost:8000/api/v1/auth/facebook';
  public static GITHUB_AUTH_URL = 'http://localhost:8000/api/v1/auth/github';

  public static GET_PROFILE_URL = 'http://localhost:8000/api/v1/auth/profile';

  public static AUTHORS_URL = 'http://localhost:8000/api/v1/author';
  public static PUBLISHERS_URL = 'http://localhost:8000/api/v1/publisher';
  public static CATEGORIES_URL = 'http://localhost:8000/api/v1/category';
  public static GENRES_URL = 'http://localhost:8000/api/v1/genre';
  public static BOOKS_URL = 'http://localhost:8000/api/v1/book';

  public static BORROWS_URL = 'http://localhost:8000/api/v1/borrow';
  public static BORROWED_BOOK_BY_CUSTOMER = 'http://localhost:8000/api/v1/borrow/book-borrowed'
  public static BOOKRETURNS_URL = 'http://localhost:8000/api/v1/bookreturn';
  public static CHARGES_URL = 'http://localhost:8000/api/v1/charge';
  public static CHARGES_BY_CUSTOMER_URL = 'http://localhost:8000/api/v1/charge/show-charges';

  public static CUSTOMERS_URL = 'http://localhost:8000/api/v1/customer';
  public static OPERATORS_URL = 'http://localhost:8000/api/v1/operator';

  public static SETTINGS_URL = 'http://localhost:8000/api/v1/setting';
}