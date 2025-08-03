import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectusTemplate } from './directus-template';

describe('DirectusTemplate', () => {
  let component: DirectusTemplate;
  let fixture: ComponentFixture<DirectusTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectusTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectusTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
