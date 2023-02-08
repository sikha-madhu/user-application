import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionaldataComponent } from './additionaldata.component';

describe('AdditionaldataComponent', () => {
  let component: AdditionaldataComponent;
  let fixture: ComponentFixture<AdditionaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionaldataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
