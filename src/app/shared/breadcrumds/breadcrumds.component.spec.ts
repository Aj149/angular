import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumdsComponent } from './breadcrumds.component';

describe('BreadcrumdsComponent', () => {
  let component: BreadcrumdsComponent;
  let fixture: ComponentFixture<BreadcrumdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumdsComponent]
    });
    fixture = TestBed.createComponent(BreadcrumdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
