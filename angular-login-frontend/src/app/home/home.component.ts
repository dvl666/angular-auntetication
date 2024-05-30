import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  username: string = 'a'

  constructor(
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if ( navigation?.extras.state ) {
      this.username = navigation.extras.state['username']
      console.log(this.username)
    }
  }

  ngOnInit(): void {
    console.log('Usuario:', this.username);
  }

}
