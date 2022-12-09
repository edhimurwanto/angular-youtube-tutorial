import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  checkCredential() {
    const credentials = sessionStorage.getItem('credentials')
    return credentials !== null
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isLoggedIn = this.checkCredential()
    if (!isLoggedIn) {
      alert('Please login')
      this.router.navigate(['auth/login'], {
        queryParams: {
          returnUrl: state.url
        }
      })

      return false
    }

    return true
  }
}
