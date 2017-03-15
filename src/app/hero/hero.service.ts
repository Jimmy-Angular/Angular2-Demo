import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {Logger} from '../service/logger.service';

const HEROES = [
  new Hero('Windstorm', 'Weather mastery', '中国'),
  new Hero('Mr. Nice', 'Killing them with kindnes', '美国'),
  new Hero('Magneta', 'Manipulates metalic objects', '法国')
];

@Injectable()
export class HeroService {
  private heroes: Hero[] = HEROES;

  constructor(private logger: Logger) {
  }

  getHeroes() {
    return this.heroes;
  }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
/**
 * Created by jimmy on 2017/3/13.
 */
