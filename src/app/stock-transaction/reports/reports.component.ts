import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(
    private reportService:ReportsService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

   chartType: ChartType = 'bar';

  chartData: ChartData<'bar'> = {
    labels :[],
    datasets: [
      {
        label: 'Sales Report',
        data: [],
        backgroundColor: '#1976d2'
      }
    ]
  };


  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  };



  loadData(){
    this.reportService.getReports().subscribe((res:any)=>{
      console.log(res.stocks.map((item:any)=>item.month))
     this.chartData = {
      labels: res.stocks.map((item: any) => item.month),
      datasets: [
        {
          label: 'Monthly Stock',
          data: res.stocks.map((item: any) =>
            Number(item.total_quantity)
          ),
          backgroundColor: '#42a5f5'
        }
      ]
    };

    })
  }

}
