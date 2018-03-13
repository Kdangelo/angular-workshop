import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoComponent } from './verso.component';

describe('VersoComponent', () => {
  let component: VersoComponent;
  let fixture: ComponentFixture<VersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
