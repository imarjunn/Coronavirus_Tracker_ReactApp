import React,{ Component } from 'react';
import styles from './Chart.module.css';
import { Bar,Line } from 'react-chartjs-2';


class Chart extends Component{
    render(){
        const { cardData } = this.props;
        return (
            <div className={styles.Container}>
               {
                   cardData.TotalConfirmed ?
                   <Line
                        data = {{
                            labels: ['Confirmed','Recovered','Deaths'],
                            datasets: [{
                                label: 'People',
                                fill:false,
                                borderColor: "#98B9AB",
                                data: [cardData.TotalConfirmed,cardData.TotalRecovered,cardData.TotalDeaths]
                            }]
                        }}
                        options = {{
                            legend: {display: false},
                            title: {display: true},
                            layout: {
                                padding: {
                                    top: 5,
                                    left: 15,
                                    right: 15,
                                    bottom: 15
                                }
                            }
                        }}
                   />: null

               } 
            </div>
         );
        }
}

export default Chart;