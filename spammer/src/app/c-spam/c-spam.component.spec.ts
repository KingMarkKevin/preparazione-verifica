import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSpamComponent } from './c-spam.component';

describe('CSpamComponent', () => {
  let component: CSpamComponent;
  let fixture: ComponentFixture<CSpamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSpamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSpamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
