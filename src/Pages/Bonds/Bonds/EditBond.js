import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container, Divider, Button,  Dialog,DialogActions,
        DialogContent,DialogContentText, Typography, Snackbar } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles';
import TextField from '@mui/material/TextField';
import '../../../styles/styles.css'
import {CircularProgress} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'; 
import DateFnsUtils from '@date-io/date-fns';  
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
export class EditBond extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       bonds:[],success:false,error:false,open:false,
       BondId: "",
       SecurityName: "",
       SecurityDescription: "",
       AssetType: "",
       InvestmentType: "",
       TradingFactor: "",
       PricingFactor: "",
       ISIN: "",
       BBGTicker: "",
       BBGUniqueID: "",
       SEDOL: "",
       FirstCouponDate: "",
       CouponCap: "",
       CouponFloor: "",
       CouponFrequency: "",
       CouponRate: "",
       CouponType: "",
       Spread: "",
       CallableFlag: "",
       FixToFloatFlag: "",
       PutableFlag: "",
       IssueDate: "",
       LastResetDate:"",
       Maturity:"",
       CallNotificationMaxDays: "",
       PutNotificationMaxDays: "",
       PenultimateCouponDate: "",
       ResetFrequency: "",
       HasPosition: "",
       MaculayDuration: "",
       Volatility30D: "",
       Volatility90D: "",
       Convexity:"",
       AverageVolume30D: "",
       PFAssetClass: "",
       PFCountry: "",
       PFCreditRating: "",
       PFCurrency: "",
       PFInstrument: "",
       PFLiquidityProfile: "",
       PFMaturity: "",
       PFNAICSCode: "",
       PFRegion: "",
       PFSector:"",
       PFSubAssetClass: "",
       BloombergIndustryGroup: "",
       BloombergIndustrySubGroup: "",
       BloombergIndustrySector: "",
       CountryOfIssurance: "",
       IssueCurrency: "",
       Issuer: "",
       RiskCurrency: "",
       PutDate: "",
       PutPrice: "",
       AskPrice: "",
       HighPrice:"",
       Volume: "",
       LowPrice: "",
       BidPrice: "",
       LastPrice: "",
       OpenPrice: "",
       CallDate: "",
       CallPrice: "",
       loading:false,
    }
  }
  refreshList(){
      this.setState({loading:true})
      fetch('http://localhost:14011/api/bond/'+this.props.match.params.id)
      .then(response=>response.json())
      .then(data=>{
          console.log(data)
          this.setState({bonds:data,
            BondId: data.BondId,
            SecurityName: data.SecurityName,
            SecurityDescription: data.SecurityDescription,
            AssetType: data.AssetType,
            InvestmentType: data.InvestmentType,
            TradingFactor: data.TradingFactor,
            PricingFactor: data.PricingFactor,
            ISIN: data.ISIN,
            BBGTicker: data.BBGTicker,
            BBGUniqueID: data.BBGUniqueID,
            SEDOL: data.SEDOL,
            FirstCouponDate: data.FirstCouponDate,
            CouponCap: data.CouponCap,
            CouponFloor: data.CouponFloor,
            CouponFrequency: data.CouponFrequency,
            CouponRate: data.CouponRate,
            CouponType: data.CouponType,
            Spread: data.Spread,
            CallableFlag: data.CallableFlag,
            FixToFloatFlag: data.FixToFloatFlag,
            PutableFlag: data.PutableFlag,
            IssueDate: data.IssueDate,
            LastResetDate:data.LastResetDate,
            Maturity:data.Maturity,
            CallNotificationMaxDays: data.CallNotificationMaxDays,
            PutNotificationMaxDays: data.PutNotificationMaxDays,
            PenultimateCouponDate: data.PenultimateCouponDate,
            ResetFrequency: data.ResetFrequency,
            HasPosition: data.HasPosition,
            MaculayDuration: data.MaculayDuration,
            Volatility30D: data.Volatility30D,
            Volatility90D: data.Volatility90D,
            Convexity:data.Convexity,
            AverageVolume30D: data.AverageVolume30D,
            PFAssetClass: data.PFAssetClass,
            PFCountry: data.PFCountry,
            PFCreditRating: data.PFCreditRating,
            PFCurrency: data.PFCurrency,
            PFInstrument: data.PFInstrument,
            PFLiquidityProfile: data.PFLiquidityProfile,
            PFMaturity: data.PFMaturity,
            PFNAICSCode: data.PFNAICSCode,
            PFRegion: data.PFRegion,
            PFSector: data.PFSector,
            PFSubAssetClass: data.PFSubAssetClass,
            BloombergIndustryGroup: data.BloombergIndustryGroup,
            BloombergIndustrySubGroup: data.BloombergIndustrySubGroup,
            BloombergIndustrySector: data.BloombergIndustrySector,
            CountryOfIssurance: data.CountryOfIssurance,
            IssueCurrency: data.IssueCurrency,
            Issuer: data.Issuer,
            RiskCurrency: data.RiskCurrency,
            PutDate: data.PutDate,
            PutPrice: data.PutPrice,
            AskPrice: data.AskPrice,
            HighPrice: data.HighPrice,
            Volume: data.Volume,
            LowPrice: data.LowPrice,
            BidPrice: data.BidPrice,
            LastPrice: data.LastPrice,
            OpenPrice: data.OpenPrice,
            CallDate: data.CallDate,
            CallPrice:  data.CallPrice, 
            loading:false
          });
      });
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    this.refreshList();
  }
    
    handleSubmit(event){
      event.preventDefault();

       const { BondId,SecurityName, SecurityDescription, AssetType, InvestmentType, TradingFactor,PricingFactor
        ,ISIN,BBGTicker, BBGUniqueID,SEDOL,FirstCouponDate
        ,CouponCap,CouponFloor,CouponFrequency,CouponRate,
        CouponType,Spread,CallableFlag,FixToFloatFlag,
        PutableFlag,IssueDate,LastResetDate,Maturity,
        CallNotificationMaxDays,PutNotificationMaxDays,
        PenultimateCouponDate,ResetFrequency,HasPosition,
        MaculayDuration,Volatility30D,Volatility90D,Convexity,
        AverageVolume30D,PFAssetClass,PFCountry,PFCreditRating,
        PFCurrency,PFInstrument,PFLiquidityProfile,PFMaturity,
        PFNAICSCode,PFRegion,PFSector,PFSubAssetClass,
        BloombergIndustryGroup,BloombergIndustrySubGroup,
        BloombergIndustrySector,CountryOfIssurance,IssueCurrency,
        Issuer,RiskCurrency,PutDate,PutPrice,AskPrice,HighPrice,
        Volume,LowPrice,BidPrice,LastPrice,OpenPrice,CallDate,CallPrice   
        } = event.target.elements;
      let details = {
        SecurityName: SecurityName.value,
        SecurityDescription: SecurityDescription.value,
        AssetType: AssetType.value,
        InvestmentType: InvestmentType.value,
        TradingFactor: TradingFactor.value,
        PricingFactor: PricingFactor.value,
        ISIN: ISIN.value,
        BBGTicker: BBGTicker.value,
        BBGUniqueID: BBGUniqueID.value,
        SEDOL: SEDOL.value,
        FirstCouponDate: FirstCouponDate.value,
        CouponCap: CouponCap.value,
        CouponFloor: CouponFloor.value,
        CouponFrequency: CouponFrequency.value,
        CouponRate: CouponRate.value,
        CouponType: CouponType.value,
        Spread: Spread.value,
        CallableFlag: CallableFlag.value,
        FixToFloatFlag: FixToFloatFlag.value,
        PutableFlag: PutableFlag.value,
        IssueDate: IssueDate.value,
        LastResetDate:LastResetDate.value,
        Maturity:Maturity.value,
        CallNotificationMaxDays: CallNotificationMaxDays.value,
        PutNotificationMaxDays: PutNotificationMaxDays.value,
        PenultimateCouponDate: PenultimateCouponDate.value,
        ResetFrequency: ResetFrequency.value,
        HasPosition: HasPosition.value,
        MaculayDuration: MaculayDuration.value,
        Volatility30D: Volatility30D.value,
        Volatility90D: Volatility90D.value,
        Convexity:Convexity.value,
        AverageVolume30D: AverageVolume30D.value,
        PFAssetClass: PFAssetClass.value,
        PFCountry: PFCountry.value,
        PFCreditRating: PFCreditRating.value,
        PFCurrency: PFCurrency.value,
        PFInstrument: PFInstrument.value,
        PFLiquidityProfile: PFLiquidityProfile.value,
        PFMaturity: PFMaturity.value,
        PFNAICSCode: PFNAICSCode.value,
        PFRegion: PFRegion.value,
        PFSector: PFSector.value,
        PFSubAssetClass: PFSubAssetClass.value,
        BloombergIndustryGroup: BloombergIndustryGroup.value,
        BloombergIndustrySubGroup: BloombergIndustrySubGroup.value,
        BloombergIndustrySector: BloombergIndustrySector.value,
        CountryOfIssurance: CountryOfIssurance.value,
        IssueCurrency: IssueCurrency.value,
        Issuer: Issuer.value,
        RiskCurrency: RiskCurrency.value,
        PutDate: PutDate.value,
        PutPrice: PutPrice.value,
        AskPrice: AskPrice.value,
        HighPrice: HighPrice.value,
        Volume: Volume.value,
        LowPrice: LowPrice.value,
        BidPrice: BidPrice.value,
        LastPrice: LastPrice.value,
        OpenPrice: OpenPrice.value,
        CallDate: CallDate.value,
        CallPrice: CallPrice.value,   
      }
      console.log(details)
      fetch('http://localhost:14011/api/bond/'+BondId.value,{
          method:'PUT',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(details),
        
        }) 
        .then((response) => { 
          this.setState({open:true})
      })
      .catch((error) => { 
        console.log(error)
    })
  }
  handleOpen=()=>{this.setState({open:true})} 
  handleClose=()=>{this.setState({open:false})} 
  render(){
    const {classes} = this.props;
    return (
      <Container>
           <div className={classes.load}>
              {this.state.loading ? <div style={{textAlign:"center"}}> <CircularProgress/></div> :''}
           </div>
          <Card className={classes.card} style={{background: '#e0e0e0'}}>
          <Typography variant="h4" gutterBottom component="div" className={classes.tab}>Edit Bond </Typography>
          <Divider/>
              <CardContent>
                 <form onSubmit={this.handleSubmit}>
                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div>
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Security Summary</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="BondId" label="Bond Id" value={this.state.BondId} variant="outlined" fullWidth disabled /></div>
                              <div className={classes.textField}><TextField name="SecurityName" label="Security Name" variant="outlined" placeholder value={this.state.SecurityName}  fullWidth onChange={(e)=>this.setState({SecurityName:e.target.value})} required/></div>
                              <div className={classes.textField}><TextField name="SecurityDescription" label="Security Description" variant="outlined" value={this.state.SecurityDescription} fullWidth onChange={(e)=>this.setState({SecurityDescription:e.target.value})} required/></div>
                              <div className={classes.textField}><TextField name="AssetType" label="AssetType" variant="outlined" value={this.state.AssetType} fullWidth onChange={(e)=>this.setState({AssetType:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="InvestmentType" label="Investment Type" variant="outlined" value={this.state.InvestmentType} fullWidth onChange={(e)=>this.setState({InvestmentType:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="TradingFactor" error={this.state.TradingFactor < 0} helperText={this.state.TradingFactor < 0?"Only Numbers are allowed and can't be less than zero" : ""}  type='number'  label="Trading Factor" variant="outlined" value={this.state.TradingFactor} fullWidth onChange={(e)=>this.setState({TradingFactor:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PricingFactor" error={this.state.PricingFactor < 0} helperText={this.state.PricingFactor < 0?"Only Numbers are allowed and can't be less than zero" : ""} type='number'  label="Pricing Factor" variant="outlined" value={this.state.PricingFactor} fullWidth onChange={(e)=>this.setState({PricingFactor:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Security Identifier</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="ISIN" label="ISIN" variant="outlined" fullWidth value={this.state.ISIN} onChange={(e)=>this.setState({ISIN:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BBGTicker" label="BBGTicker" variant="outlined" value={this.state.BBGTicker} fullWidth onChange={(e)=>this.setState({BBGTicker:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BBGUniqueID" label="BBGUniqueID" variant="outlined" value={this.state.BBGUniqueID} fullWidth onChange={(e)=>this.setState({BBGUniqueID:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="SEDOL" label="SEDOL" variant="outlined" fullWidth value={this.state.SEDOL} onChange={(e)=>this.setState({SEDOL:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Security Details</Typography></div>
                              <Divider/>
                              <div className={classes.textField}>
                              <TextField
                                label="First Coupon Date"
                                name="FirstCouponDate"
                                type="datetime-local"
                                fullWidth
                                value={this.state.FirstCouponDate} 
                                onChange={(e)=>this.setState({FirstCouponDate:e.target.value})}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </div>
                              <div className={classes.textField}><TextField name="CouponCap" label="Coupon Cap" variant="outlined" fullWidth value={this.state.CouponCap} onChange={(e)=>this.setState({CouponCap:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="CouponFloor" label="Coupon Floor" variant="outlined" fullWidth value={this.state.CouponFloor} onChange={(e)=>this.setState({CouponFloor:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="CouponFrequency" label="Coupon Frequency" variant="outlined" fullWidth value={this.state.CouponFrequency} onChange={(e)=>this.setState({CouponFrequency:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="CouponRate"  type='number'  label="Coupon Rate" variant="outlined" fullWidth value={this.state.CouponRate} onChange={(e)=>this.setState({CouponRate:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="CouponType" label="Coupon Type" variant="outlined" fullWidth  value={this.state.CouponType} onChange={(e)=>this.setState({CouponType:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Spread" label="Spread" variant="outlined" fullWidth value={this.state.Spread} onChange={(e)=>this.setState({Spread:e.target.value})} /></div></div> 
                              <div className={classes.textField}>
                               <InputLabel id="CallableFlag">Callable Flag</InputLabel>
                               <Select
                                labelId="CallableFlag"
                                name="CallableFlag"
                                label="Callable Flag"
                                variant="outlined" fullWidth
                                value={this.state.CallableFlag ? 'True' :'False'}
                                onChange={(e)=>this.setState({CallableFlag:e.target.value})}
                              >
                                <MenuItem value={"True"}>True</MenuItem>
                                <MenuItem value={"False"}>False</MenuItem>
                              </Select>
                              </div>
                              <div className={classes.textField}>
                              <InputLabel id="FixToFloatFlag">FixToFloatFlag</InputLabel>
                                 <Select
                                  labelId="FixToFloatFlag"
                                  name="FixToFloatFlag"
                                  label="FixToFloatFlag"
                                  variant="outlined" fullWidth
                                  value={this.state.FixToFloatFlag ? 'True' :'False'}
                                  onChange={(e)=>this.setState({FixToFloatFlag:e.target.value})}
                                >
                                  <MenuItem value={"True"}>True</MenuItem>
                                  <MenuItem value={"False"}>False</MenuItem>
                                </Select>
                              </div> 
                              <div className={classes.textField}><TextField name="PutableFlag" label="Putable Flag" variant="outlined" fullWidth value={this.state.PutableFlag} onChange={(e)=>this.setState({PutableFlag:e.target.value})}/></div>
                              <div className={classes.textField}>
                                 <TextField
                                  label="Issue Date" 
                                  name="IssueDate"
                                  type="datetime-local"
                                  fullWidth
                                  value={this.state.IssueDate} onChange={(e)=>this.setState({IssueDate:e.target.value})}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </div>
                              <div className={classes.textField}> 
                                <TextField
                                  label="Last Reset Date" 
                                  name="LastResetDate"
                                  type="datetime-local"
                                  fullWidth
                                  value={this.state.LastResetDate}
                                  onChange={(e)=>this.setState({LastResetDate:e.target.value}) }
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </div>
                              <div className={classes.textField}>
                              <TextField
                                label="Maturity"
                                name="Maturity"
                                type="datetime-local"
                                fullWidth
                                value={this.state.Maturity} onChange={(e)=>this.setState({Maturity:e.target.value})}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                             </div>
                      
                              <div className={classes.textField}><TextField name="CallNotificationMaxDays" error={this.state.CallNotificationMaxDays < 0} helperText={this.state.CallNotificationMaxDays < 0?"Only Numbers are allowed and can't be less than zero" : ""}  type='number'  label="Call Notification Max Days" variant="outlined" fullWidth value={this.state.CallNotificationMaxDays} onChange={(e)=>this.setState({CallNotificationMaxDays:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PutNotificationMaxDays" error={this.state.PutNotificationMaxDays < 0} helperText={this.state.PutNotificationMaxDays < 0?"Only Numbers are allowed and can't be less than zero" : ""} type='number'  label="Put Notification Max Days" variant="outlined" fullWidth value={this.state.PutNotificationMaxDays} onChange={(e)=>this.setState({PutNotificationMaxDays:e.target.value})}/></div>
                              <div className={classes.textField}>
                                 <TextField
                                  label="Penultimate Coupon Date"
                                  name="PenultimateCouponDate"
                                  type="datetime-local"
                                  fullWidth
                                  value={this.state.PenultimateCouponDate} onChange={(e)=>this.setState({PenultimateCouponDate:e.target.value})}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </div>
                              <div className={classes.textField}><TextField name="PenultimateCouponDate" label="Penultimate Coupon Date" variant="outlined" fullWidth value={this.state.PenultimateCouponDate} onChange={(e)=>this.setState({PenultimateCouponDate:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="ResetFrequency" label="Reset Frequency" variant="outlined" fullWidth value={this.state.ResetFrequency} onChange={(e)=>this.setState({ResetFrequency:e.target.value})}/></div>
                              <div className={classes.textField}>
                              <InputLabel id="HasPosition">HasPosition</InputLabel>
                                 <Select
                                  labelId="HasPosition"
                                  name="HasPosition"
                                  label="Has Position"
                                  variant="outlined" fullWidth
                                  value={this.state.HasPosition ? 'True' :'False'}
                                  onChange={(e)=>this.setState({HasPosition:e.target.value})}
                                >
                                  <MenuItem value={"True"}>True</MenuItem>
                                  <MenuItem value={"False"}>False</MenuItem>
                                </Select>
                              </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Risk</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="MaculayDuration"  error={this.state.MaculayDuration < 0} helperText={this.state.MaculayDuration < 0?"Only Numbers are allowed and can't be less than zero" : ""} type='number'  label="Maculay Duration" variant="outlined" fullWidth value={this.state.MaculayDuration} onChange={(e)=>this.setState({MaculayDuration:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Volatility30D"  error={this.state.Volatility30D < 0} helperText={this.state.Volatility30D < 0?"Only Numbers are allowed and can't be less than zero" : ""} type='number'  label="Volatility30D" variant="outlined" fullWidth value={this.state.Volatility30D} onChange={(e)=>this.setState({Volatility30D:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Volatility90D"  error={this.state.Volatility90D < 0} helperText={this.state.Volatility90D < 0?"Only Numbers are allowed and can't be less than zero" : ""} type='number'  label="Volatility90D" variant="outlined" fullWidth value={this.state.Volatility90D} onChange={(e)=>this.setState({Holatility90D:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Convexity"  error={this.state.Convexity < 0} helperText={this.state.Convexity < 0?"Only Numbers are allowed and can't be less than zero" : ""} type='number'  label="Convexity" variant="outlined" fullWidth value={this.state.Convexity} onChange={(e)=>this.setState({Convexity:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="AverageVolume30D"  error={this.state.AverageVolume30D < 0} helperText={this.state.AverageVolume30D < 0?"Only Numbers are allowed and can't be less than zero" : ""} type='number'  label="Average Volume 30D" variant="outlined" fullWidth value={this.state.AverageVolume30D} onChange={(e)=>this.setState({AverageVolume30D:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Regulatory Details</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="PFAssetClass" label="PF Asset Class" variant="outlined" fullWidth value={this.state.PFAssetClass} onChange={(e)=>this.setState({PFAssetClass:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFCountry" label="PF Country" variant="outlined" fullWidth value={this.state.PFCountry} onChange={(e)=>this.setState({PFCountry:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFCreditRating" label="PF Credit Rating" variant="outlined" fullWidth value={this.state.PFCreditRating} onChange={(e)=>this.setState({PFCreditRating:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFCurrency" label="PF Currency" variant="outlined" fullWidth value={this.state.PFCurrency} onChange={(e)=>this.setState({PFCurrency:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFInstrument" label="PF Instrument" variant="outlined" fullWidth value={this.state.PFInstrument} onChange={(e)=>this.setState({PFInstrument:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFLiquidityProfile" label="PF Liquidity Profile" variant="outlined" fullWidth value={this.state.PFLiquidityProfile} onChange={(e)=>this.setState({PFLiquidityProfile:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFMaturity" label="PF Maturity" variant="outlined" fullWidth value={this.state.PFMaturity} onChange={(e)=>this.setState({PFMaturity:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFNAICSCode" label="PF NAICS Code" variant="outlined" fullWidth value={this.state.PFNAICSCode} onChange={(e)=>this.setState({PFNAICSCode:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFRegion" label="PF Region" variant="outlined" fullWidth value={this.state.PFRegion} onChange={(e)=>this.setState({PFRegion:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFSector" label="PF Sector" variant="outlined" fullWidth value={this.state.PFSector} onChange={(e)=>this.setState({PFSector:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFSubAssetClass" label="PF Sub Asset Class" variant="outlined" fullWidth value={this.state.PFSubAssetClass} onChange={(e)=>this.setState({PFSubAssetClass:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Reference Data</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="BloombergIndustryGroup" label="Bloomberg Industry Group" variant="outlined" fullWidth value={this.state.BloombergIndustryGroup} onChange={(e)=>this.setState({BloombergIndustryGroup:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BloombergIndustrySubGroup" label="Bloomberg Industry SubGroup" variant="outlined" fullWidth value={this.state.BloombergIndustrySubGroup} onChange={(e)=>this.setState({BloombergIndustrySubGroup:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BloombergIndustrySector" label="Bloomberg Industry Sector" variant="outlined" fullWidth value={this.state.BloombergIndustrySector} onChange={(e)=>this.setState({BloombergIndustrySector:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="CountryOfIssurance" label="Country Of Issurance" variant="outlined" fullWidth value={this.state.CountryOfIssurance} onChange={(e)=>this.setState({CountryOfIssurance:e.target.value})} required/></div>
                              <div className={classes.textField}><TextField name="IssueCurrency" label="Issue Currency" variant="outlined" fullWidth value={this.state.IssueCurrency} onChange={(e)=>this.setState({IssueCurrency:e.target.value})} required/></div>
                              <div className={classes.textField}><TextField name="Issuer" label="Issuer" variant="outlined" fullWidth value={this.state.Issuer} onChange={(e)=>this.setState({Issuer:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="RiskCurrency" label="Risk Currency" variant="outlined" fullWidth value={this.state.RiskCurrency} onChange={(e)=>this.setState({RiskCurrency:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                             <div className={classes.tabSubHeading}> <Typography variant="h6" gutterBottom component="div" className={classes.tab}>Put Schedule</Typography></div>
                              <Divider/>
                              <div className={classes.textField}>
                                <TextField
                                  label="Put Date"
                                  name="PutDate"  
                                  type="datetime-local"
                                  fullWidth
                                  value={this.state.PutDate} onChange={(e)=>this.setState({PutDate:e.target.value})}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </div>
                              <div className={classes.textField}><TextField name="PutPrice"  type='number'  error={this.state.PutPrice < 0} helperText={this.state.PutPrice < 0?"Only Numbers are allowed and can't be less than zero" : ""} label="Put Price" variant="outlined" fullWidth value={this.state.PutPrice} onChange={(e)=>this.setState({PutPrice:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Pricing And Analytics</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="AskPrice"  error={this.state.AskPrice < 0} helperText={this.state.AskPrice < 0?"Only Numbers are allowed and can't be less than zero" : ""}type='number'  label="Ask Price" variant="outlined" fullWidth value={this.state.AskPrice} onChange={(e)=>this.setState({AskPrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="HighPrice"  error={this.state.HighPrice < 0} helperText={this.state.HighPrice < 0?"Only Numbers are allowed and can't be less than zero" : ""} type='number'  label="High Price" variant="outlined" fullWidth value={this.state.HighPrice} onChange={(e)=>this.setState({HighPrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Volume"  type='number'error={this.state.Volume < 0} helperText={this.state.Volume < 0?"Only Numbers are allowed and can't be less than zero" : ""}  label="Volume" variant="outlined" fullWidth value={this.state.Volume} onChange={(e)=>this.setState({Volume:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="LowPrice" type='number'  error={this.state.LowPrice < 0} helperText={this.state.LowPrice < 0?"Only Numbers are allowed and can't be less than zero" : ""} type='number'   label="Low Price" variant="outlined" fullWidth value={this.state.LowPrice} onChange={(e)=>this.setState({LowPrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BidPrice"  type='number'  error={this.state.BidPrice < 0} helperText={this.state.BidPrice < 0?"Only Numbers are allowed and can't be less than zero" : ""} label="Bid Price" variant="outlined" fullWidth value={this.state.BidPrice} onChange={(e)=>this.setState({BidPrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="LastPrice"  type='number'  error={this.state.LastPrice < 0} helperText={this.state.LotSize < 0?"Only Numbers are allowed and can't be less than zero" : ""} label="Last Price" variant="outlined" fullWidth value={this.state.LastPrice} onChange={(e)=>this.setState({LastPrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="OpenPrice" type='number'  error={this.state.OpenPrice < 0} helperText={this.state.OpenPrice < 0?"Only Numbers are allowed and can't be less than zero" : ""} label="Open Price" variant="outlined" fullWidth value={this.state.OpenPrice} onChange={(e)=>this.setState({OpenPrice:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Call Schedule</Typography></div>
                              <Divider/>
                              <div className={classes.textField}>
                                <TextField
                                  label="Call Date" 
                                  name="CallDate"  
                                  type="datetime-local"
                                  fullWidth
                                  value={this.state.CallDate} onChange={(e)=>this.setState({CallDate:e.target.value})}  
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </div>
                              <div className={classes.textField}><TextField  type='number'  error={this.state.CallPrice < 0} helperText={this.state.CallPrice < 0?"Only Numbers are allowed and can't be less than zero" : ""}  name="CallPrice" label="Call Price" variant="outlined" fullWidth value={this.state.CallPrice} onChange={(e)=>this.setState({CallPrice:e.target.value})}/>  </div>
                            </div> 
                        </div> 
                    <div style={{textAlign:'center'}}><Button variant="contained" className={classes.saveButton} style={{backgroundColor:"rgb(47, 46, 65)",marginTop:'20px'}} type="submit">SAVE</Button></div>
                    </MuiPickersUtilsProvider>  
                 </form>
              </CardContent>

          </Card>
          <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
             Bond Edited Successfully !!
          </Alert>
        </Snackbar>
      </Container>
    )
  }
}

export default withStyles(styles) (EditBond)