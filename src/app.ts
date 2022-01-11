import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './../src/view/Home';


export class App {
  private readonly home: Home;

  private readonly header: Header;
  
  private readonly footer: Footer;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.element);

    this.home = new Home();
    this.rootElement.appendChild(this.home.element);

    this.footer = new Footer();
    this.rootElement.appendChild(this.footer.element);
  }
}