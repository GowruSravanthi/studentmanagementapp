import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksSheetComponent } from './marks-sheet.component';

describe('MarksSheetComponent', () => {
  let component: MarksSheetComponent;
  let fixture: ComponentFixture<MarksSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarksSheetComponent]
    });
    fixture = TestBed.createComponent(MarksSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
