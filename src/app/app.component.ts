import { Component, ElementRef, ViewChild } from '@angular/core';
import { rejects } from 'assert';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Angular forms';
// mekata danna pluwn http call ekakin ena data wage dewal
// promise eka athule function eka resolve reject argument dekak denawa
//http request ekakin ena data gana promise karanna ahaki
//2000ms wenakan meka object ekak passe resolve eka denakota string ekak ewanawa
//But angular eka eka danne ne
//Angular eka ape objct(Promise) eka gana balan inne ne
//promise eka resolve or reject ekk dunnama "promise eka kiyanawa: it is a promise I'm done" we have to  
//carry on further with resolve data or reject

//async pipe eka dammama angular eka danagannawa, promise 2000ms walin promise eka resolve una kiyala
//eka automaticaly observerble ekka sambanda wela resolve data eka print karala denawa
   appStatus =new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('stable');
    }, 2000);
   });

   servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  filteredStatus = '';

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer(){
    this.servers.push(
      {
      instanceType: 'small',
      name: 'Testing Environment Server 2',
      status: 'offline',
      started: new Date(15, 1, 2017)
      }
    );
  }

}
