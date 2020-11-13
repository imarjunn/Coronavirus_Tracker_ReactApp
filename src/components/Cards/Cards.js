import React,{Component} from 'react';
import styles from './Cards.module.css';
import Icons from '../../components/Icons/Icons';
import Aux from '../../hoc/Aux';


class Cards extends Component{

    async componentDidMount(){
    }
    
    render(){
        const {cardData} = this.props;
        return (
            <Aux>
                 <div className={styles.ContainerH}>
                    <Icons fill="#008000" icon="NewCases" />
                    <h1 className={styles.AdjustmentH}>COVID-19 Tracker</h1>
                 </div>
                 <div className={styles.Container}>
                    <div className={styles.SubLine}>Track the spread of the Coronavirus Covid-19 outbreak</div>
                 </div>
                <div className={styles.Container}>
                    <div className={styles.CardRow}>
                        <div className={styles.Card}>
                            <Icons fill="#FF0000" icon="TotalCases" />
                            <h5>Total Confirmed:</h5>
                            <h2>{cardData.TotalConfirmed}</h2>
                            
                        </div>
                        <div className={styles.Card}>
                            <Icons fill="#00FFFF" icon="TotalRecovered" />
                            <h5>Total Recovered:</h5>
                            <h2>{cardData.TotalRecovered}</h2>
                        </div>
                    </div>
                    <div className={styles.CardRow}>
                        <div className={styles.Card}>
                        <Icons fill="#D6FA09" icon="TotalDeaths" />
                            <h5>Total Deaths:</h5>
                            <h2>{cardData.TotalDeaths}</h2>
                        </div>
                        <div className={styles.Card}>
                            <Icons fill="#008000" icon="NewCases" />
                            <h5>Total New Cases:</h5>
                            <h2>+{cardData.NewConfirmed}</h2>
                        </div>
                    </div>
                </div>
            </Aux>
    );
    }
}

export default Cards;

/**/
