import {Component, OnInit} from '@angular/core';
import {ChartType, LegendItem} from '../../../app-common/lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import {DashboardDataModel} from '../../../../app/models/dashboard-data.model';
import {WebRequestService} from '../../../../app/services/web-request/web-request.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './guest-dashboard.component.html',
    styleUrls: ['./guest-dashboard.component.css']
})


export class GuestDashboardComponent implements OnInit {

    public dashboardData: DashboardDataModel = new DashboardDataModel();

    public formsData = {
        difficulty_city: undefined,

    };

    public citiesChartType: ChartType;
    public citiesChartData: any;
    public citiesChartLegendItems: LegendItem[];

    public yearsChartType: ChartType;
    public yearsChartData: any;
    public yearsChartOptions: any;
    public yearsChartResponsive: any[];
    public yearsChartLegendItems: LegendItem[];

    public notesChartType: ChartType;
    public notesChartData: any;
    public notesChartOptions: any;
    public notesChartResponsive: any[];
    public notesChartLegendItems: LegendItem[];


    constructor(
        private webRequestService: WebRequestService
    ) {
    }

    ngOnInit() {
        this.webRequestService.getDashboardData().subscribe(data => {
            this.dashboardData = data;
        });
        this.citiesChartType = ChartType.Pie;
        this.citiesChartData = {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        };
        this.citiesChartLegendItems = [
            {title: 'Etablissement 1', imageClass: 'fa fa-circle text-info'},
            {title: 'Etablissement 2', imageClass: 'fa fa-circle text-danger'},
            {title: 'Etablissement 3', imageClass: 'fa fa-circle text-warning'}
        ];

        this.yearsChartType = ChartType.Line;
        this.yearsChartData = {
            labels: ['01/21', '02/21', '03/21', '04/21', '05/21', '06/21', '07/21', '08/21'],
            series: [
                [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
                [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
                [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
            ]
        };
        this.yearsChartOptions = {
            low: 0,
            high: 800,
            showArea: true,
            height: '245px',
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: false,
            showPoint: false,
        };
        this.yearsChartResponsive = [
            ['screen and (max-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
        this.yearsChartLegendItems = [
            {title: 'Etablissement 1', imageClass: 'fa fa-circle text-info'},
            {title: 'Etablissement 2', imageClass: 'fa fa-circle text-danger'},
            {title: 'Etablissement 3', imageClass: 'fa fa-circle text-warning'}
        ];

        this.notesChartType = ChartType.Bar;
        this.notesChartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
        };
        this.notesChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.notesChartResponsive = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
        this.notesChartLegendItems = [
            {title: 'Etablissement', imageClass: 'fa fa-circle text-info'},
            {title: 'Notes', imageClass: 'fa fa-circle text-danger'}
        ];


    }
}
