import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataParentComponent } from './data-parent.component';

describe('DataParentComponent', () => {
  let component: DataParentComponent;
  let fixture: ComponentFixture<DataParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
