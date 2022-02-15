import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Divider, Button, CardActions } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/styles';
import Form from 'react-bootstrap/Form'
import TextField from '@mui/material/TextField';
import './styles/styles.css'

function EditBond(props) {
  const {classes,display} = props;
  return (
    <Container>
        <Card className={classes.card}>
            <CardContent>
               <form>
                    {this.props.bonds.map(bond=>
                        this.props.bid===bond.BondId ?
                        <div>
                            <TextField id="outlined-basic" label="Bond Id" variant="outlined" fullWidth  />
                        </div>:''
                    )} 
                  {/* <div>
                      <TextField id="outlined-basic" label="Security Name" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="Security Description" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="Has Position" variant="outlined" fullWidth />
                  </div>
                  <div>
                    <TextField id="outlined-basic" label="Is Active" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="Lot Size" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="BBG Unique Name" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="CUSIP" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="ISIN" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="SEDOL" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="Bloomberg Ticket" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="Bloomberg Unique ID" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="Bloomberg Global ID" variant="outlined" fullWidth />
                  </div>
                  <div>
                     <TextField id="outlined-basic" label="Ticker And Exchange" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="Is ADR" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="ADR Underlying Ticker" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="ADR Underlying Currency" variant="outlined" fullWidth />
                  </div>
                  <div>
                      <TextField id="outlined-basic" label="Shares Per ADR" variant="outlined" fullWidth />
                  </div>
                  <div>
                    <TextField id="outlined-basic" label="IPO Date" variant="outlined" fullWidth />
                  </div>
                  <div>
                    <TextField id="outlined-basic" label="Pricing Currency" variant="outlined" fullWidth />
                  </div>
                  <div>
                    <TextField id="outlined-basic" label="Settle Days" variant="outlined" fullWidth />
                  </div>
                  <div>
                    <TextField id="outlined-basic" label="Total Shares Outstanding" variant="outlined" fullWidth />
                  </div>
                  <div>
                    <TextField id="outlined-basic" label="Voting Rights Per Share" variant="outlined" fullWidth />
                  </div>
                  <div>
                    <TextField id="outlined-basic" label="Average Volume 20D" variant="outlined" fullWidth />
                  </div>
                  <div>
                    <TextField id="outlined-basic" label="Beta" variant="outlined" fullWidth />
                  </div>
                  <div>
                    <TextField id="outlined-basic" label="Short Interest" variant="outlined" fullWidth />
                  </div>
                  <div>
                    <TextField id="outlined-basic" label="Return YTD" variant="outlined" fullWidth />
                  </div>
                  <TextField id="outlined-basic" label="Volatility 90D" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF Asset Class" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF Credit Rating" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF Currency" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF Instrument" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF Liquidity Profile" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF Maturity" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF NAICS Code" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF Region" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF Sector" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF Sub Asset Class" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF Liquidity Profile" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Country Of Issurance" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Exchange" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Issurer" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Issue Currency" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Trading Currency" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PF Liquidity Profile" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="BBG Industry Sub Group" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="BBloomberg Industry Group" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Country Of Incorporation" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Open Price" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Close Price" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Volume" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Last Price" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Bid Ratio" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="PE Ratio" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Divident Declared Date" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Divident Ex Date" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Divident Record Date" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Divident Pay Date" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Divident Amount" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Frequency" variant="outlined" fullWidth />
                  <TextField id="outlined-basic" label="Divident Type" variant="outlined" fullWidth />            */}
               </form>
            </CardContent>
            <CardActions>
                <Button variant="contained" className={classes.saveButton} style={{backgroundColor:"rgb(47, 46, 65)",margin:'0 auto',width:250}}>SAVE</Button>
            </CardActions>
        </Card>
    </Container>
  );
}

export default withStyles(styles) (EditBond)