/**
 * Created by jimmy on 2017/3/14.
 */
import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';

@Component({
  selector: 'hero-input',
  templateUrl: './hero-input.component.html',
  styleUrls: ['./hero-input.component.css']
})

export class HeroInputComponent implements OnInit {

  clickMessage = '';
  clicks = 1;
  keyUpMessage = 'Wow,This is input';
  inputKey = '';
  inputKeyPress = '';
  inputKeyEnter = 'Please Click Enter！';
  heroes: string[];

  constructor(private service: HeroService) {
  }

  /**
   * 实现OnInit 来实现初始化数据
   */
  ngOnInit(): void {
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  }

  onClick(){
    this.clickMessage = 'You are my hero!';
  }

  onClickMe(event: any) {
    let eventMsg = event ? 'Event target is ' + event.target.tagName : '';
    this.clickMessage = (`Click #${this.clicks++}. ${eventMsg}`);
  }

  onKeyUp(event: any) {
    this.keyUpMessage = event.target.value;
    this.inputKey = 'event.key:' + event.key + '|' + 'event.target:' + event.target.tagName + '|' + 'event:'
      + event + '|' + "event.target.tag" + event.target.tag;
  }

  onKey(obj: string) {
    this.keyUpMessage = obj;
  }

  onKeyPress(event: KeyboardEvent) {
    this.inputKeyPress = (<HTMLInputElement>event.target).value + "Pressed";
  }

  onEnter(obj: string) {
    this.inputKeyEnter = obj;
  }

  onBlur(obj: string) {
    this.inputKeyEnter = obj;
  }

  /**
   * 添加英雄
   * @param newHero
   */
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}
