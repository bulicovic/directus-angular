import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { directus, Page } from '../../../directus';
import { readItems } from '@directus/sdk';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, switchMap } from 'rxjs';
import { DirectusTemplate } from '../ui/directus-template/directus-template';

@Component({
  selector: 'app-page',
  imports: [DirectusTemplate],
  templateUrl: './page.html',
  styleUrl: './page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  readonly #route = inject(ActivatedRoute);

  readonly page = toSignal(
    this.#route.paramMap.pipe(
      map((params) => {
        console.log(params);
        return params.get('slug');
      }),
      filter((slug) => slug !== null),
      switchMap((slug) =>
        directus
          .request<Page[]>(
            readItems('pages', {
              filter: {
                slug: { _eq: slug },
              },
            }),
          )
          .then((pages) => pages[0] || { slug: '', title: '', content: '' }),
      ),
    ),
    { initialValue: { slug: '', title: '', content: '' } },
  );
}
