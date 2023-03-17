import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDonarComponent } from './new-donar.component';

describe('NewDonarComponent', () => {
  let component: NewDonarComponent;
  let fixture: ComponentFixture<NewDonarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
