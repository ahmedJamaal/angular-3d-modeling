import { Component, ElementRef, ViewChild } from '@angular/core';
import { SceneService } from 'src/app/services/animal';
import * as THREE from 'three';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SceneService],
})
export class HomeComponent {
  constructor(private scene: SceneService) {}

  @ViewChild('container')
  set container(container: ElementRef) {
    this.scene.initialize(container.nativeElement);
  }
}
