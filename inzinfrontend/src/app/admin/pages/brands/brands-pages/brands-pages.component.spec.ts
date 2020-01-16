import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsPagesComponent } from './brands-pages.component';

describe('BrandsPagesComponent', () => {
  let component: BrandsPagesComponent;
  let fixture: ComponentFixture<BrandsPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
