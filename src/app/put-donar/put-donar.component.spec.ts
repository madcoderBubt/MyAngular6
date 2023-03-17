import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDonarComponent } from './put-donar.component';

describe('PutDonarComponent', () => {
  let component: PutDonarComponent;
  let fixture: ComponentFixture<PutDonarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PutDonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
