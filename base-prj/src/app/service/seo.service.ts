import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getDOM,DomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';

@Injectable()
export class SeoService {
  private titleService: Title;

  private headElement: HTMLElement;

  private metaDescription: HTMLElement;

  private robots: HTMLElement;

  private DOM: DomAdapter;
  constructor(titleService:Title) {
    this.titleService = titleService;
    this.DOM = getDOM();

    this.headElement = this.DOM.query('head');
   }

}
