import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarComponent } from './donar.component';

describe('DonarComponent', () => {
  let component: DonarComponent;
  let fixture: ComponentFixture<DonarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
