import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Object } from 'src/app/shared/object';

@Component({
  selector: 'app-objs-list',
  templateUrl: './objs-list.component.html',
  styleUrls: ['./objs-list.component.scss']
})
export class ObjsListComponent implements OnInit {
  @Input() objects?: Object[];
  @Output() selected = new EventEmitter<Object>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(o:Object){
    this.selected.emit(o);
  }
}
