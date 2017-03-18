import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermarkEditorComponent } from './watermark-editor.component';

describe('WatermarkEditorComponent', () => {
  let component: WatermarkEditorComponent;
  let fixture: ComponentFixture<WatermarkEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermarkEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermarkEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
