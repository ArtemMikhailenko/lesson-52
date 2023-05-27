import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
 title = "High-Performance Computing" ;
 text = "High Performance Computing (HPC) encompasses solutions that are able to process data and execute calculations at a rate that far exceeds other computers. This aggregate computing power enables different science, business, and engineering organizations to solve large problems that would otherwise be unapproachable." ;
}
