import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalComponent } from './global';

describe('Global', () => {
  let component: GlobalComponent;
  let fixture: ComponentFixture<GlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
