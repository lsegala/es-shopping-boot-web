import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLatComponent } from './menu-lat.component';

describe('MenuLatComponent', () => {
  let component: MenuLatComponent;
  let fixture: ComponentFixture<MenuLatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
