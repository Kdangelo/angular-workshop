import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoFormComponent } from './verso-form.component';

describe('VersoFormComponent', () => {
  let component: VersoFormComponent;
  let fixture: ComponentFixture<VersoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
