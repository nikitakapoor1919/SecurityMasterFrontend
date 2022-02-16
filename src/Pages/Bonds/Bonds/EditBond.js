import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container, Divider, Button,  Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText, Typography } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';
import TextField from '@mui/material/TextField';
import '../styles/styles.css'

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
    }
  }
  refreshList(){
      fetch('http://localhost:14011/api/bond/'+this.props.match.params.id)
      .then(response=>response.json())
      .then(data=>{
          this.setState({bonds:data,
            BondId: data[0].BondId,
            SecurityName: data[0].SecurityName,
            SecurityDescription: data[0].SecurityDescription,
            AssetType: data[0].AssetType,
            InvestmentType: data[0].InvestmentType,
            TradingFactor: data[0].TradingFactor,
            PricingFactor: data[0].PricingFactor,
            ISIN: data[0].ISIN,
            BBGTicker: data[0].BBGTicker,
            BBGUniqueID: data[0].BBGUniqueID,
            SEDOL: data[0].SEDOL,
            FirstCouponDate: data[0].FirstCouponDate,
            CouponCap: data[0].CouponCap,
            CoupanFloor: data[0].CoupanFloor,
            CouponFrequency: data[0].CouponFrequency,
            CouponRate: data[0].CouponRate,
            CouponType: data[0].CouponType,
            Spread: data[0].Spread,
            CallableFlag: data[0].CallableFlag,
            FixToFloatFlag: data[0].FixToFloatFlag,
            PutableFlag: data[0].PutableFlag,
            IssueDate: data[0].IssueDate,
            LastResetDate:data[0].LastResetDate,
            Maturity:data[0].Maturity,
            CallNotificationMaxDays: data[0].CallNotificationMaxDays,
            PutNotificationMaxDays: data[0].PutNotificationMaxDays,
            PenultimateCouponDate: data[0].PenultimateCouponDate,
            ResetFrequency: data[0].ResetFrequency,
            HasPosition: data[0].HasPosition,
            MaculayDuration: data[0].MaculayDuration,
            Volatility30D: data[0].Volatility30D,
            Volatility90D: data[0].Volatility90D,
            Convexity:data[0].Convexity,
            AverageVolume30D: data[0].AverageVolume30D,
            PFAssetClass: data[0].PFAssetClass,
            PFCountry: data[0].PFCountry,
            PFCreditRating: data[0].PFCreditRating,
            PFCurrency: data[0].PFCurrency,
            PFInstrument: data[0].PFInstrument,
            PFLiquidityProfile: data[0].PFLiquidityProfile,
            PFMaturity: data[0].PFMaturity,
            PFNAICSCode: data[0].PFNAICSCode,
            PFRegion: data[0].PFRegion,
            PFSector: data[0].PFSector,
            PFSubAssetClass: data[0].PFSubAssetClass,
            BloombergIndustryGroup: data[0].BloombergIndustryGroup,
            BloombergIndustrySubGroup: data[0].BloombergIndustrySubGroup,
            BloombergIndustrySector: data[0].BloombergIndustrySector,
            CountryOfIssurance: data[0].CountryOfIssurance,
            IssueCurrency: data[0].IssueCurrency,
            Issuer: data[0].Issuer,
            RiskCurrency: data[0].RiskCurrency,
            PutDate: data[0].PutDate,
            PutPrice: data[0].PutPrice,
            AskPrice: data[0].AskPrice,
            HighPrice: data[0].HighPrice,
            Volume: data[0].Volume,
            LowPrice: data[0].LowPrice,
            BidPrice: data[0].BidPrice,
            LastPrice: data[0].LastPrice,
            OpenPrice: data[0].OpenPrice,
            CallDate: data[0].CallDate,
            CallPrice:  data[0].CallPrice, 
          
          });
      });
  }
  componentDidMount(){
    this.refreshList();
  }
    
    async handleSubmit(event){
      event.preventDefault();

       const { BondId,SecurityName, SecurityDescription, AssetType, InvestmentType, TradingFactor,PricingFactor
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
        BondId: BondId.value,
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
      fetch('http://localhost:14011/api/bond/',{
          method:'PUT',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(details),
        
        }) 
        alert("Saved Successfull")
      //   .then((response) => { 
      //     this.setState({open:true})
      //     // setTimeout(()=>this.setState({success:false}),4000)
      // })
  }
  handleOpen=()=>{this.setState({open:true})} 
  handleClose=()=>{this.setState({open:false})} 
  render(){
    const {classes} = this.props;
    return (
      <Container>
           <div style={{marginTop:100}}>
           </div>
          <Card className={classes.card}>
          <Typography variant="h4" gutterBottom component="div" className={classes.tab}>Edit Bond </Typography>
          <Divider/>
              <CardContent>
                 <form onSubmit={this.handleSubmit}>
                        <div>
                            <div className={classes.tabHeading}>
                              <Typography variant="h6" gutterBottom component="div" className={classes.tab}>Security Summary</Typography>
                              <TextField name="BondId" label="Bond Id" value={this.state.BondId} variant="filled" fullWidth readOnly />
                              <TextField name="SecurityName" label="Security Name" variant="filled" placeholder value={this.state.SecurityName}  fullWidth onChange={(e)=>this.setState({SecurityName:e.target.value})}/>
                              <TextField name="SecurityDescription" label="Security Description" variant="filled" value={this.state.SecurityDescription} fullWidth onChange={(e)=>this.setState({SecurityDescription:e.target.value})} />
                              <TextField name="AssetType" label="AssetType" variant="filled" value={this.state.AssetType} fullWidth onChange={(e)=>this.setState({AssetType:e.target.value})} />
                              <TextField name="InvestmentType" label="Investment Type" variant="filled" value={this.state.InvestmentType} fullWidth onChange={(e)=>this.setState({InvestmentType:e.target.value})}/>
                              <TextField name="TradingFactor" label="Trading Factor" variant="filled" value={this.state.TradingFactor} fullWidth onChange={(e)=>this.setState({TradingFactor:e.target.value})} />
                              <TextField name="PricingFactor" label="PricingPricingFactor Factor" variant="filled" value={this.state.PricingFactor} fullWidth onChange={(e)=>this.setState({PricingFactor:e.target.value})}/>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <Typography variant="h6" gutterBottom component="div" className={classes.tab}>Security Identifier</Typography>
                              <TextField name="ISIN" label="ISIN" variant="filled" fullWidth value={this.state.ISIN} onChange={(e)=>this.setState({ISIN:e.target.value})}/>
                              <TextField name="BBGTicker" label="BBGTicker" variant="filled" value={this.state.BBGTicker} fullWidth onChange={(e)=>this.setState({BBGTicker:e.target.value})}/>
                              <TextField name="BBGUniqueID" label="BBGUniqueID" variant="filled" value={this.state.BBGUniqueID} fullWidth onChange={(e)=>this.setState({BBGUniqueID:e.target.value})}/>
                              <TextField name="SEDOL" label="SEDOL" variant="filled" fullWidth value={this.state.SEDOL} onChange={(e)=>this.setState({SEDOL:e.target.value})}/>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <Typography variant="h6" gutterBottom component="div" className={classes.tab}>Security Details</Typography>
                              <TextField name="FirstCouponDate" label="First Coupon Date" variant="filled" fullWidth value={this.state.FirstCouponDate} onChange={(e)=>this.setState({FirstCouponDate:e.target.value})}/>
                              <TextField name="CouponCap" label="Coupon Cap" variant="filled" fullWidth value={this.state.CouponCap} onChange={(e)=>this.setState({CouponCap:e.target.value})} />
                              <TextField name="CoupanFloor" label="Coupon Floor" variant="filled" fullWidth value={this.state.CoupanFloor} onChange={(e)=>this.setState({CoupanFloor:e.target.value})}/>
                              <TextField name="CouponFrequency" label="Coupon Frequency" variant="filled" fullWidth value={this.state.CouponFrequency} onChange={(e)=>this.setState({CouponFrequency:e.target.value})}/>
                              <TextField name="CouponRate" label="Coupon Rate" variant="filled" fullWidth value={this.state.CouponRate} onChange={(e)=>this.setState({CouponRate:e.target.value})}/>
                              <TextField name="CouponType" label="Coupon Type" variant="filled" fullWidth  value={this.state.CouponType} onChange={(e)=>this.setState({CouponType:e.target.value})}/>
                              <TextField name="Spread" label="Spread" variant="filled" fullWidth value={this.state.Spread} onChange={(e)=>this.setState({Spread:e.target.value})} />
                              <TextField name="CallableFlag" label="Callable Flag" variant="filled" fullWidth value={this.state.CallableFlag} onChange={(e)=>this.setState({CallableFlag:e.target.value})} />
                              <TextField name="FixToFloatFlag" label="Fix To Float Flag" variant="filled" fullWidth value={this.state.FixToFloatFlag} onChange={(e)=>this.setState({FixToFloatFlag:e.target.value})}/>
                              <TextField name="PutableFlag" label="Putable Flag" variant="filled" fullWidth value={this.state.PutableFlag} onChange={(e)=>this.setState({PutableFlag:e.target.value})}/>
                              <TextField name="IssueDate" label="Issue Date" variant="filled" fullWidth value={this.state.IssueDate} onChange={(e)=>this.setState({IssueDate:e.target.value})}/>
                              <TextField name="LastResetDate" label="Last Reset Date" variant="filled" fullWidth value={this.state.LastResetDate} onChange={(e)=>this.setState({LastResetDate:e.target.value})}/>
                              <TextField name="Maturity" label="Maturity" variant="filled" fullWidth value={this.state.Maturity} onChange={(e)=>this.setState({Maturity:e.target.value})}/>
                              <TextField name="CallNotificationMaxDays" label="Call Notification Max Days" variant="filled" fullWidth value={this.state.CallNotificationMaxDays} onChange={(e)=>this.setState({CallNotificationMaxDays:e.target.value})}/>
                              <TextField name="PutNotificationMaxDays" label="Put Notification Max Days" variant="filled" fullWidth value={this.state.PutNotificationMaxDays} onChange={(e)=>this.setState({PutNotificationMaxDays:e.target.value})}/>
                              <TextField name="PenultimateCouponDate" label="Penultimate Coupon Date" variant="filled" fullWidth value={this.state.PenultimateCouponDate} onChange={(e)=>this.setState({PenultimateCouponDate:e.target.value})}/>
                              <TextField name="ResetFrequency" label="Reset Frequency" variant="filled" fullWidth value={this.state.ResetFrequency} onChange={(e)=>this.setState({ResetFrequency:e.target.value})}/>
                              <TextField name="HasPosition" label="Has Position" variant="filled" fullWidth value={this.state.HasPosition} onChange={(e)=>this.setState({HasPosition:e.target.value})}/>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <Typography variant="h6" gutterBottom component="div" className={classes.tab}>Risk</Typography>
                              <TextField name="MaculayDuration" label="Maculay Duration" variant="filled" fullWidth value={this.state.MaculayDuration} onChange={(e)=>this.setState({MaculayDuration:e.target.value})}/>
                              <TextField name="Volatility30D" label="Volatility30D" variant="filled" fullWidth value={this.state.Volatility30D} onChange={(e)=>this.setState({Volatility30D:e.target.value})}/>
                              <TextField name="Volatility90D" label="Volatility90D" variant="filled" fullWidth value={this.state.Volatility90D} onChange={(e)=>this.setState({Holatility90D:e.target.value})}/>
                              <TextField name="Convexity" label="Convexity" variant="filled" fullWidth value={this.state.Convexity} onChange={(e)=>this.setState({Convexity:e.target.value})}/>
                              <TextField name="AverageVolume30D" label="Average Volume 30D" variant="filled" fullWidth value={this.state.AverageVolume30D} onChange={(e)=>this.setState({AverageVolume30D:e.target.value})}/>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <Typography variant="h6" gutterBottom component="div" className={classes.tab}>Regulatory Details</Typography>
                              <TextField name="PFAssetClass" label="PF Asset Class" variant="filled" fullWidth value={this.state.PFAssetClass} onChange={(e)=>this.setState({PFAssetClass:e.target.value})}/>
                              <TextField name="PFCountry" label="PF Country" variant="filled" fullWidth value={this.state.PFCountry} onChange={(e)=>this.setState({PFCountry:e.target.value})}/>
                              <TextField name="PFCreditRating" label="PF Credit Rating" variant="filled" fullWidth value={this.state.PFCreditRating} onChange={(e)=>this.setState({PFCreditRating:e.target.value})}/>
                              <TextField name="PFCurrency" label="PF Currency" variant="filled" fullWidth value={this.state.PFCurrency} onChange={(e)=>this.setState({PFCurrency:e.target.value})}/>
                              <TextField name="PFInstrument" label="PF Instrument" variant="filled" fullWidth value={this.state.PFInstrument} onChange={(e)=>this.setState({PFInstrument:e.target.value})}/>
                              <TextField name="PFLiquidityProfile" label="PF Liquidity Profile" variant="filled" fullWidth value={this.state.PFLiquidityProfile} onChange={(e)=>this.setState({PFLiquidityProfile:e.target.value})}/>
                              <TextField name="PFMaturity" label="PF Maturity" variant="filled" fullWidth value={this.state.PFMaturity} onChange={(e)=>this.setState({PFMaturity:e.target.value})}/>
                              <TextField name="PFNAICSCode" label="PF NAICS Code" variant="filled" fullWidth value={this.state.PFNAICSCode} onChange={(e)=>this.setState({PFNAICSCode:e.target.value})}/>
                              <TextField name="PFRegion" label="PF Region" variant="filled" fullWidth value={this.state.PFRegion} onChange={(e)=>this.setState({PFRegion:e.target.value})}/>
                              <TextField name="PFSector" label="PF Sector" variant="filled" fullWidth value={this.state.PFSector} onChange={(e)=>this.setState({PFSector:e.target.value})}/>
                              <TextField name="PFSubAssetClass" label="PF Sub Asset Class" variant="filled" fullWidth value={this.state.PFSubAssetClass} onChange={(e)=>this.setState({PFSubAssetClass:e.target.value})}/>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <Typography variant="h6" gutterBottom component="div" className={classes.tab}>Reference Data</Typography>
                              <TextField name="BloombergIndustryGroup" label="Bloomberg Industry Group" variant="filled" fullWidth value={this.state.BloombergIndustryGroup} onChange={(e)=>this.setState({BloombergIndustryGroup:e.target.value})}/>
                              <TextField name="BloombergIndustrySubGroup" label="Bloomberg Industry SubGroup" variant="filled" fullWidth value={this.state.BloombergIndustrySubGroup} onChange={(e)=>this.setState({BloombergIndustrySubGroup:e.target.value})}/>
                              <TextField name="BloombergIndustrySector" label="Bloomberg Industry Sector" variant="filled" fullWidth value={this.state.BloombergIndustrySector} onChange={(e)=>this.setState({BloombergIndustrySector:e.target.value})}/>
                              <TextField name="CountryOfIssurance" label="Country Of Issurance" variant="filled" fullWidth value={this.state.CountryOfIssurance} onChange={(e)=>this.setState({CountryOfIssurance:e.target.value})}/>
                              <TextField name="IssueCurrency" label="Issue Currency" variant="filled" fullWidth value={this.state.IssueCurrency} onChange={(e)=>this.setState({IssueCurrency:e.target.value})}/>
                              <TextField name="Issuer" label="Issuer" variant="filled" fullWidth value={this.state.Issuer} onChange={(e)=>this.setState({Issuer:e.target.value})}/>
                              <TextField name="RiskCurrency" label="Risk Currency" variant="filled" fullWidth value={this.state.RiskCurrency} onChange={(e)=>this.setState({RiskCurrency:e.target.value})}/>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <Typography variant="h6" gutterBottom component="div" className={classes.tab}>Put Schedule</Typography>
                              <TextField name="PutDate" label="Put Date" variant="filled" fullWidth value={this.state.PutDate} onChange={(e)=>this.setState({PutDate:e.target.value})}/>
                              <TextField name="PutPrice" label="Put Price" variant="filled" fullWidth value={this.state.PutPrice} onChange={(e)=>this.setState({PutPrice:e.target.value})}/>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <Typography variant="h6" gutterBottom component="div" className={classes.tab}>Pricing And Analytics</Typography>
                              <TextField name="AskPrice" label="Ask Price" variant="filled" fullWidth value={this.state.AskPrice} onChange={(e)=>this.setState({AskPrice:e.target.value})}/>
                              <TextField name="HighPrice" label="High Price" variant="filled" fullWidth value={this.state.HighPrice} onChange={(e)=>this.setState({HighPrice:e.target.value})}/>
                              <TextField name="Volume" label="Volume" variant="filled" fullWidth value={this.state.Volume} onChange={(e)=>this.setState({Volume:e.target.value})}/>
                              <TextField name="LowPrice" label="Low Price" variant="filled" fullWidth value={this.state.LowPrice} onChange={(e)=>this.setState({LowPrice:e.target.value})}/>
                              <TextField name="BidPrice" label="Bid Price" variant="filled" fullWidth value={this.state.BidPrice} onChange={(e)=>this.setState({BidPrice:e.target.value})}/>
                              <TextField name="LastPrice" label="Last Price" variant="filled" fullWidth value={this.state.LastPrice} onChange={(e)=>this.setState({LastPrice:e.target.value})}/>
                              <TextField name="OpenPrice" label="Open Price" variant="filled" fullWidth value={this.state.OpenPrice} onChange={(e)=>this.setState({OpenPrice:e.target.value})}/>
                            </div>
                            
                            <div className={classes.tabHeading}>
                              <Typography variant="h6" gutterBottom component="div" className={classes.tab}>Call Schedule</Typography>
                              <TextField name="CallDate" label="Call Date" variant="filled" fullWidth value={this.state.CallDate} onChange={(e)=>this.setState({CallDate:e.target.value})}/>
                              <TextField name="CallPrice" label="Call Price" variant="filled" fullWidth value={this.state.CallPrice} onChange={(e)=>this.setState({CallPrice:e.target.value})}/>  
                            </div> 
                        </div> 
                    <Button variant="contained" className={classes.saveButton} style={{backgroundColor:"rgb(47, 46, 65)",marginTop:'20px'}} type="submit" fullWidth>SAVE</Button>
                 </form>
              </CardContent>

          </Card>
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Changes are Saved Successfully
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>OK</Button>
          </DialogActions>
        </Dialog>

      </Container>
    )
  }
}

export default withStyles(styles) (EditBond)