import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMP } from './mock-employees';

@Injectable()
export class EmpService {

    constructor() { }

    //   getHeroes(): Observable<Hero[]> {
    //     // TODO: send the message _after_ fetching the heroes
    //     this.messageService.add('HeroService: fetched heroes');
    //     return of(HEROES);
    //   }

    getHeroes(): Employee[] {
        console.log("in service it will return", EMP);
        return EMP;
    }
}