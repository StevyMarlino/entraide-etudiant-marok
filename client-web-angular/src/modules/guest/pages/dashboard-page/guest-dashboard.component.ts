import {Component, OnInit} from '@angular/core';
import {ChartType, LegendItem} from '../../../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import {DashboardModel} from '../../../../app/models/dashboard.model';
import {ApiRequestsService} from '../../../../app/services/api-requests/api-requests.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './guest-dashboard.component.html',
    styleUrls: ['./guest-dashboard.component.css']
})
export class GuestDashboardComponent implements OnInit {

    public dashboardData: DashboardModel = new DashboardModel();

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


    loaded = false;

    constructor(
        private webRequestService: ApiRequestsService
    ) {
    }

    handleCitiesChart() {
        // Cities
        this.citiesChartType = ChartType.Pie;
        this.citiesChartData = this.dashboardData.cities_chart;
        // this.citiesChartLegendItems = [
        //     {title: 'Etablissement 1', imageClass: 'fa fa-circle text-danger'},
        //     {title: 'Etablissement 2', imageClass: 'fa fa-circle text-danger'},
        //     {title: 'Etablissement 3', imageClass: 'fa fa-circle text-danger'}
        // ];
    }

    handleYearsChart() {
        this.yearsChartType = ChartType.Line;
        this.yearsChartData = this.dashboardData.years_chart;
        console.log(
            this.yearsChartData
        )
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
        this.yearsChartLegendItems = [];
    }

    handleNotesChart() {
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

    async ngOnInit() {
        this.dashboardData = await this.webRequestService
            .getDashboardData()
            .toPromise();
        this.loaded = true;
        this.handleCitiesChart();
        this.handleYearsChart();
        this.handleNotesChart();
    }
}
