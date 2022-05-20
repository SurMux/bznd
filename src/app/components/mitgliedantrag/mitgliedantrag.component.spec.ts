import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitgliedantragComponent } from './mitgliedantrag.component';

describe('MitgliedantragComponent', () => {
  let component: MitgliedantragComponent;
  let fixture: ComponentFixture<MitgliedantragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitgliedantragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitgliedantragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
