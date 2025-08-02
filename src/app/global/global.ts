import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { directus, Global } from '../../../directus';
import { readSingleton } from '@directus/sdk';

@Component({
  selector: 'app-global',
  imports: [],
  templateUrl: './global.html',
  styleUrl: './global.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalComponent {
  readonly global: WritableSignal<Global> = signal<Global>({
    title: '',
    description: '',
    slug: '',
  });

  constructor() {
    this.getGlobal();
  }

  async getGlobal(): Promise<void> {
    this.global.set(await directus.request<Global>(readSingleton('global')));
  }
}
