import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExchangeApiService } from 'src/app/service/exchange-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private exchangeRate : ExchangeApiService) { }

  showItems : any = [];
  selected = "INR";
  ngOnInit(): void {
 this.showItems = [{
   item :"local_library",
   price : 58,
 type : "INR" },{item :"luggage",
 price : 59,
type : "INR" },{item :"watch",
price : 60,
type : "INR" }]
  }

  onChange(){
    


    this.exchangeRate.getExchangeRate(this.selected).subscribe( Value => {
    
    this.showItems.map(ee =>{ 
        ee.price =parseFloat(ee.price)/Value.conversion_rates[ee.type];
        ee.price = parseFloat(ee.price).toFixed(2);
        ee.type = this.selected;
    });
    });


  }

  
}
