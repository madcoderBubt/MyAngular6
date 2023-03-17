import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDonarComponent } from './filter-donar.component';

describe('FilterDonarComponent', () => {
  let component: FilterDonarComponent;
  let fixture: ComponentFixture<FilterDonarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
