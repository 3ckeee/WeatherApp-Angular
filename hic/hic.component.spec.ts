import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HicComponent } from './hic.component';

describe('HicComponent', () => {
  let component: HicComponent;
  let fixture: ComponentFixture<HicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
