window.onload = function(){
/*console.log(data.find(x=>x.id === find).lname)*/
//alert(Math.sign(-1.3))

url="https://api.coinmarketcap.com/v1/ticker/?limit=20"
fetch(url)
.then((response)=>{
  return response.json()
})
.then((myJson)=>{
  //console.log/*(JSON.stringify*/(myJson)//)
  console.log(JSON.stringify(myJson.find(x=>x.id=="bitcoin").symbol));
  //BITCOIN
  bitcoinusd=myJson.find(x=>x.id=="bitcoin").price_usd;
  bitcoinbtc=myJson.find(x=>x.id=="bitcoin").price_btc;
  bitcoinavailable=myJson.find(x=>x.id=="bitcoin").available_supply;
  bitcoinpercent24=myJson.find(x=>x.id=="bitcoin").percent_change_24h
  $("#btcusd").html(parseFloat(bitcoinusd).toFixed(2))
  $("#btcusd2").html(parseFloat(bitcoinusd).toFixed(2))
  $("#btcbtc").html(parseFloat(bitcoinbtc))
  $("#btcvol").html(parseFloat(bitcoinavailable))
  $("#btcvol2").html(parseFloat(bitcoinavailable))
  $("#btcchg").html(parseFloat(bitcoinpercent24).toFixed(2)+"%")
  if(Math.sign(bitcoinpercent24)==-1){
    $("#btcchg").css("color","red")
  }
  else{$("#btcchg").css("color","rgb(41,219,41)")}
  

  //RIPPLE
  rippleusd=myJson.find(x=>x.id=="ripple").price_usd;
  rippleavailable=myJson.find(x=>x.id=="ripple").available_supply;
  ripplepercent24=myJson.find(x=>x.id=="ripple").percent_change_24h
  $("#xrpusd").html(parseFloat(rippleusd).toFixed(2))
  $("#xrpvol").html(parseFloat(rippleavailable))
  $("#xrpchg").html(parseFloat(ripplepercent24).toFixed(2)+"%")
  if(Math.sign(ripplepercent24)==-1){
    $("#xrpchg").css("color","red")
  }
  else{$("#xrpchg").css("color","rgb(41,219,41)")}

  //LITECOIN
  litecoinusd=myJson.find(x=>x.id=="litecoin").price_usd;
  litecoinbtc=myJson.find(x=>x.id=="litecoin").price_btc;
  litecoinavailable=myJson.find(x=>x.id=="litecoin").available_supply;
  litecoinpercent24=myJson.find(x=>x.id=="litecoin").percent_change_24h
  $("#ltcusd").html(parseFloat(litecoinusd).toFixed(2))
  $("#ltcusd2").html(parseFloat(litecoinusd).toFixed(2))
  $("#ltcbtc").html(parseFloat(litecoinbtc))
  $("#ltcvol").html(parseFloat(litecoinavailable))
  $("#ltcvol2").html(parseFloat(litecoinavailable))
  $("#ltcchg").html(parseFloat(litecoinpercent24).toFixed(2)+"%")
  if(Math.sign(litecoinpercent24)==-1){
    $("#ltcchg").css("color","red")
  }
  else{$("#ltcchg").css("color","rgb(41,219,41)")}

  //ETHEREUM
  ethereumusd=myJson.find(x=>x.id=="ethereum").price_usd;
  ethereumbtc=myJson.find(x=>x.id=="ethereum").price_btc;
  ethereumavailable=myJson.find(x=>x.id=="ethereum").available_supply;
  ethereumpercent24=myJson.find(x=>x.id=="ethereum").percent_change_24h
  $("#ethusd").html(parseFloat(ethereumusd).toFixed(2))
  $("#ethusd2").html(parseFloat(ethereumusd).toFixed(2))
  $("#ethbtc").html(parseFloat(ethereumbtc))
  $("#ethvol").html(parseFloat(ethereumavailable))
  $("#ethvol2").html(parseFloat(ethereumavailable))
  $("#ethchg").html(parseFloat(ethereumpercent24).toFixed(2)+"%")
  if(Math.sign(ethereumpercent24)==-1){
    $("#ethchg").css("color","red")
  }
  else{$("#ethchg").css("color","rgb(41,219,41)")}


  //EOS
  eosusd=myJson.find(x=>x.id=="eos").price_usd;
  eosavailable=myJson.find(x=>x.id=="eos").available_supply;
  eospercent24=myJson.find(x=>x.id=="eos").percent_change_24h
  $("#eosusd").html(parseFloat(eosusd).toFixed(2))
  $("#eosvol").html(parseFloat(eosavailable))
  $("#eoschg").html(parseFloat(eospercent24).toFixed(2)+"%")
  if(Math.sign(eospercent24)==-1){
    $("#eoschg").css("color","red")
  }
  else{$("#eoschg").css("color","rgb(41,219,41)")}


  //BITCOIN CASH
  bchusd=myJson.find(x=>x.id=="bitcoin-cash").price_usd;
  bchavailable=myJson.find(x=>x.id=="bitcoin-cash").available_supply;
  bchpercent24=myJson.find(x=>x.id=="bitcoin-cash").percent_change_24h
  $("#bchusd").html(parseFloat(bchusd).toFixed(2))
  $("#bchvol").html(parseFloat(bchavailable))
  $("#bchchg").html(parseFloat(bchpercent24).toFixed(2)+"%")
  if(Math.sign(bchpercent24)==-1){
    $("#bchchg").css("color","red")
  }
  else{$("#bchchg").css("color","rgb(41,219,41)")}


  //TETHER
  tetherusd=myJson.find(x=>x.id=="tether").price_usd;
  tetherbtc=myJson.find(x=>x.id=="tether").price_btc;
  tetheravailable=myJson.find(x=>x.id=="tether").available_supply;
  tetherpercent24=myJson.find(x=>x.id=="tether").percent_change_24h
  $("#usdtusd").html(parseFloat(tetherusd).toFixed(2))
  $("#usdtusd2").html(parseFloat(tetherusd).toFixed(2))
  $("#usdtbtc").html(parseFloat(tetherbtc))
  $("#usdtvol").html(parseFloat(tetheravailable))
  $("#usdtvol2").html(parseFloat(tetheravailable))
  $("#usdtchg").html(parseFloat(tetherpercent24).toFixed(2)+"%")
  if(Math.sign(tetherpercent24)==-1){
    $("#usdtchg").css("color","red")
  }
  else{$("#usdtchg").css("color","rgb(41,219,41)")}


  //TRON
  tronusd=myJson.find(x=>x.id=="tron").price_usd;
  tronavailable=myJson.find(x=>x.id=="tron").available_supply;
  tronpercent24=myJson.find(x=>x.id=="tron").percent_change_24h
  $("#trxusd").html(parseFloat(tronusd).toFixed(2))
  $("#trxvol").html(parseFloat(tronavailable))
  $("#trxchg").html(parseFloat(tronpercent24).toFixed(2)+"%")
  if(Math.sign(tronpercent24)==-1){
    $("#trxchg").css("color","red")
  }
  else{$("#trxchg").css("color","rgb(41,219,41)")}


  //STELLAR
  stellarusd=myJson.find(x=>x.id=="stellar").price_usd;
  stellarbtc=myJson.find(x=>x.id=="stellar").price_btc;
  stellaravailable=myJson.find(x=>x.id=="stellar").available_supply;
  stellarpercent24=myJson.find(x=>x.id=="stellar").percent_change_24h
  $("#xlmusd").html(parseFloat(stellarusd).toFixed(2))
  $("#xlmusd2").html(parseFloat(stellarusd).toFixed(2))
  $("#xlmbtc").html(parseFloat(stellarbtc))
  $("#xlmvol").html(parseFloat(stellaravailable))
  $("#xlmvol2").html(parseFloat(stellaravailable))
  $("#xlmchg").html(parseFloat(stellarpercent24).toFixed(2)+"%")
  if(Math.sign(stellarpercent24)==-1){
    $("#xlmchg").css("color","red")
  }
  else{$("#xlmchg").css("color","rgb(41,219,41)")}


  //BINANCE COIN
  binanceusd=myJson.find(x=>x.id=="binance-coin").price_usd;
  binancebtc=myJson.find(x=>x.id=="binance-coin").price_btc;
  binanceavailable=myJson.find(x=>x.id=="binance-coin").available_supply;
  binancepercent24=myJson.find(x=>x.id=="binance-coin").percent_change_24h
  $("#bnbusd").html(parseFloat(binanceusd).toFixed(2))
  $("#bnbusd2").html(parseFloat(binanceusd).toFixed(2))
  $("#bnbbtc").html(parseFloat(binancebtc))
  $("#bnbvol").html(parseFloat(binanceavailable))
  $("#bnbvol2").html(parseFloat(binanceavailable))
  $("#bnbchg").html(parseFloat(binancepercent24).toFixed(2)+"%")
  if(Math.sign(binancepercent24)==-1){
    $("#bnbchg").css("color","red")
  }
  else{$("#bnbchg").css("color","rgb(41,219,41)")}


  //BITCOIN SV
  bitcoinsvusd=myJson.find(x=>x.id=="bitcoin-sv").price_usd;
  bitcoinsvavailable=myJson.find(x=>x.id=="bitcoin-sv").available_supply;
  bitcoinsvpercent24=myJson.find(x=>x.id=="bitcoin-sv").percent_change_24h
  $("#bsvusd").html(parseFloat(bitcoinsvusd).toFixed(2))
  $("#bsvvol").html(parseFloat(bitcoinsvavailable))
  $("#bsvchg").html(parseFloat(bitcoinsvpercent24).toFixed(2)+"%")
  if(Math.sign(bitcoinsvpercent24)==-1){
    $("#bsvchg").css("color","red")
  }
  else{$("#bsvchg").css("color","rgb(41,219,41)")}


  //CARDANO
  cardanousd=myJson.find(x=>x.id=="cardano").price_usd;
  cardanoavailable=myJson.find(x=>x.id=="cardano").available_supply;
  cardanopercent24=myJson.find(x=>x.id=="cardano").percent_change_24h
  $("#adausd").html(parseFloat(cardanousd).toFixed(2))
  $("#adavol").html(parseFloat(cardanoavailable))
  $("#adachg").html(parseFloat(cardanopercent24).toFixed(2)+"%")
  if(Math.sign(cardanopercent24)==-1){
    $("#adachg").css("color","red")
  }
  else{$("#adachg").css("color","rgb(41,219,41)")}


  //MONERO
  monerousd=myJson.find(x=>x.id=="monero").price_usd;
  moneroavailable=myJson.find(x=>x.id=="monero").available_supply;
  moneropercent24=myJson.find(x=>x.id=="monero").percent_change_24h
  $("#xmrusd").html(parseFloat(monerousd).toFixed(2))
  $("#xmrvol").html(parseFloat(moneroavailable))
  $("#xmrchg").html(parseFloat(moneropercent24).toFixed(2)+"%")
  if(Math.sign(moneropercent24)==-1){
    $("#xmrchg").css("color","red")
  }
  else{$("#xmrchg").css("color","rgb(41,219,41)")}


  //IOTA
  iotausd=myJson.find(x=>x.id=="iota").price_usd;
  iotaavailable=myJson.find(x=>x.id=="iota").available_supply;
  iotapercent24=myJson.find(x=>x.id=="iota").percent_change_24h
  $("#miotausd").html(parseFloat(iotausd).toFixed(2))
  $("#miotavol").html(parseFloat(iotaavailable))
  $("#miotachg").html(parseFloat(iotapercent24).toFixed(2)+"%")
  if(Math.sign(iotapercent24)==-1){
    $("#miotachg").css("color","red")
  }
  else{$("#miotachg").css("color","rgb(41,219,41)")}


  //DASH
  dashusd=myJson.find(x=>x.id=="dash").price_usd;
  dashavailable=myJson.find(x=>x.id=="dash").available_supply;
  dashpercent24=myJson.find(x=>x.id=="dash").percent_change_24h
  $("#dashusd").html(parseFloat(dashusd).toFixed(2))
  $("#dashvol").html(parseFloat(dashavailable))
  $("#dashchg").html(parseFloat(dashpercent24).toFixed(2)+"%")
  if(Math.sign(dashpercent24)==-1){
    $("#dashchg").css("color","red")
  }
  else{$("#dashchg").css("color","rgb(41,219,41)")}


})

//alert("table")

//}







/*setInterval(()=>{
$("#width").html($(window).width())
},100)*/  




}
