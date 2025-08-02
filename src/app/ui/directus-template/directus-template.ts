import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-directus-template',
  imports: [MatDivider],
  templateUrl: './directus-template.html',
  styleUrl: './directus-template.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectusTemplate {}
