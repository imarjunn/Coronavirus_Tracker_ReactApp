import React,{Component} from 'react';
import { fetchStates } from '../../api';
import styles from './IndiaBreakDown.module.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Aux from '../../hoc/Aux';
import Icons from '../Icons/Icons';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

class IndiaBreakDown extends Component{

    state = {
        states: ["A&N Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chattisgarh","Delhi","Daman & Diu","Goa","Gujarat","Himachal Pradesh","Haryana","Jharkhand","Jammu & Kashmir","Karnataka","Kerela","Ladakh","Maharastra","Meghalaya","Manipur","Madhya Pradesh","Mizoram","Nagaland","Odisha","Punjab","Puducherry","Rajasthan","Sikkim","Telangana","Tamil Nadu","Tripura","IndiaTotal","Uttar Pradesh","Union Territory Total","West Bengal"],
        data: {}
    };

    async componentDidMount(){
        const fetchedStates = await fetchStates();
        console.log(fetchedStates.data);
        this.setState({data: fetchedStates.data});
        console.log(fetchedStates.data.AN);
    }

    render(){

        const {states,data} = this.state;

        return(
          <Aux>
          <div className={styles.Container}>
            <Icons fill="#008000" icon="World" style={{ float: 'left'}}/>
            <h1 className={styles.AdjustmentH}>India Breakdown</h1>
          </div>
          <div className = {styles.TableStyle}>
            <TableContainer component={Paper}>
                <Table style={{ width: 667,margin: 'auto' }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                        <StyledTableCell>Countries</StyledTableCell>
                        <StyledTableCell align="right">Total Confirmed</StyledTableCell>
                        <StyledTableCell align="right">Total Recovered</StyledTableCell>
                        <StyledTableCell align="right">Total Deaths</StyledTableCell>
                        <StyledTableCell align="right">Total Tested</StyledTableCell>
                     </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(data).map((key,i) => (
                            <StyledTableRow key={states[i]}>
                            <StyledTableCell component="th" scope="row">
                            {states[i]}
                            </StyledTableCell>
                            <StyledTableCell align="center">{data[key].total.confirmed}</StyledTableCell>
                            <StyledTableCell align="center">{data[key].total.recovered}</StyledTableCell>
                            <StyledTableCell align="center">{data[key].total.deceased}</StyledTableCell>
                            <StyledTableCell align="center">{data[key].total.tested}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                 </Table>
                </TableContainer>
          </div>
          </Aux>
        );
    }
}

export default IndiaBreakDown;