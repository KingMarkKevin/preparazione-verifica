import { Component, OnInit, Input } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-c-spam',
  templateUrl: './c-spam.component.html',
  styleUrls: ['./c-spam.component.css']
})
export class CSpamComponent implements OnInit {
  @Input() name:string;
  constructor() {

   }

  ngOnInit() {
  }

}
