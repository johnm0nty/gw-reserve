import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'gw-exercise-child',
  templateUrl: './exercise-child.component.html',
  styleUrls: ['./exercise-child.component.css']
})
export class ExerciseChildComponent implements OnInit, OnChanges {
  @Input() public recordPropertyOnChild
  @Output() public onEditRecord = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {}
  ngOnChanges (changes: SimpleChanges) {
    console.log(changes["recordPropertyOnChild"])
  }

  pretendEdit () {
    alert("Editing!")

    this.onEditRecord.emit(this.recordPropertyOnChild + " passed back")
  }
}
