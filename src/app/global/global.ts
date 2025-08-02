import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { directus, Global } from '../../../directus';
import { readSingleton } from '@directus/sdk';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';
import { DirectusTemplate } from '../ui/directus-template/directus-template';

@Component({
  selector: 'app-global',
  imports: [],
  templateUrl: './global.html',
  styleUrl: './global.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalComponent {
  readonly global: Signal<Global> = toSignal(
    from(directus.request<Global>(readSingleton('global'))),
    {
      initialValue: {
        title: '',
        description: '',
        slug: '',
      } as Global,
    },
  );
}
