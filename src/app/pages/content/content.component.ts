import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id') ? Number(value.get('id')) : null;
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: number | null): void {
    if (id === null) {
      console.warn('ID is null, no content to display.');
      return;
    }

    const result = movies.find((article) => article.id === id);

    if (result) {
      this.contentTitle = result.cardTitle;
      this.contentDescription = result.cardDescription;
      this.photoCover = result.photoCover;
    } else {
      console.warn(`No content found for ID: ${id}`);
      this.contentTitle = 'Content not found';
      this.contentDescription = 'The requested content could not be found.';
      this.photoCover = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/983491d7-6c34-4bd2-9b1a-f56d3d7c3d90/dexfkr2-d6415bde-cd69-4b90-a65f-8b8726f9278e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk4MzQ5MWQ3LTZjMzQtNGJkMi05YjFhLWY1NmQzZDdjM2Q5MFwvZGV4ZmtyMi1kNjQxNWJkZS1jZDY5LTRiOTAtYTY1Zi04Yjg3MjZmOTI3OGUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GwrEhksXv5ZCvUso1lzpwmKO3ez9XyF8TcVy0Acl0DM'; // Placeholder image
    }
  }
}
