import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../utils/constants';
import { PortfolioEntity } from '../../model/PortfolioEntity';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})

export class PortfolioPageComponent implements OnInit {

  showSpinner: boolean;
  archPanel: PortfolioEntity = new PortfolioEntity();
  illustPanel: PortfolioEntity = new PortfolioEntity();
  designPanel: PortfolioEntity = new PortfolioEntity();
  
  constructor(public http: HttpClient) {
  }

  ngOnInit() {

    this.fetchPortfolio();
  }

  fetchPortfolio() {

    this.showSpinner = true;

    this.http.get(baseUrl + 'Portfolio/GetActive')
      .subscribe(data => {
        
        let archPanel;
        let illustPanel;
        let designPanel;
        
        var items = data as PortfolioEntity[];

        items.forEach(function (item) {
          if (item.Category == 'Achitecture') {
            archPanel = item;
          }
          else if (item.Category == 'Illustration') {
            illustPanel = item;
          }
          else if (item.Category == 'Design') {
            designPanel = item;
          }
        });

        this.archPanel = archPanel;
        this.illustPanel = illustPanel;
        this.designPanel = designPanel;

        this.showSpinner = false;

      }, fail => {

        console.log(fail.message);

      });
  }

  onClickPanel(panel: MatExpansionPanel) {
    
    console.log(panel);
  }
}
