import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container, Divider, Button,  Dialog,DialogActions,
        DialogContent,DialogContentText, Typography, FormControl } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles';
import TextField from '@mui/material/TextField';
import '../../../styles/styles.css'
import {CircularProgress} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'; 
import DateFnsUtils from '@date-io/date-fns';  
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
export class CreateEquity extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       equities:[],success:false,error:false,open:false,openError:false,show:false,
       EquityId: "",
       SecurityName: "",
       SecurityDescription: "",
       HasPosition: "",
       IsActive: "",
       LotSize: "",
       BBGUniqueName: "",
       CUSIP: "",
       ISIN : "",
       SEDOL: "",
       BloombergTicket: "",
       BloombergUniqueID: "",
       BloombergGlobalID: "",
       TickerAndExchange: "",
       IsADR: "",
       ADRUnderlyingTicker: "",
       ADRUnderlyingCurrency: "",
       SharesPerADR: "",
       IPODate: "",
       PricingCurrency: "",
       SettleDays: "",
       TotalSharesOutstanding: "",
       VotingRightsPerShare:"",
       AverageVolume20D:"",
       Beta: "",
       ShortInterest: "",
       Volatility90D: "",
       ReturnYTD: "",
       PFAssetClass: "",
       PFCountry: "",
       PFCreditRating : "",
       PFCurrency  : "",
       PFInstrument:"",
       PFLiquidityProfile: "",
       PFMaturity: "",
       PFNAICSCode: "",
       PFRegion: "",
       PFSector: "",
       PFSubAssetClass: "",
       CountryOfIssurance: "",
       Exchange: "",
       Issurer: "",
       IssueCurrency: "",
       TradingCurrency:"",
       BBGIndustrySubGroup: "",
       BBloombergIndustryGroup: "",
       BloombergSector: "",
       CountryOfIncorporation: "",
       RiskCurrency: "",
       OpenPrice: "",
       ClosePrice: "",
       Volume: "",
       LastPrice: "",
       AskPrice: "",
       BidRatio:"",
       PERatio: "",
       DividentDeclaredDate: "",
       DividentExDate: "",
       DividentPayDate: "",
       DividentAmount: "",
       Frequency: "",
       DividentType: "",
       requiredError:false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

