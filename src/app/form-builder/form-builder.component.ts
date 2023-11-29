import { Component } from '@angular/core';
import { DataFormComponent } from '../data-form/data-form.component';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
  constructor(public dialog: MatDialog) { }
  done: string[] = ['test'];
  textBox = `<mat-form-field [style.fontSize]="fontSize.value" appearance="fill">
 <mat-label>Autosize textarea</mat-label>
 <textarea matInput
           cdkTextareaAutosize
           #autosize="cdkTextareaAutosize"
           cdkAutosizeMinRows="1"
           cdkAutosizeMaxRows="5"></textarea>
</mat-form-field>
`
  element = [
    'Input',
    'TextBox',
    'RadioButton',
    'DatePicker',
    'Checkbox',
    'Progress Bar'
  ];
  tempData: any = [{ name: 'ram' }]

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    console.log(event.previousContainer, event.container, "event >>>>>>>>>>>> ", event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.tempData.push({ name: 'ram' })
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DataFormComponent, {
      width: '800px',
      data: { name: 'this.name', animal: 'this.animal' },
      disableClose: true,
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe((...result) => {
      console.log('The dialog was closed', result);
      // Handle the form result here
    });
  }
}
