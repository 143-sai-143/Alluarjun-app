import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomwComponent } from './homw.component';

describe('HomwComponent', () => {
  let component: HomwComponent;
  let fixture: ComponentFixture<HomwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomwComponent]
    });
    fixture = TestBed.createComponent(HomwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
