import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sbc-button',
  template: `
    <button
      class="btn" 
      [ngClass]="[type, isLoading || isDisabled ? 'disabled' : '']"
      [disabled]="isLoading || isDisabled"
      (click)="click()"
    >
      <ng-container *ngIf="isLoading; else elseTemplate">
        <mat-spinner
          diameter="23"
          strokeWidth="4"
        ></mat-spinner>
        <div class="btn__text --hidden">{{ text }}</div> 
      </ng-container>
      <ng-template #elseTemplate>
        <div class="btn__text">{{ text }}</div>
      </ng-template>
    </button>
  `,
  styleUrls: ["sbc-button.component.scss"],
})
export class SbcButtonComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  @Input() isDisabled: boolean;
  @Input() isLoading: boolean;

  @Output() onClick = new EventEmitter();  

  constructor() { }

  ngOnInit(): void { }

  click() {
    this.onClick.emit();
  }
}
