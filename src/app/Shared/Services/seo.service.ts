import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

// SEO tutorial:  https://medium.com/geekculture/seo-in-angular-without-server-side-rendering-fa7d984dd44b
@Injectable({
  providedIn: "root",
})
export class SeoService {
  constructor(
    @Inject(DOCUMENT) private dom,
    private titleSvc: Title,
    private metaSvc: Meta
  ) {}

  updateTitle(title: string){
    this.titleSvc.setTitle(title)
  }

  updateDescription(content: string) {
    this.metaSvc.updateTag({ name: 'description', content })
  }

  updateKeywords(content: string) {
    this.metaSvc.updateTag({ name: 'keywords', content })
  }

  createCanonicalLink(url: string) {
    let link: HTMLLinkElement =
      this.dom.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    this.dom.head.appendChild(link);
  }
}
