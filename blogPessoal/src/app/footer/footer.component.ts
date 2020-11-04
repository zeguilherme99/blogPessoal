import { Component, OnInit } from '@angular/core';
import { faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faLinkedin} from "@fortawesome/free-brands-svg-icons"
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram

  faLinkedin = faLinkedin

  faFacebook = faFacebook

  constructor() { }

  ngOnInit(): void {
  }

}
