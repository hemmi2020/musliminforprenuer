import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Routes publiques
  if (pathname === '/' || 
      pathname.startsWith('/auth') || 
      pathname.startsWith('/subscribe') ||
      pathname.startsWith('/api/auth') ||
      pathname.startsWith('/_next') ||
      pathname.startsWith('/images')) {
    return NextResponse.next();
  }

  // Redirection pour les utilisateurs non authentifiés
  if (!token && (
    pathname.startsWith('/account') ||
    pathname.startsWith('/trainings/') ||
    pathname.startsWith('/admin')
  )) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  // Vérification de l'abonnement pour les formations
  if (token && pathname.startsWith('/trainings/') && 
      (!token.subscriptionStatus || token.subscriptionStatus !== 'active')) {
    return NextResponse.redirect(new URL('/subscribe', req.url));
  }

  // Protection des routes admin
  if (token && pathname.startsWith('/admin') && token.role !== 'admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/account/:path*',
    '/trainings/:path*',
    '/admin/:path*',
    '/api/protected/:path*'
  ]
};