import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if (sessionStorage.getItem("access_token") && sessionStorage.getItem(CommonTypes.LOGGED)) {
    //   return true;
    // }
    //
    // this.router.navigate(['/auth/login'], {queryParams: {returnUrl: state.url}});

    return true;
  }

}
