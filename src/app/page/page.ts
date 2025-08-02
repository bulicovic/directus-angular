import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { directus, Page } from '../../../directus';
import { readItems } from '@directus/sdk';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.html',
  styleUrl: './page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  readonly page = signal<Page>({ slug: '', title: '', content: '' });
  readonly #route = inject(ActivatedRoute);

  constructor() {
    this.#route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const slug = params.get('slug');
      console.log(params);
      if (slug) {
        console.log(slug);
        this.getPageBySlug(slug);
      }
    });
  }

  async getPageBySlug(slug: string): Promise<void> {
    const pages = await directus.request<Page[]>(
      readItems('pages', {
        filter: {
          slug: {
            _eq: slug,
          },
        },
      }),
    );
    this.page.set(pages[0]);
  }
}
