import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserePratoComponent } from './insere-prato.component';

describe('InserePratoComponent', () => {
  let component: InserePratoComponent;
  let fixture: ComponentFixture<InserePratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserePratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserePratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