// componentDidUpdate()
//   if((this.state.SecurityName === "") || (this.state.SecurityDescription === "") || 
//   (this.state.BloombergUniqueID === "") || (this.state.LastPrice === "") || 
//   (this.state.AskPrice === ""))
//   {
//      this.setState({requiredError:true})
//      return;
//   }
// }
// }
    handleSubmit(event){
      event.preventDefault();
       const {EquityId,SecurityName,SecurityDescription,HasPosition,IsActive,LotSize,BBGUniqueName,CUSIP,ISIN ,SEDOL,
       BloombergTicket,BloombergUniqueID,BloombergGlobalID,TickerAndExchange,IsADR,ADRUnderlyingTicker,
       ADRUnderlyingCurrency,SharesPerADR,IPODate,PricingCurrency,SettleDays,TotalSharesOutstanding,
       VotingRightsPerShare,AverageVolume20D,Beta,ShortInterest,Volatility90D,ReturnYTD,
       PFAssetClass,PFCountry,PFCreditRating ,
       PFCurrency  ,PFInstrument,PFLiquidityProfile,PFMaturity,PFNAICSCode,PFRegion,
       PFSector,PFSubAssetClass,CountryOfIssurance,Exchange,Issurer,IssueCurrency,TradingCurrency,
       BBGIndustrySubGroup,BBloombergIndustryGroup,BloombergSector,CountryOfIncorporation,RiskCurrency,
       OpenPrice,ClosePrice,Volume,LastPrice,AskPrice,BidRatio,
       PERatio,DividentDeclaredDate,DividentExDate,DividentPayDate,DividentAmount,Frequency,DividentType, 
        } = event.target.elements;
      let details = {
        SecurityName: SecurityName.value,
        SecurityDescription: SecurityDescription.value,
        HasPosition:HasPosition.value,
        IsActive: IsActive.value,
        LotSize: LotSize.value,
        BBGUniqueName: BBGUniqueName.value,
        CUSIP:CUSIP.value,
        ISIN : ISIN.value,
        SEDOL: SEDOL.value,
        BloombergTicket:BloombergTicket.value,
        BloombergUniqueID: BloombergUniqueID.value,
        BloombergGlobalID:BloombergGlobalID.value,
        TickerAndExchange:TickerAndExchange.value,
        IsADR: IsADR.value,
        ADRUnderlyingTicker: ADRUnderlyingTicker.value,
        ADRUnderlyingCurrency: ADRUnderlyingCurrency.value,
        SharesPerADR:SharesPerADR.value,
        IPODate: IPODate.value,
        PricingCurrency: PricingCurrency.value,
        SettleDays: SettleDays.value,
        TotalSharesOutstanding: TotalSharesOutstanding.value,
        VotingRightsPerShare:VotingRightsPerShare.value,
        AverageVolume20D:AverageVolume20D.value,
        Beta: Beta.value,
        ShortInterest: ShortInterest.value,
        Volatility90D:Volatility90D.value,
        ReturnYTD: ReturnYTD.value,
        PFAssetClass: PFAssetClass.value,
        PFCountry: PFCountry.value,
        PFCreditRating : PFCreditRating.value,
        PFCurrency  : PFCurrency.value,
        PFInstrument:PFInstrument.value,
        PFLiquidityProfile: PFLiquidityProfile.value,
        PFMaturity: PFMaturity.value,
        PFNAICSCode: PFNAICSCode.value,
        PFRegion:PFRegion.value,
        PFSector: PFSector.value,
        PFSubAssetClass: PFSubAssetClass.value,
        CountryOfIssurance: CountryOfIssurance.value,
        Exchange: Exchange.value,
        Issurer: Issurer.value,
        IssueCurrency:IssueCurrency.value,
        TradingCurrency:TradingCurrency.value,
        BBGIndustrySubGroup: BBGIndustrySubGroup.value,
        BBloombergIndustryGroup: BBloombergIndustryGroup.value,
        BloombergSector: BloombergSector.value,
        CountryOfIncorporation: CountryOfIncorporation.value,
        RiskCurrency: RiskCurrency.value,
        OpenPrice: OpenPrice.value,
        ClosePrice:ClosePrice.value,
        Volume: Volume.value,
        LastPrice: LastPrice.value,
        AskPrice:AskPrice.value,
        BidRatio:BidRatio.value,
        PERatio: PERatio.value,
        DividentDeclaredDate: DividentDeclaredDate.value,
        DividentExDate: DividentExDate.value,
        DividentPayDate: DividentPayDate.value,
        DividentAmount: DividentAmount.value,
        Frequency:Frequency.value,
        DividentType: DividentType.value,
      }
      console.log(details)
      fetch('http://localhost:14011/api/equity/post',{
          method:'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(details),
        
        }) 
        .then((response) => { 
          this.setState({open:true})
      })
      .catch(()=>{
        this.setState({openError:true})
      })
  }
  handleOpen=()=>{this.setState({open:true})} 
  handleClose=()=>{this.setState({open:false})} 
  handleOpenError=()=>{this.setState({openError:true})} 
  handleCloseError=()=>{this.setState({openError:false})} 

  render(){
    const {classes} = this.props;
    return (
      <Container>
           <div className={classes.load}>
              {this.state.loading ? <div style={{textAlign:"center"}}> <CircularProgress/></div> :''}
           </div>
           
          <Card className={classes.card} style={{background:'rgb(228 228 228)'}}>
          <Typography variant="h4" gutterBottom component="div" className={classes.tab}>Create Equity</Typography>
          <Divider/>
              <CardContent>
                 <form onSubmit={this.handleSubmit}>
                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div>
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Security Summary</Typography></div>
                              <Divider/>  
                              <div className={classes.textField}><TextField name="SecurityName" label="Security Name" variant="outlined" placeholder value={this.state.SecurityName}   fullWidth onChange={(e)=>this.setState({SecurityName:e.target.value})} required error={this.state.requiredError} helper={this.state.requiredError ? "Field can't be empty":""} /></div>
                              <div className={classes.textField}><TextField name="SecurityDescription" label="Security Description" variant="outlined" value={this.state.SecurityDescription}  fullWidth onChange={(e)=>this.setState({SecurityDescription:e.target.value})} required error={this.state.requiredError} helper={this.state.requiredError ? "Field can't be empty":""}/></div>
                              <div className={classes.textField}>
                              <InputLabel id="HasPosition">HasPosition</InputLabel>
                                 <Select
                                  labelId="HasPosition"
                                  name="HasPosition"
                                  label="Has Position"
                                  value={this.state.HasPosition ? "True" : "False"}
                                  variant="outlined" fullWidth
                                  onChange={(e)=>this.setState({HasPosition:e.target.value})}
                                >
                                  <MenuItem value={"True"}>True</MenuItem>
                                  <MenuItem value={"False"}>False</MenuItem>
                                </Select>
                              </div>
                              <div className={classes.textField}>
                              <InputLabel id="IsActive">Is Active</InputLabel>
                                 <Select
                                  labelId="IsActive"
                                  name="IsActive"
                                  label="Is Active"
                                  variant="outlined" fullWidth
                                  value={this.state.IsActive ? "True" : "False"}
                                  onChange={(e)=>this.setState({IsActive:e.target.value})}
                                >
                                  <MenuItem value={"True"}>True</MenuItem>
                                  <MenuItem value={"False"}>False</MenuItem>
                                </Select>
                              </div>                          
                              <div className={classes.textField}><TextField name="LotSize" error={this.state.LotSize < 0} helperText={this.state.LotSize < 0?"Only Numbers are allowed and can't be less than zero" : ""}   type='number'  label="Lot Size" variant="outlined" value={this.state.LotSize} fullWidth onChange={(e)=>this.setState({LotSize:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="BBGUniqueName" label="BBG Unique Name" variant="outlined" value={this.state.BBGUniqueName} fullWidth onChange={(e)=>this.setState({BBGUniqueName:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Security Identifier</Typography></div>
                              <Divider/>   
                              <div className={classes.textField}><TextField name="CUSIP" label="CUSIP" variant="outlined" fullWidth value={this.state.CUSIP} onChange={(e)=>this.setState({CUSIP:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="ISIN" label="ISIN" variant="outlined" fullWidth value={this.state.ISIN} onChange={(e)=>this.setState({ISIN:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name='SEDOL' label="SEDOL" variant="outlined" fullWidth value={this.state.SEDOL} onChange={(e)=>this.setState({SEDOL:e.target.value})} /></div>
                              <div className={classes.textField}><TextField label="Bloomberg Ticket" variant="outlined" fullWidth name="BloombergTicket" value={this.state.BloombergTicket} onChange={(e)=>this.setState({BloombergTicket:e.target.value})} /></div>
                              <div className={classes.textField}><TextField label="Bloomberg Unique ID" variant="outlined" fullWidth name="BloombergUniqueID" value={this.state.BloombergUniqueID} onChange={(e)=>this.setState({BloombergUniqueID:e.target.value})} required error={this.state.requiredError} helper={this.state.requiredError ? "Field can't be empty":""} /></div>
                              <div className={classes.textField}><TextField label="Bloomberg Global ID" variant="outlined" fullWidth name="BloombergGlobalID" value={this.state.BloombergGlobalID} onChange={(e)=>this.setState({BloombergGlobalID:e.target.value})} /></div>
                              <div className={classes.textField}><TextField label="Ticker And Exchange" variant="outlined" fullWidth name="TickerAndExchange" value={this.state.TickerAndExchange} onChange={(e)=>this.setState({TickerAndExchange:e.target.value})} /></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                            <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Security Details</Typography></div>
                              <Divider/>
                              <div className={classes.textField}>
                              <InputLabel id="IsADR">Is ADR</InputLabel>
                                 <Select
                                  labelId="IsADR"
                                  name="IsADR"
                                  label="Is ADR"
                                  value={this.state.IsADR ? "True" : "False"}
                                  variant="outlined" fullWidth
                                  onChange={(e)=>this.setState({IsADR:e.target.value})}
                                >
                                  <MenuItem value={"True"}>True</MenuItem>
                                  <MenuItem value={"False"}>False</MenuItem>
                                </Select>
                              </div> 
                              <div className={classes.textField}><TextField  label="ADR Underlying Ticker" variant="outlined" fullWidth name="ADRUnderlyingCurrency" value={this.state.ADRUnderlyingCurrency} onChange={(e)=>this.setState({ADRUnderlyingCurrency:e.target.value})}/></div>
                              <div className={classes.textField}><TextField  label="ADR Underlying Currency" variant="outlined" fullWidth name="ADRUnderlyingTicker" value={this.state.ADRUnderlyingTicker} onChange={(e)=>this.setState({ADRUnderlyingTicker:e.target.value})} /></div>
                              <div className={classes.textField}><TextField  label="Shares Per ADR" variant="outlined" fullWidth name="SharesPerADR" value={this.state.SharesPerADR} onChange={(e)=>this.setState({SharesPerADR:e.target.value})}/></div>

                              <div className={classes.textField}>
                                <TextField
                                label="IPO Date"
                                fullWidth 
                                type="datetime-local"
                                name="IPODate"
                                value={this.state.IPODate}
                                onChange={(e)=>this.setState({IPODate:e.target.value})}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                />
                                </div>
                                <div className={classes.textField}>
                                <TextField
                                label="Pricing Details"
                                fullWidth 
                                type="datetime-local"
                                variant="outlined"
                                name="PricingCurrency"
                                value={this.state.PricingCurrency}
                                onChange={(e)=>this.setState({PricingCurrency:e.target.value})}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                />
                              </div>
                              <div className={classes.textField}><TextField  label="Settle Days " variant="outlined" fullWidth name="SettleDays" value={this.state.SettleDays} onChange={(e)=>this.setState({SettleDays:e.target.value})} /></div>
                              <div className={classes.textField}><TextField  label="Shares Outstanding" error={this.state.TotalSharesOutstanding < 0} helperText={this.state.TotalSharesOutstanding < 0 ? "Only Numbers are allowed and can't be less than zero" :""}   type='number'  variant="outlined" fullWidth name="TotalSharesOutstanding" value={this.state.TotalSharesOutstanding} onChange={(e)=>this.setState({TotalSharesOutstanding:e.target.value})} /></div>
                              <div className={classes.textField}><TextField  label="Voting Rights Per Share " error={this.state.VotingRightsPerShare < 0} helperText={this.state.VotingRightsPerShare < 0 ?"Only Numbers are allowed and can't be less than zero" : ""}  type='number'  variant="outlined" fullWidth name="VotingRightsPerShare" value={this.state.VotingRightsPerShare} onChange={(e)=>this.setState({VotingRightsPerShare:e.target.value})} /></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Risk</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="AverageVolume20D"  error={this.state.AverageVolume20D < 0} helperText={ this.state.AverageVolume20D < 0 ? "Only Numbers are allowed and can't be less than zero" : ""}   type='number'  label="20 Day Average Volume" variant="outlined" fullWidth value={this.state.AverageVolume20D} onChange={(e)=>this.setState({AverageVolume20D:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="Beta" error={this.state.Beta < 0} helperText={this.state.Beta < 0 ? "Only Numbers are allowed and can't be less than zero" : ""}   type='number'  label="Beta" variant="outlined" fullWidth value={this.state.Beta} onChange={(e)=>this.setState({Beta:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="ShortInterest" error={this.state.ShortInterest < 0} helperText={this.state.ShortInterest < 0 ?"Only Numbers are allowed and can't be less than zero" : ""}  type='number'  label="Short Interest" variant="outlined" fullWidth value={this.state.ShortInterest} onChange={(e)=>this.setState({ShortInterest:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="ReturnYTD" error={this.state.ReturnYTD < 0} helperText={this.state.ReturnYTD < 0 ?"Only Numbers are allowed and can't be less than zero" : ""}  type='number'  type='number'  label="YTD Return" variant="outlined" fullWidth value={this.state.ReturnYTD} onChange={(e)=>this.setState({ReturnYTD:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Volatility90D" error={this.state.Volatility90D < 0} helperText={this.state.Volatility90D < 0 ? "Only Numbers are allowed and can't be less than zero" : ""}  type='number'  label="90 Day Price Volatility" variant="outlined" fullWidth  value={this.state.Volatility90D} onChange={(e)=>this.setState({Volatility90D:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Regulatory Details</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="PFAssetClass" label="Form PF Asset Class" variant="outlined" fullWidth value={this.state.PFAssetClass} onChange={(e)=>this.setState({PFAssetClass:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PFCountry" label="Form PF Country" variant="outlined" fullWidth value={this.state.PFCountry} onChange={(e)=>this.setState({PFCountry:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PFCreditRating" label="Form PF Credit Rating" variant="outlined" fullWidth value={this.state.PFCreditRating} onChange={(e)=>this.setState({PFCreditRating:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PFCurrency" label="Form PF Currency" variant="outlined" fullWidth value={this.state.PFCurrency} onChange={(e)=>this.setState({PFCurrency:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PFInstrument" label="Form PF Instrument" variant="outlined" fullWidth value={this.state.PFInstrument} onChange={(e)=>this.setState({PFInstrument:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PFLiquidityProfile" label="Form PF Liquidity Profile" variant="outlined" fullWidth value={this.state.PFLiquidityProfile} onChange={(e)=>this.setState({PFLiquidityProfile:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PFMaturity" label="Form PF Maturity " variant="outlined" fullWidth value={this.state.PFMaturity } onChange={(e)=>this.setState({PFMaturity:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PFNAICSCode" label="Form PF NAICS Code " variant="outlined" fullWidth value={this.state.PFNAICSCode} onChange={(e)=>this.setState({ PFNAICSCode:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PFRegion" label="Form PF Region " variant="outlined" fullWidth value={this.state.PFRegion} onChange={(e)=>this.setState({PFRegion:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PFSector" label="Form PF Sector" variant="outlined" fullWidth value={this.state.PFSector} onChange={(e)=>this.setState({PFSector:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PFSubAssetClass" label="Form PF Sub Asset Class" variant="outlined" fullWidth value={this.state.PFSubAssetClass} onChange={(e)=>this.setState({PFSubAssetClass:e.target.value})} /></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Reference Data</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="CountryOfIssurance" label="Issue Country" variant="outlined" fullWidth value={this.state.CountryOfIssurance} onChange={(e)=>this.setState({CountryOfIssurance:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Exchange" label="Exchange " variant="outlined" fullWidth value={this.state.Exchange} onChange={(e)=>this.setState({ Exchange:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Issurer" label="Issuer" variant="outlined" fullWidth value={this.state.Issurer} onChange={(e)=>this.setState({Issurer :e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="IssueCurrency" label="Issue Currency " variant="outlined" fullWidth value={this.state.IssueCurrency} onChange={(e)=>this.setState({ IssueCurrency:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="TradingCurrency" label="Trading Currency" variant="outlined" fullWidth value={this.state.TradingCurrency} onChange={(e)=>this.setState({TradingCurrency:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BBGIndustrySubGroup" label="Bloomberg Industry Sub Group" variant="outlined" fullWidth value={this.state.BBGIndustrySubGroup} onChange={(e)=>this.setState({BBGIndustrySubGroup:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BBloombergIndustryGroup" label="Bloomberg Industry Group" variant="outlined" fullWidth value={this.state.BBloombergIndustryGroup} onChange={(e)=>this.setState({BBloombergIndustryGroup:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BloombergSector" label="Bloomberg Industry Sector" variant="outlined" fullWidth value={this.state.BloombergSector} onChange={(e)=>this.setState({BloombergSector:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="CountryOfIncorporation" label="Country of Incorporation" variant="outlined" fullWidth value={this.state.CountryOfIncorporation} onChange={(e)=>this.setState({CountryOfIncorporation:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="RiskCurrency" label="Risk Currency " variant="outlined" fullWidth value={this.state.RiskCurrency} onChange={(e)=>this.setState({RiskCurrency:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Pricing Details</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="OpenPrice" label="Open Price " error={this.state.OpenPrice < 0} helperText={this.state.OpenPrice < 0 ?"Only Numbers are allowed and can't be less than zero" : ""}   type='number'  variant="outlined" fullWidth value={this.state.OpenPrice} onChange={(e)=>this.setState({OpenPrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="ClosePrice" label="Close Price"error={this.state.ClosePrice < 0} helperText={this.state.ClosePrice < 0 ?"Only Numbers are allowed and can't be less than zero" : ""}   type='number'  variant="outlined" fullWidth value={this.state.ClosePrice} onChange={(e)=>this.setState({ClosePrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Volume" label="Volume " variant="outlined" error={this.state.Volume < 0} helperText={this.state.Volume < 0 ? "Only Numbers are allowed and can't be less than zero" : ""}  type='number'  fullWidth value={this.state.Volume} onChange={(e)=>this.setState({Volume:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="LastPrice" label="Last Price " variant="outlined" error={this.state.LastPrice < 0}  helperText={this.state.LastPrice < 0 ? "Only Numbers are allowed and can't be less than zero" : ""}   type='number'  fullWidth value={this.state.LastPrice} onChange={(e)=>this.setState({LastPrice:e.target.value})} required error={this.state.requiredError} helper={this.state.requiredError ? "Field can't be empty":""}/></div>
                              <div className={classes.textField}><TextField name="AskPrice" label="Ask Price " variant="outlined" error={this.state.AskPrice < 0} helperText={this.state.AskPrice < 0?"Only Numbers are allowed and can't be less than zero" : ""}   type='number'  fullWidth value={this.state.AskPrice} onChange={(e)=>this.setState({AskPrice:e.target.value})} required error={this.state.requiredError} helper={this.state.requiredError ? "Field can't be empty":""}/></div>
                              <div className={classes.textField}><TextField name="BidRatio" label="Bid Price " variant="outlined" error={this.state.BidRatio < 0} helperText={this.state.BidRatio < 0?"Only Numbers are allowed and can't be less than zero" : ""}   type='number'  fullWidth value={this.state.BidRatio} onChange={(e)=>this.setState({BidRatio:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PERatio" label="PE Ratio" variant="outlined" error={this.state.PERatio < 0} helperText={this.state.PERatio < 0?"Only Numbers are allowed and can't be less than zero" : ""}   type='number'  fullWidth value={this.state.PERatio} onChange={(e)=>this.setState({PERatio:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                             <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Divident History</Typography></div>
                              <Divider/>
                              <div className={classes.textField}>
                              <TextField
                              label="Declared Date " 
                              fullWidth 
                              type="datetime-local"
                              name="DividentDeclaredDate"
                              value={this.state.DividentDeclaredDate}
                              onChange={(e)=>this.setState({DividentDeclaredDate:e.target.value})}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              />
                              </div>
                              <div className={classes.textField}>
                              <TextField
                              label="Ex Date"
                              type="datetime-local"
                              fullWidth 
                              name="DividentExDate"
                              value={this.state.DividentExDate}
                              onChange={(e)=>this.setState({DividentExDate:e.target.value})}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              />
                              </div>
                              <div className={classes.textField}>
                              <TextField
                              label="Record Date"
                              fullWidth 
                              name="DividentRecordDate"
                              type="datetime-local"
                              value={this.state.DividentRecordDate}
                              onChange={(e)=>this.setState({DividentRecordDate:e.target.value})}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              />
                              </div>
                              <div className={classes.textField}>
                              <TextField
                              label="Pay Date"
                              type="datetime-local"
                              fullWidth 
                              name="DividentPayDate"
                              value={this.state.DividentPayDate}
                              onChange={(e)=>this.setState({DividentPayDate:e.target.value})}
                              required error={this.state.requiredError} helper={this.state.requiredError ? "Field can't be empty":""}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              />
                              </div>
                              <div className={classes.textField}><TextField name="DividentAmount" error={this.state.DividentAmount < 0}  type='number'  helperText={this.state.DividentAmount < 0 ?"Only Numbers are allowed and can't be less than zero" : ""} label="Amount" variant="outlined" fullWidth value={this.state.DividentAmount} onChange={(e)=>this.setState({DividentAmount:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Frequency"  label="Frequency" variant="outlined" fullWidth value={this.state.Frequency} onChange={(e)=>this.setState({ Frequency:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="DividentType" label="Divident Type" variant="outlined" fullWidth value={this.state.DividentType} onChange={(e)=>this.setState({DividentType:e.target.value})}/></div>
                            </div>
                        </div> 
                    <div style={{textAlign:'center'}}>
                       <Button variant="contained" disabled={!this.areAllFieldsFilled} className={classes.saveButton} style={{backgroundColor:"rgb(47, 46, 65)",marginTop:'20px'}} type="submit">SAVE</Button>
                    </div>
                    </MuiPickersUtilsProvider>  
                 </form>
              </CardContent>

          </Card>
          <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
             Equity Created Successfully !!
          </Alert>
        </Snackbar>
        <Snackbar open={this.state.openError} autoHideDuration={6000} onClose={this.handleCloseError}>
          <Alert onClose={this.handleCloseError} severity="error" sx={{ width: '100%' }}>
             Error!!
          </Alert>
        </Snackbar>
      </Container>
    )
  }
  areAllFieldsFilled =()=>  (this.state.SecurityName != "") || (this.state.SecurityDescription != "") || (this.state.BloombergUniqueID != "") || (this.state.LastPrice != "") || (this.state.AskPrice != "")
}

export default withStyles(styles) (CreateEquity)