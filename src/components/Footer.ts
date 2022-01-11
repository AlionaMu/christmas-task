import { BaseComponent } from './BaseComponent';

export class Footer extends BaseComponent {
  constructor() {
    super('footer', ['footer']);

    this.element.innerHTML = `
    <div class="footer-container">
      <a class="github" href="https://github.com/rolling-scopes-school/alionamu-JSFE2021Q3"
       target="_blank" rel="noopener noreferrer"></a>
      <span class="year">2021</span>
      <a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener">
        <span class="rss-year">'21</span>
      </a>
    </div>
    `;
  }
}