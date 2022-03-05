import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTestComponent } from './custom-button.component';

describe('ChildTestComponent', () => {
  let component: ChildTestComponent;
  let fixture: ComponentFixture<ChildTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
