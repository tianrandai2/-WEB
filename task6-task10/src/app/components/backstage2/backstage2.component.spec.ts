import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Backstage2Component } from './backstage2.component';

describe('Backstage2Component', () => {
  let component: Backstage2Component;
  let fixture: ComponentFixture<Backstage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Backstage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Backstage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
