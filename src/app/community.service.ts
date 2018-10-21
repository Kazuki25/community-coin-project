import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Community } from './community';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Wallet } from './wallet';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private CommunitiesUrl = 'api/communities';  // URL to web api
  private WalletsUrl = 'api/wallets';  // URL to web api
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('CommunityService: ' + message);
  }

  getCommunities(): Observable<Community[]> {
    // send the message _after_ fetching the Communities
    this.messageService.add('CommunityService: fetched Communities');
    return this.http.get<Community[]>(this.CommunitiesUrl)
      .pipe(
        tap(Communities => this.log(`fetched Communities`)),
        catchError(this.handleError('getCommunities',[]))
      );
  }

  getWallets(): Observable<Wallet[]> {
    // send the message _after_ fetching the wallets
    this.messageService.add('CommunityService: fetched wallets');
    return this.http.get<Wallet[]>(this.WalletsUrl)
      .pipe(
        tap(wallets => this.log(`fetched wallets`)),
        catchError(this.handleError('getwallets',[]))
      );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
