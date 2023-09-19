import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../interface/user';
import * as Leaflet from 'leaflet'
import { Geo } from '../interface/geo';

@Component({
  selector: 'app-userdetail',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  mode: 'edit' | 'locked' = 'locked';
  buttonText: 'Save Changes' | 'Edit' = 'Edit';
  marker = new Leaflet.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconSize: [32, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  })


  constructor(private activatedRoute: ActivatedRoute, private userService: UserService){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data => {
        this.user = data.resolvedResponse
      }
    )
    console.log(this.user)
    this.loadMap(this.user.address.geo)
    }

      onGetUser() {
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
          console.log('User Id'+params.get('id'));
          this.userService.getUser(+params.get('id')).subscribe(
            (response: any) => {
              console.log(response);
              this.user = response
            }
          )
        })
    }

    changeMode(mode?: 'edit' | 'locked'): void {
      console.log(mode);
      this.mode = this.mode === 'locked' ? 'edit' : 'locked';
      this.buttonText = this.buttonText === 'Edit' ? 'Save Changes' : 'Edit';
      if(mode === 'edit') {
        // Logic to update the user on the back end
        console.log('Updating using on the back end');
      }
    }

    private loadMap(geo: Geo): void{
      const map = Leaflet.map('map', {
        center: [+geo.lat, +geo.lng],
        zoom: 8
      });
      const layer = Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        maxZoom: 30,
        crossOrigin: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
      layer.addTo(map)
      const marker = Leaflet.marker([+geo.lat, +geo.lng], { icon: this.marker});
      marker.addTo(map).bindPopup(`${this.user.name}'s Location`).openPopup()
    }
}
