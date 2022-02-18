import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container, Divider, Button, Typography,Snackbar} from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles';
import TextField from '@mui/material/TextField';
import '../../../styles/styles.css'
import {CircularProgress} from '@material-ui/core';
import { MuiPickersUtilsProvider} from '@material-ui/pickers'; 
import DateFnsUtils from '@date-io/date-fns';  
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  
export class CreateBond extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       success:false,error:false,open:false,
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
       CoupanFloor: "",
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
 
  }
    
    handleSubmit(event){
      event.preventDefault();

       const { SecurityName, SecurityDescription, AssetType, InvestmentType, TradingFactor,PricingFactor
        ,ISIN,BBGTicker, BBGUniqueID,SEDOL,FirstCouponDate
        ,CouponCap,CoupanFloor,CouponFrequency,CouponRate,
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
        CoupanFloor: CoupanFloor.value,
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
      fetch('http://localhost:14011/api/bond/post',{
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
          <Card className={classes.card} style={{background:'rgb(228 228 228)'}}>
          <Typography variant="h4" gutterBottom component="div" className={classes.tab}>Create Bond </Typography>
          <Divider/>
              <CardContent>
                 <form onSubmit={this.handleSubmit}>
                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div>
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Security Summary</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="SecurityName" label="Security Name" variant="outlined" fullWidth placeholder required/></div>
                              <div className={classes.textField}><TextField name="SecurityDescription" label="Security Description" variant="outlined"  fullWidth onChange={(e)=>this.setState({SecurityDescription:e.target.value})} required/></div>
                              <div className={classes.textField}><TextField name="AssetType" label="AssetType" variant="outlined"  fullWidth onChange={(e)=>this.setState({AssetType:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="InvestmentType" label="Investment Type" variant="outlined" fullWidth onChange={(e)=>this.setState({InvestmentType:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="TradingFactor" helperText="Only Numbers are allowed"  type='number' label="Trading Factor" variant="outlined" fullWidth onChange={(e)=>this.setState({TradingFactor:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="PricingFactor" helperText="Only Numbers are allowed" type='number' label="Pricing Factor" variant="outlined" fullWidth onChange={(e)=>this.setState({PricingFactor:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Security Identifier</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="ISIN" label="ISIN" variant="outlined" fullWidth  onChange={(e)=>this.setState({ISIN:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BBGTicker" label="BBGTicker" variant="outlined"  fullWidth onChange={(e)=>this.setState({BBGTicker:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BBGUniqueID" label="BBGUniqueID" variant="outlined"  fullWidth onChange={(e)=>this.setState({BBGUniqueID:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="SEDOL" label="SEDOL" variant="outlined" fullWidth onChange={(e)=>this.setState({SEDOL:e.target.value})}/></div>
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
                                
                                onChange={(e)=>this.setState({FirstCouponDate:e.target.value})}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </div>
                              <div className={classes.textField}><TextField name="CouponCap" label="Coupon Cap" variant="outlined" fullWidth onChange={(e)=>this.setState({CouponCap:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="CoupanFloor" label="Coupon Floor" variant="outlined" fullWidth  onChange={(e)=>this.setState({CoupanFloor:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="CouponFrequency" label="Coupon Frequency" variant="outlined" fullWidth  onChange={(e)=>this.setState({CouponFrequency:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="CouponRate" type='number' label="Coupon Rate" variant="outlined" fullWidth  onChange={(e)=>this.setState({CouponRate:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="CouponType" label="Coupon Type" variant="outlined" fullWidth  onChange={(e)=>this.setState({CouponType:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Spread" label="Spread" variant="outlined" fullWidth onChange={(e)=>this.setState({Spread:e.target.value})} /></div></div>
                              <div className={classes.textField}><TextField name="CallableFlag" label="Callable Flag" variant="outlined" fullWidth onChange={(e)=>this.setState({CallableFlag:e.target.value})} /></div>
                              <div className={classes.textField}><TextField name="FixToFloatFlag" label="Fix To Float Flag" variant="outlined" fullWidth  onChange={(e)=>this.setState({FixToFloatFlag:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PutableFlag" label="Putable Flag" variant="outlined" fullWidth  onChange={(e)=>this.setState({PutableFlag:e.target.value})}/></div>               
                              <div className={classes.textField}>
                                 <TextField
                                  label="Issue Date" 
                                  name="IssueDate"
                                  type="datetime-local"
                                  fullWidth
                                  onChange={(e)=>this.setState({IssueDate:e.target.value})}
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
                                onChange={(e)=>this.setState({Maturity:e.target.value})}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                             </div>
                      
                              <div className={classes.textField}><TextField name="CallNotificationMaxDays" helperText="Only Numbers are allowed" type='number' label="Call Notification Max Days" variant="outlined" fullWidth onChange={(e)=>this.setState({CallNotificationMaxDays:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PutNotificationMaxDays" helperText="Only Numbers are allowed" type='number' label="Put Notification Max Days" variant="outlined" fullWidth onChange={(e)=>this.setState({PutNotificationMaxDays:e.target.value})}/></div>
                              <div className={classes.textField}>
                                 <TextField
                                  label="Penultimate Coupon Date"
                                  name="PenultimateCouponDate"
                                  type="datetime-local"
                                  fullWidth
                                  onChange={(e)=>this.setState({PenultimateCouponDate:e.target.value})}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </div>   
                              <div className={classes.textField}><TextField name="PenultimateCouponDate" label="Penultimate Coupon Date" variant="outlined" fullWidth  onChange={(e)=>this.setState({PenultimateCouponDate:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="ResetFrequency" label="Reset Frequency" variant="outlined" fullWidth onChange={(e)=>this.setState({ResetFrequency:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="HasPosition" label="Has Position" variant="outlined" fullWidth onChange={(e)=>this.setState({HasPosition:e.target.value})}/>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Risk</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="MaculayDuration" helperText="Only Numbers are allowed" type='number' label="Maculay Duration" variant="outlined" fullWidth onChange={(e)=>this.setState({MaculayDuration:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Volatility30D" helperText="Only Numbers are allowed" type='number' label="Volatility30D" variant="outlined" fullWidth onChange={(e)=>this.setState({Volatility30D:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Volatility90D" helperText="Only Numbers are allowed" type='number' label="Volatility90D" variant="outlined" fullWidth onChange={(e)=>this.setState({Holatility90D:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Convexity" helperText="Only Numbers are allowed" type='number' label="Convexity" variant="outlined" fullWidth onChange={(e)=>this.setState({Convexity:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="AverageVolume30D"helperText="Only Numbers are allowed" type='number' label="Average Volume 30D" variant="outlined" fullWidth onChange={(e)=>this.setState({AverageVolume30D:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Regulatory Details</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="PFAssetClass" label="PF Asset Class" variant="outlined" fullWidth onChange={(e)=>this.setState({PFAssetClass:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFCountry" label="PF Country" variant="outlined" fullWidth onChange={(e)=>this.setState({PFCountry:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFCreditRating" label="PF Credit Rating" variant="outlined" fullWidth onChange={(e)=>this.setState({PFCreditRating:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFCurrency" label="PF Currency" variant="outlined" fullWidth onChange={(e)=>this.setState({PFCurrency:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFInstrument" label="PF Instrument" variant="outlined" fullWidth onChange={(e)=>this.setState({PFInstrument:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFLiquidityProfile" label="PF Liquidity Profile" variant="outlined" fullWidth onChange={(e)=>this.setState({PFLiquidityProfile:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFMaturity" label="PF Maturity" variant="outlined" fullWidth onChange={(e)=>this.setState({PFMaturity:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFNAICSCode" label="PF NAICS Code" variant="outlined" fullWidth onChange={(e)=>this.setState({PFNAICSCode:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFRegion" label="PF Region" variant="outlined" fullWidth onChange={(e)=>this.setState({PFRegion:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFSector" label="PF Sector" variant="outlined" fullWidth onChange={(e)=>this.setState({PFSector:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="PFSubAssetClass" label="PF Sub Asset Class" variant="outlined" fullWidth onChange={(e)=>this.setState({PFSubAssetClass:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Reference Data</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="BloombergIndustryGroup" label="Bloomberg Industry Group" variant="outlined" fullWidth onChange={(e)=>this.setState({BloombergIndustryGroup:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BloombergIndustrySubGroup" label="Bloomberg Industry SubGroup" variant="outlined" fullWidth onChange={(e)=>this.setState({BloombergIndustrySubGroup:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BloombergIndustrySector" label="Bloomberg Industry Sector" variant="outlined" fullWidth onChange={(e)=>this.setState({BloombergIndustrySector:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="CountryOfIssurance" label="Country Of Issurance" variant="outlined" fullWidth onChange={(e)=>this.setState({CountryOfIssurance:e.target.value})} required/></div>
                              <div className={classes.textField}><TextField name="IssueCurrency" label="Issue Currency" variant="outlined" fullWidth  onChange={(e)=>this.setState({IssueCurrency:e.target.value})} required/></div>
                              <div className={classes.textField}><TextField name="Issuer" label="Issuer" variant="outlined" fullWidth onChange={(e)=>this.setState({Issuer:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="RiskCurrency" label="Risk Currency" variant="outlined" fullWidth onChange={(e)=>this.setState({RiskCurrency:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Put Schedule</Typography></div>
                              <Divider/>
                              <div className={classes.textField}>
                                <TextField
                                  label="Put Date"
                                  name="PutDate"  
                                  type="datetime-local"
                                  fullWidth
                                  onChange={(e)=>this.setState({PutDate:e.target.value})}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </div>
                              <div className={classes.textField}><TextField name="PutPrice" type='number' helperText="Only Numbers are allowed" label="Put Price" variant="outlined" fullWidth  onChange={(e)=>this.setState({PutPrice:e.target.value})}/></div>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <div className={classes.tabSubHeading}><Typography variant="h6" gutterBottom component="div" className={classes.tab}>Pricing And Analytics</Typography></div>
                              <Divider/>
                              <div className={classes.textField}><TextField name="AskPrice" helperText="Only Numbers are allowed"type='number' label="Ask Price" variant="outlined" fullWidth onChange={(e)=>this.setState({AskPrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="HighPrice" helperText="Only Numbers are allowed" type='number' label="High Price" variant="outlined" fullWidth onChange={(e)=>this.setState({HighPrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="Volume" type='number'helperText="Only Numbers are allowed"  label="Volume" variant="outlined" fullWidth  onChange={(e)=>this.setState({Volume:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="LowPrice" type='number' helperText="Only Numbers are allowed" type='number'  label="Low Price" variant="outlined" fullWidth  onChange={(e)=>this.setState({LowPrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="BidPrice" type='number' helperText="Only Numbers are allowed" label="Bid Price" variant="outlined" fullWidth onChange={(e)=>this.setState({BidPrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="LastPrice" type='number' helperText="Only Numbers are allowed" label="Last Price" variant="outlined" fullWidth  onChange={(e)=>this.setState({LastPrice:e.target.value})}/></div>
                              <div className={classes.textField}><TextField name="OpenPrice" type='number' helperText="Only Numbers are allowed" label="Open Price" variant="outlined" fullWidth onChange={(e)=>this.setState({OpenPrice:e.target.value})}/></div>
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
                                  onChange={(e)=>this.setState({CallDate:e.target.value})}  
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </div>
                              <div className={classes.textField}><TextField type='number' helperText="Only Numbers are allowed"  name="CallPrice" label="Call Price" variant="outlined" fullWidth value={this.state.CallPrice} onChange={(e)=>this.setState({CallPrice:e.target.value})}/>  </div>
                            </div> 
                        </div> 
                    <div style={{textAlign:'center'}}><Button variant="contained" className={classes.saveButton} style={{backgroundColor:"rgb(47, 46, 65)",marginTop:'20px'}} type="submit">SAVE</Button></div>
                    </MuiPickersUtilsProvider>  
                 </form>
              </CardContent>

          </Card>
          <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
            <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
               Bond Created Successfully !!
            </Alert>
          </Snackbar>
      </Container>
    )
  }
}

export default withStyles(styles) (CreateBond)