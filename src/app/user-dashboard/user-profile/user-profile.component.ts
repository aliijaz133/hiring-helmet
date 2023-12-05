import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

am4core.useTheme(am4themes_animated);
interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  genders: Gender[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
  ];

  @ViewChild('lineChart', { static: true }) lineChart!: ElementRef;

  showLoader: boolean = false;

  userProfile: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userProfile = this.fb.group({
      userFName: new FormControl('', [Validators.required]),
      userLName: new FormControl('', [Validators.required]),
      userContact: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userGender: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.chartGraph();

    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }

  userData() {
    console.log('User Data: ', this.userProfile.value);
  }

  chartGraph() {
    let chart = am4core.create('lineChart', am4charts.XYChart);

    // Add data
    chart.data = [
      {
        year: 'Jan',
        europe: 2.5,
        namerica: 2.5,
        // asia: 2.1,
        // lamerica: 1.2,
        // meast: 0.2,
        // africa: 0.1,
      },
      {
        year: 'Feb',
        europe: 2.6,
        namerica: 2.7,
        // asia: 2.2,
        // lamerica: 1.3,
        // meast: 0.3,
        // africa: 0.1,
      },
      {
        year: 'Mar',
        europe: 2.8,
        namerica: 2.9,
        // asia: 2.4,
        // lamerica: 1.4,
        // meast: 0.3,
        // africa: 0.1,
      },
      {
        year: 'Apr',
        europe: 2.8,
        namerica: 4,
        // asia: 2.4,
        // lamerica: 1.4,
        // meast: 0.3,
        // africa: 0.1,
      },
      {
        year: 'May',
        europe: 2.8,
        namerica: 2.9,
        // asia: 2.4,
        // lamerica: 1.4,
        // meast: 0.3,
        // africa: 0.1,
      },
      {
        year: 'Jun',
        europe: 2.8,
        namerica: 9,
        // asia: 2.4,
        // lamerica: 1.4,
        // meast: 0.3,
        // africa: 0.1,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'year';
    // categoryAxis.title.text = 'Local country offices';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    // valueAxis.title.text = 'Expenditure (M)';

    // Create series
    function createSeries(field: any, name: any, stacked: any) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'year';
      series.name = name;
      series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]';
      series.stacked = stacked;
      // series.columns.template.width = am4core.percent(95);
      series.columns.template.fill = am4core.color('orange');
      series.columns.template.stroke = am4core.color('orange');
    }

    createSeries('europe', 'Jan', false);
    createSeries('namerica', 'Feb', true);
    createSeries('asia', 'Mar', false);
    createSeries('lamerica', 'April', true);
    createSeries('meast', 'May', true);
    createSeries('africa', 'Jun', true);

    // Add legend
    chart.legend = new am4charts.Legend();
  }
}
