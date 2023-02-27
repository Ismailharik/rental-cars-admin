import { Component, OnInit } from '@angular/core';
import { StockInfo } from '../../models/stockInfo.model';
import { HomeService } from '../../services/home.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Options } from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {


  stockInfo!: StockInfo
  Highcharts = Highcharts;
  months: any[] = []
  sellPerMonth: number[] = []
  pieChartData: [{}] = [{}]


  lineChartOptions: Options = {
    title: {
      text: 'Monthly Sales'
    },
    xAxis: {
      type: 'category',
      categories: this.months
    },
    yAxis: {
      title: {
        text: 'Sales (USD)'
      }
    },
    series: [{
      type: 'line',
      name: 'Sales',
      data: this.sellPerMonth
    }]
  };
  pieChartOptions: Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Pie Chart Example'
    },
    series: [{
      type: 'pie',
      name: 'Data',
      data: this.pieChartData
    }]
  };
  barChart: Options = {

    title: {
      text: 'Sell per year'
    },
    xAxis: {
      type: 'category',
      categories: this.months
    },
    yAxis: {
      title: {
        text: 'Sell'
      }
    },
    series: [{
      type: 'bar',
      name: 'Sell per year',
      data: this.sellPerMonth
    }]
  };


  constructor(private homeService: HomeService) {
    HC_exporting(Highcharts);
  }

  ngOnInit(): void {
    this.homeService.getStockInfo().subscribe({
      next: resp => {
        // console.log(resp);
        this.stockInfo = resp

        this.stockInfo.stockFeedbacks.forEach(element => {
          this.sellPerMonth.push(element.totalPrice)
          this.months.push(element.date)
          this.pieChartData.push({ name: element.date, y: element.totalPrice })
        });
      },
      error: err => {
        console.log(err);

      }
      , complete() {
        console.log('Finished sequence');

      }
    })


  }


}
