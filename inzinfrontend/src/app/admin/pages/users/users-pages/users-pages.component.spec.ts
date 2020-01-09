import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPagesComponent } from './users-pages.component';

describe('UsersPagesComponent', () => {
  let component: UsersPagesComponent;
  let fixture: ComponentFixture<UsersPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
