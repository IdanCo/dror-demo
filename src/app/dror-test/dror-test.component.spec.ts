import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrorTestComponent } from './dror-test.component';

describe('DrorTestComponent', () => {
  let component: DrorTestComponent;
  let fixture: ComponentFixture<DrorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrorTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
