import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import currentLanguage from '@salesforce/i18n/lang';

import yextResults from '@salesforce/resourceUrl/yextResults';

export default class SearchResults extends LightningElement {
  connectedCallback() {
    const container = document.createElement("div");
    container.id = "answers-container";
    if (currentLanguage !== "en-US") {
      container.setAttribute("data-path", `${currentLanguage}/index.html`);
    }
    this.template.appendChild(container);
    loadScript(this, yextResults).then(() => {
      AnswersExperienceFrame.init({});
    });
    console.log(currentLanguage);
  }
}